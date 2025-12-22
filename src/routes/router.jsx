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
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyOrders from "../pages/Dashboard/Buyer/MyOrders/MyOrders";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers/ManageUsers";
import AddProduct from "../pages/Dashboard/Manager/AddProduct/AddProduct";
import BookingForm from "../pages/BookingForm/BookingForm";
import Payment from "../pages/Dashboard/Payment/Payment";

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
        path: 'booking-percel',
        element: <PrivateRoute><BookingForm></BookingForm></PrivateRoute>
      },
      {
        path: 'contact',
        Component: Contact
      },
      {
        path: "/product/:id",
        element: <PrivateRoute><ProductDetails /></PrivateRoute>
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

  // Dashboard
  {
    path: 'dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: 'my-orders',
        Component: MyOrders
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'my-profile'
      }
     
    ]
  },

  {
    path: '*',
    Component: NotFound
  }
]);