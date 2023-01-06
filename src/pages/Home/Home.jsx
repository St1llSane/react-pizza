import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveCategory } from '../../redux/slices/filterSlice'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'
import PizzaBlock from '../../components/PizzaBlock'
import Pagination from '../../components/Pagination'
import axios from 'axios'

function Home() {
  const [pizzas, setPizzas] = useState([])
  const [pizzasCount, setPizzasCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  const searchPizzasQuery = useSelector(
    (state) => state.searchPizzasQuery
  )
  const { activeCategory, selectedSortItem } = useSelector(
    (state) => state.filterSlice
  )

  const dispatch = useDispatch()
  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index))
  }

  const searchByCategory =
    activeCategory > 0 ? `category=${activeCategory}` : ''
  const searchBySort = `sortBy=${selectedSortItem.sortProp}`
  const searchByInput = searchPizzasQuery ? `search=${searchPizzasQuery}` : ''

  useEffect(() => {
    setIsLoading(true)
    try {
      axios
        .get(
          `https://63b45a540f49ecf50888a07e.mockapi.io/pizzas?page=${currentPage}&limit=4&${searchByCategory}&${searchBySort}&${searchByInput}`
        )
        .then((res) => {
          setPizzas(res.data.pizzas)
          setPizzasCount(res.data.count)
          setIsLoading(false)
        })
    } catch (error) {
      alert('Ошибка при получении пицц')
    }
  }, [
    activeCategory,
    selectedSortItem.sortProp,
    searchPizzasQuery,
    currentPage,
  ])

  const skeletonPizzasRender = [...new Array(7).keys()].map((key) => (
    <PizzaBlockSkeleton key={key} />
  ))

  // const searchedPizzas =
  //   searchPizzasQuery.length > 0
  //     ? pizzas.filter((pizza) =>
  //         pizza.name.toLowerCase().includes(searchPizzasQuery.toLowerCase())
  //       )
  //     : pizzas

  const pizzasRender = pizzas.map((pizza) => (
    <PizzaBlock {...pizza} key={pizza.name} />
  ))

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={onChangeCategory}
        />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletonPizzasRender : pizzasRender}
      </div>
      <Pagination
        pizzasCount={pizzasCount}
        onChangePage={(page) => setCurrentPage(page)}
      />
    </>
  )
}

export default Home
