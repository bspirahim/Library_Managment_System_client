import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddBook from "../Pages/AddBook/AddBook";
import AllBook from "../Pages/AllBook/AllBook";
import Dashboard from "../Pages/Dashboard/Dashboard";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allbook',
        element: <AllBook></AllBook>
      },
      {
        path: '/addbook',
        element: <AddBook></AddBook>
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
        path:'/dashboard',
        element:<Dashboard></Dashboard>
      }
      
    ]
  },

 

]);

export default router;