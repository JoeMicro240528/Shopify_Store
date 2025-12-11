import { Outlet } from "react-router"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const MainLayouts = () => {
  return (
   <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  )
}

export default MainLayouts