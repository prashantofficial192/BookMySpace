// Header.jsx
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from "react-router-dom"
import './Header.css';

const Header = () => {
    const navigate = useNavigate();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <h1 onClick={() => navigate('/')}>BookMySpace</h1>
                </div>
                <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/restaurant"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Restaurant
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/banquet"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Banquet
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/turf"
                                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                            >
                                Turf
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <button className="nav-toggle" onClick={toggleNav}>
                    <MenuIcon fontSize="large" style={{ color: "white" }} />
                </button>
            </div>
        </header>
    );
};

export default Header;
