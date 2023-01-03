import { useState, useEffect } from 'react'
import Header from './components/Header'
import Categories from './components/Categories'
import Sort from './components/Sort'
import PizzaBlock from './components/PizzaBlock'
import './scss/app.scss'

function App() {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('https://63b45a540f49ecf50888a07e.mockapi.io/pizzas')
      .then((res) => res.json())
      .then((json) => setPizzas(json))
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map((pizza) => (
              <PizzaBlock {...pizza} key={pizza.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
