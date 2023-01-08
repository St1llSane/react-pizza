import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setActiveCategory,
  setCurrentPage,
} from '../../redux/slices/filterSlice'
import { fetchPizzas } from '../../redux/slices/pizzasSlice'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'
import PizzaBlock from '../../components/PizzaBlock'
import Pagination from '../../components/Pagination'

function Home() {
  const { pizzas, status } = useSelector((state) => state.pizzasSlice)
  const searchPizzasQuery = useSelector(
    (state) => state.searchPizzasQuery.searchPizzas
  )
  const { activeCategory, selectedSortItem, currentPage } = useSelector(
    (state) => state.filterSlice
  )

  const dispatch = useDispatch()
  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index))
    dispatch(setCurrentPage(1))
  }

  const searchByCategory =
    activeCategory > 0 ? `category=${activeCategory}` : ''
  const searchBySort = `sortBy=${selectedSortItem.sortProp}`
  const searchByInput = searchPizzasQuery ? `search=${searchPizzasQuery}` : ''

  useEffect(() => {
    dispatch(
      fetchPizzas({
        searchByCategory,
        searchBySort,
        searchByInput,
        currentPage,
      })
    )
    // dispatch(fetchPizzas(count))
    // dispatch(setPizzas(data.pizzas))
    // setPizzasCount(data.count)
  }, [
    activeCategory,
    selectedSortItem.sortProp,
    searchPizzasQuery,
    currentPage,
  ])

  const onChangePage = (num) => {
    dispatch(setCurrentPage(num))
  }

  const skeletonPizzasRender = [...new Array(7).keys()].map((key) => (
    <PizzaBlockSkeleton key={key} />
  ))

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
      {status === 'error' ? (
        <h3 style={{ textAlign: 'center', fontSize: '30px' }}>
          Ошибка при загрузке товаров...
        </h3>
      ) : (
        <div className="content__items">
          {status === 'loading' ? skeletonPizzasRender : pizzasRender}
        </div>
      )}

      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
    </>
  )
}

export default Home
