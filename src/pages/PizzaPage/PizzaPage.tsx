import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PizzaPage: React.FC = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [pizza, setPizza] = useState<{
		imageUrl: string,
		name: string,
		price: number
	}>()

  useEffect(() => {
    async function fetchingPizzaPage() {
      try {
        const { data } = await axios.get(
          `https://63b45a540f49ecf50888a07e.mockapi.io/pizzas/${id}`
        )
        setPizza(data)
      } catch {
        alert('Ошибка при загрузке страницы пиццы')
        navigate('/')
      }
    }
    fetchingPizzaPage()
  }, [])

  if (!pizza) return <>Загрузка...</>

  return (
    <div className="container">
      <img src={pizza.imageUrl} alt="pizza-img" width={450} />
      <h2>{pizza.name}</h2>
      <b>{pizza.price} рублей</b>
    </div>
  )
}

export default PizzaPage
