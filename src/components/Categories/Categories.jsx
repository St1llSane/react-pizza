import '../../scss/components/categories.scss'
import { useState } from 'react'

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            onClick={() => setActiveCategory(index)}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
