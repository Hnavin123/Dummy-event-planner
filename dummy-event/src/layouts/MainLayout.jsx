
import React from 'react'
import { Outlet } from 'react-router-dom';

import Home from '../pages/public/Home';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <>
            <Navbar></Navbar>
            <main>
                <Outlet></Outlet>
                
            </main>
            <Footer></Footer>
        </>
    )
}

export default MainLayout