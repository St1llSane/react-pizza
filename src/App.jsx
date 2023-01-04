import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Cart from './pages/Cart/Cart'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import './scss/app.scss'

function App() {
  const [searchPizzasQuery, setSearchPizzasQuery] = useState('')

  return (
    <div className="wrapper">
      <Header
        searchPizzasQuery={searchPizzasQuery}
        setSearchPizzasQuery={setSearchPizzasQuery}
      />
      <div className="content">
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home searchPizzasQuery={searchPizzasQuery} />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
