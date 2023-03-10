import debounce from 'lodash.debounce'
import { useDispatch } from 'react-redux'
import { useRef, useCallback, useState } from 'react'
import {
  setSearchPizzasQuery,
  resetPizzasQuery,
} from '../../redux/slices/searchPizzasQuery'
import {setCurrentPage} from '../../redux/slices/filterSlice'
import '../../scss/components/search.scss'

function Search() {
  const searchInputRef = useRef(null)
  const [value, setValue] = useState('')
  // const searchPizzasQuery = useSelector(
  //   (state) => state.searchPizzasQuery.searchPizzas
  // )

  const dispatch = useDispatch()
  const updateSearchInput = useCallback(
    debounce((value) => {
      dispatch(setSearchPizzasQuery(value))
      dispatch(setCurrentPage(1))
    }, 1000),
    []
  )

  const onSearchInput = (e) => {
    setValue(e.target.value)
    updateSearchInput(e.target.value)
  }

  const onResetInput = () => {
    setValue('')
    dispatch(resetPizzasQuery(''))
    searchInputRef.current.focus()
  }

  return (
    <div className="search">
      <label>
        <svg
          className="search__icon"
          enableBackground="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
        <input
          className="search__input"
          type="text"
          placeholder="Поиск..."
          value={value}
          ref={searchInputRef}
          onChange={onSearchInput}
        />
        <button className="search__close" onClick={onResetInput}>
          <svg height="200" id="Layer_1" viewBox="0 0 200 200" width="200">
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
        </button>
      </label>
    </div>
  )
}

export default Search
