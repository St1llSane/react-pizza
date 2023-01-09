import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PizzaPage() {
  const { id } = useParams()
  const [pizza, setPizza] = useState([])

  useEffect(() => {
    async function fetchingPizzaPage() {
      try {
        const { data } = await axios.get(
          `https://63b45a540f49ecf50888a07e.mockapi.io/pizzas/${id}`
        )
        setPizza(data)
      } catch {
        alert('Ошибка при загрузке страницы пиццы')
      }
    }
    fetchingPizzaPage()
  }, [])

  if (!pizza) return 'Загрузка...'

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza-img" width={450} />
      <h2>{pizza.name}</h2>
      <b>{pizza.price} рублей</b>
    </div>
  )
}

export default PizzaPage
