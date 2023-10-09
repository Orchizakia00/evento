import { createBrowserRouter } from "react-router-dom";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About/About";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
import Services from "../Pages/Services/Services";
import PrivateRoute from "./PrivateRoute";


    const router = createBrowserRouter([
        {
          path: "/",
          element: <MainLayout></MainLayout>,
          errorElement: <ErrorPage></ErrorPage>,
          children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/services/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>,
            }
          ]
        },
      ]);


export default router;