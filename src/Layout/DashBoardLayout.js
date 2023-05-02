import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashBoardLayout = () => {
  const {user} = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div className="max-w-[1200px] mx-auto">
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer"
         type="checkbox" 
         className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Bookings</Link>
            </li>
            <li>
              <Link to="/dashboard/allUsers">All Users</Link>
            </li>
            <li>
              <Link to="/dashboard/addProduct">Add Phone</Link>
            </li>
            <li>
              <Link to="/dashboard/myProducts">My Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
