import React from 'react'
import CustemNavbar from './components/navbar/Navbar.jsx'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Products from './components/products/Products.jsx'
import Resturant from './components/resturant/Resturant.jsx'
function App() {
  return (
    <>
      <BrowserRouter>
          <CustemNavbar />
          <Routes>
            <Route path='/products' element={<Products />}></Route>
            <Route path='/resturnat' element={<Resturant />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App