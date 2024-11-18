import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { getStoreWishList } from '../../Utilities/wishtodo';
import { getStoreCartList } from '../../Utilities/carttodo';
const NavBar = () => {
    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/dash">Dashboard</NavLink></li>
        <li><NavLink to="/stat">Statistics</NavLink></li>
        <li><NavLink to="/new">Upcoming</NavLink></li>
    </>
    const storeWishList = getStoreWishList();
    const cartList = getStoreCartList();


    const location = useLocation();
    const isHomePage = location.pathname ==='/';
    return (
        <div className={`navbar ${isHomePage ? 'bg-[#9538E2] ' : 'bg-base-100'}`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                        
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Gadget Haven</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end bg-transparent gap-2">
               <span className="flex"><a className="btn rounded-full"><FaCartShopping/></a>
               <p className='mb-1 p-1 bg-orange-500 text-sm rounded-full h-[25px] ml-1'>{cartList.length}</p>
               </span>
               <span className="flex"><a className='btn rounded-full'><CiHeart/></a>
               <p className='mb-1 p-1 bg-orange-500 text-sm rounded-full h-[25px] ml-1'>{storeWishList.length}</p>
               </span>
                
            </div>
        </div>
    );
};

export default NavBar;