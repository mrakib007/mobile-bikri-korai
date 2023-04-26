import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../Layout/DashBoardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllUsers from "../Pages/Dashboard/Allusers/AllUsers";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import HomePage from "../Pages/Home/HomePage/HomePage";
import SingleCard from "../Pages/Home/HomePageCards/SingleCard";
import Login from "../Pages/Login/Login/Login";
import SignUp from "../Pages/Login/SignUp/SignUp";
import MobileDetails from "../Pages/Mobiles/MobileDetails/MoblieDetails";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <HomePage></HomePage> ,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/mobiles/:id',
                element: <MobileDetails></MobileDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/mobiles/${params.id}`)
            },
        ],
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allUsers',
                element: <AllUsers></AllUsers>
            },
            {
                path: '/dashboard/addProduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/myProducts',
                element: <MyProducts></MyProducts>
            }
        ]
    }
]);

export default router;
