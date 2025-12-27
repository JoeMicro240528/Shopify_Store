import ErrorPage from "../pages/ErrorPage"
import '../styles/globalStyle.css'
import RegisterPage from "../pages/RegisterPage"
import LoginPage from "../pages/LoginPage"
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayouts from "../layouts/MainLayouts"
import { lazy } from 'react'
import { Suspense } from 'react'
import LottieHandeller from "../components/shared/LottieHandeller";
import { ProtectedRoute } from "../components/shared/Auth/ProtectedRoute";

const Home = lazy(() => import('../pages/Home'));
const Categories = lazy(() => import('../pages/Categories'));
const Products = lazy(() => import('../pages/Products'));
const ProductInfo = lazy(() => import('../pages/ProductInfo'));
const CartPage = lazy(() => import('../pages/CartPage'));
const ProfilePage = lazy(() => import('../pages/ProfilePage'));
const WishlistPage = lazy(() => import('../pages/WishlistPage'));
const AppRoot = () => {

  const router = createBrowserRouter([

    {
      path: "/", element: <MainLayouts />, errorElement: <ErrorPage />, children: [
        { index: true, element: <Suspense fallback={<LottieHandeller type="loading" />}><Home /></Suspense> },
        { path: 'home', element: <Suspense fallback={<LottieHandeller type="loading" />}><Home /></Suspense> },
        {
          path: 'categories', element: <Suspense fallback={<LottieHandeller type="loading" />}><Categories /></Suspense>
        },
        { path: 'all products', element: <Suspense fallback={<LottieHandeller type="loading" />}><Products /></Suspense> },
        {
          path: 'wishlist', element:
            <ProtectedRoute>
              <Suspense fallback={<LottieHandeller type="loading" />}>
                <WishlistPage />
              </Suspense>
            </ProtectedRoute>

        },
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
          path: 'products/:id', element: <Suspense fallback={<LottieHandeller type="loading" />}><ProductInfo /></Suspense>,
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
        {
          path: 'cart', element:
            <ProtectedRoute>
              <Suspense fallback={<LottieHandeller type="loading" />}>
                <CartPage />
              </Suspense>
            </ProtectedRoute>
        },
        {
          path: 'profile', element:
            <ProtectedRoute>
              <Suspense fallback={<LottieHandeller type="loading" />}>
                <ProfilePage />
              </Suspense>
            </ProtectedRoute>
        },
        { path: 'register', element: <Suspense fallback={<LottieHandeller type="loading" />}><RegisterPage /></Suspense> },
        { path: 'login', element: <Suspense fallback={<LottieHandeller type="loading" />}><LoginPage /></Suspense> }
      ]
    },

  ]);
  return (<RouterProvider router={router} />)
}

export default AppRoot