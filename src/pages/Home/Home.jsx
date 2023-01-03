import { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import Sort from '../../components/Sort'
import PizzaBlockSkeleton from '../../components/PizzaBlock/PizzaBlockSkeleton'
import PizzaBlock from '../../components/PizzaBlock'

function Home() {
  const [pizzas, setPizzas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://63b45a540f49ecf50888a07e.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json)
        setIsLoading(false)
      })
  }, [])

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(7)].map((_, index) => (
              <PizzaBlockSkeleton key={index} />
            ))
          : pizzas.map((pizza) => <PizzaBlock {...pizza} key={pizza.name} />)}
      </div>
    </>
  )
}

export default Home
