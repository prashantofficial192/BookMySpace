import React from 'react'
import { NavLink } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import TwitterIcon from '@mui/icons-material/Twitter';
import "./Footer.css"
import "./responsive.css"

const Footer = () => {
    return (
        <div className='footer-section'>
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-content-left">
                        <h1>BookMySpace</h1>
                        {/* <p>BookMySpace is a platform that helps you find the perfect venue for your events.</p> */}
                    </div>
                    <div className="footer-content-center">
                        {/* <h2>Quick Links</h2> */}
                        <ul>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/restaurant"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Restaurant
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/banquet"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Banquet
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/turf"
                                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                                >
                                    Turf
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        {/* <h2>Connect With Us</h2> */}
                        <div className="social-icons">
                            <InstagramIcon sx={{ fontSize: 35 }} style={{ color: '#e63946' }} />
                            <TwitterIcon sx={{ fontSize: 35 }} style={{ color: '#00b4d8' }} />
                            <XIcon sx={{ fontSize: 30 }} />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 BookMySpace. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
