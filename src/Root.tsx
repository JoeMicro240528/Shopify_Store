import Footer from "./layouts/footer/Footer"
import Navbar from "./layouts/navbar/Navbar"
import Categories from "./pages/Categories"
import ErrorPage from "./pages/ErrorPage"
import Home from "./pages/Home"
import Products from "./pages/Products"
import ProductInfo from "./pages/ProductInfo"
import './styles/globalStyle.css'
import CartPage from "./pages/CartPage"
const Root = () => {
  return (
     <>
      <Navbar/>
      <CartPage/>
     </>
  )
}

export default Root