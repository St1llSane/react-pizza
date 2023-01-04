import '../../scss/components/categories.scss'

function Categories({ activeCategory, onClickCategory }) {
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
            onClick={() => onClickCategory(index)}
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
