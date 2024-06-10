import React from 'react'
import Header from './components/Navbar/Header'
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
