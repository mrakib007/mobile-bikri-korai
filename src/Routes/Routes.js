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
import SellerRoute from './SellerRoute/SellerRoute';
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import BuyerRoute from "./BuyerRoute/BuyerRoute";
import AdminRoute from "./AdminRoute/AdminRoute";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

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
                loader: ({params}) => fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/mobiles/${params.id}`)
            },
        ],
    },
    {
        path: '/dashboard',
        element: <PrivateRoutes>
            <DashBoardLayout></DashBoardLayout>
            </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path: '/dashboard/allUsers',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            },
            {
                path: '/dashboard/addProduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>,
                loader: () => fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/mobiles`)
            },
            {
                path: '/dashboard/myProducts',
                element: <SellerRoute> <MyProducts></MyProducts> </SellerRoute>,
            },
            {
                path:'/dashboard/myOrders',
                element: <BuyerRoute><MyBookings></MyBookings></BuyerRoute>
            },
            {
                path: '/dashboard/payment/:id',
                element: <BuyerRoute><Payment></Payment></BuyerRoute>,
                loader: ({params}) => fetch(`https://y-9jemzp2tg-mrakib007.vercel.app/bookings/${params.id}`)
            }
        ]
    },{
        path: '*',element: <div>
            <NavBar></NavBar>
            <ErrorPage></ErrorPage>,
            <Footer></Footer>
        </div>
    }
]);

export default router;
