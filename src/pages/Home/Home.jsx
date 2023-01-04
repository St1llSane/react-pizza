import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'
import PizzaBlock from '../../components/PizzaBlock'
import Pagination from '../../components/Pagination'

function Home({ searchPizzasQuery }) {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState(0)
  const [selectedSortItem, setSelectedSortItem] = useState({
    name: 'Дороже',
    sortProp: 'price&order=desc',
  })

  const searchByCategory =
    activeCategory > 0 ? `category=${activeCategory}` : ''

  useEffect(() => {
    setIsLoading(true)
    fetch(
      `https://63b45a540f49ecf50888a07e.mockapi.io/pizzas?page=1&limit=4${searchByCategory}&sortBy=${selectedSortItem.sortProp}`
    )
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json)
        setIsLoading(false)
      })

    window.scrollTo(0, 0)
  }, [activeCategory, selectedSortItem])

  const skeletonPizzasRender = [...new Array(7).keys()].map((key) => (
    <PizzaBlockSkeleton key={key} />
  ))

  const searchedPizzas =
    searchPizzasQuery.length > 0
      ? pizzas.filter((pizza) =>
          pizza.name.toLowerCase().includes(searchPizzasQuery.toLowerCase())
        )
      : pizzas

  const pizzasRender = searchedPizzas.map((pizza) => (
    <PizzaBlock {...pizza} key={pizza.name} />
  ))

  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          onClickCategory={(index) => setActiveCategory(index)}
        />
        <Sort
          selectedSortItem={selectedSortItem}
          onSelectSort={(sortProp) => setSelectedSortItem(sortProp)}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading ? skeletonPizzasRender : pizzasRender}
      </div>
      <Pagination />
    </>
  )
}

export default Home
