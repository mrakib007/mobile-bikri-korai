import React from "react";
import { Link, Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar/NavBar";

const DashBoardLayout = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <NavBar></NavBar>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard">My Bookings</Link>
            </li>
            <li>
              {
                'This is temporary'
              }
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
