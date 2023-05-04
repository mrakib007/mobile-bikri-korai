import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const menuItems = 
    <React.Fragment>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/blogs">About</Link></li>
        {user?.uid ? (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link onClick={handleLogOut} className="lg:hidden md:hidden">Logout</Link></li>
            
          </>
        ) : (
          <li><Link className="lg:hidden md:hidden" to="/login">Login </Link></li>
        )}
    </React.Fragment>
  
  return (
            <div>
                <div className="navbar bg-base-100 max-w-[1150px] mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Mobile-Bikri-Korai</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user?.uid ?
          <>
          <Link onClick={handleLogOut} className="btn hidden lg:flex">Logout</Link>
          </>
          :
          <>
          <Link to="/login" className="btn hidden lg:flex">Login</Link>
          </>
        }

    <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                            <MdOutlineDashboardCustomize className='text-xl'></MdOutlineDashboardCustomize>
                        </label>
                    </ul>

      </div>
    </div>
            </div>

    // <div className="navbar max-w-[1150px] mx-auto mt-0 my-2 lg:px-28 lg:py-4 lg:sticky bg-base-100 top-0 z-50 mb-0">
    //         <div className="navbar-start">
    //             <div className="dropdown">
    //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //                 </label>
    //                 <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    //                     {menuItems}
    //                 </ul>
    //             </div>


    //             {/* Company Name */}
    //             <Link to='/' className="normal-case text-xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300 ">
    //                 <div className='flex items-center'>
    //                     <div className='mr-5 lg:text-white'><span className='text-2xl font-bold'>Mobile-<span className='text-[#fb6230]'>Bikri-Korai</span></span></div>
    //                 </div>
    //             </Link>
    //             {/*  */}

    //         </div>


    //         <div className="navbar-center hidden lg:flex">
    //             <ul className="menu menu-horizontal p-0 text-white">
    //                 {menuItems}
    //             </ul>
    //         </div>
    //         <div className="navbar-end ">

    //             <ul className="  menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none mr-3 text-[#fb6230]">
    //                 <ul >
    //                     {
    //                         user?.uid ?
    //                             <Link className='font-semibold' to='/'>{user?.displayName}</Link>
    //                             :
    //                             <></>
    //                     }
    //                 </ul>
    //             </ul>
    //             <ul className="menu menu-horizontal p-0 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
    //                 <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
    //                     <MdOutlineDashboardCustomize className='text-xl'></MdOutlineDashboardCustomize>
    //                 </label>
    //             </ul>
    //         </div>
    //     </div>
  );
};

export default NavBar;
