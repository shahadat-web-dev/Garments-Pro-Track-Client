import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home/home/Home";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import NotFound from "../components/NotFound";
import AllProducts from "../pages/AllProducts";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: 'all-products',
        Component: AllProducts
      },
      {
        path: 'about',
        Component: AboutUs
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      }

    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: 'login',
        Component: Login
      },
      {
        path: 'register',
        Component: Register
      }
    ]
  },
  {
    path: '*',
    Component: NotFound
  }
]);