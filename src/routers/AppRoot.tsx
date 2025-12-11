import Categories from "../pages/Categories"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Products from "../pages/Products"
import ProductInfo from "../pages/ProductInfo"
import '../styles/globalStyle.css'
import CartPage from "../pages/CartPage"
// import RegisterPage from "../pages/RegisterPage"
// import LoginPage from "../pages/LoginPage"
import ProfilePage from "../pages/ProfilePage"

import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from "../layouts/MainLayouts"
const AppRoot = () => {

  const router = createBrowserRouter([

    {
      path: "/", element: <MainLayouts />, errorElement: <ErrorPage />, children: [
        { index: true, element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'categories', element: <Categories /> },
        { path: 'all products', element: <Products /> },
        { path: 'product/:id', element: <ProductInfo />, 
          loader:({params}) =>{
            if(typeof(params.id) == "string"){
                throw new Response('Bad Request',{
                  statusText:'Product Not Found',
                  status:400,
                })
            } 

            return true;
          }
        },
        { path: 'cart', element: <CartPage /> },
        { path: 'profile', element: <ProfilePage /> },
      ]
    },

  ]);
  return (<RouterProvider router={router} />)
}

export default AppRoot