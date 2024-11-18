import React from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import Favicon from "react-favicon";
import { Outlet,useLocation } from 'react-router-dom';

const Root = () => {
    const faviconUrl = "https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_favicon.png";
    return (
        <div className='max-w-6xl mx-auto'>
            <Favicon url={faviconUrl} />
            <NavBar></NavBar>
            <Outlet></Outlet>
            
            <Footer></Footer>
            
            
        </div>
    );
};

export default Root;