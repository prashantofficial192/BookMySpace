import React from 'react'
import Header from './components/Navbar/Header'
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom'

// Root component that provides the layout for the application

function Root() {
    return (
        <>
            <Header />
            <Outlet /> {/*Render the matched child route's component */}
            <Footer />
        </>
    )
}

export default Root
