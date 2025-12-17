import ErrorPage from "../pages/ErrorPage"
import '../styles/globalStyle.css'
// import RegisterPage from "../pages/RegisterPage"
// import LoginPage from "../pages/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from "../layouts/MainLayouts"
import { lazy } from 'react'
const Home = lazy(() => import('../pages/Home'));
const Categories = lazy(() => import('../pages/Categories'));
const Products = lazy(() => import('../pages/Products'));
const ProductInfo = lazy(() => import('../pages/ProductInfo'));
const CartPage = lazy(() => import('../pages/CartPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));

//applay lazy loading
import { Suspense } from 'react'
const AppRoot = () => {

  const router = createBrowserRouter([

    {
      path: "/", element: <MainLayouts />, errorElement: <ErrorPage />, children: [
        { index: true, element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
        { path: 'home', element: <Suspense fallback={<div>Loading...</div>}><Home /></Suspense> },
        {
          path: 'categories', element: <Suspense fallback={<div>Loading...</div>}><Categories /></Suspense>
        },
        { path: 'all products', element: <Suspense fallback={<div>Loading...</div>}><Products /></Suspense> },
        { path: 'wishlist', element: <Suspense fallback={<div>Loading...</div>}><WishlistPage /></Suspense> },
        {
          path: 'category/product/:slug', element: <Products />,
          loader: ({ params }) => {
            if (typeof (params.slug) !== "string" && typeof (params.slug) !== "number") {
              throw new Response('Bad Request', {
                statusText: 'Product Not Found',
                status: 400,
              })
            }

            return true;
          }
        },
        {
          path: 'products/:id', element: <Suspense fallback={<div>Loading...</div>}><ProductInfo /></Suspense>,
          loader: ({ params }) => {
            if (typeof (params.id) !== "number" && typeof (params.id) !== "string") {
              throw new Response('Bad Request', {
                statusText: 'Product Not Found',
                status: 400,
              })
            }

            return true;
          }
        },
        { path: 'cart', element: <Suspense fallback={<div>Loading...</div>}><CartPage /></Suspense> },
        { path: 'profile', element: <Suspense fallback={<div>Loading...</div>}><ProfilePage /></Suspense> },
      ]
    },

  ]);
  return (<RouterProvider router={router} />)
}

export default AppRoot