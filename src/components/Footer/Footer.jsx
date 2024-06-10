import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
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
                        <p>BookMySpace is a platform that helps you find the perfect venue for your events.</p>
                    </div>
                    <div className="footer-content-center">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>Home</li>
                            <li>Restaurants</li>
                            <li>Banquets</li>
                            <li>Turfs</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="footer-content-right">
                        <h2>Connect With Us</h2>
                        <div className="social-icons">
                            {/* <FacebookIcon sx={{ fontSize: 30 }}  color="primary" /> */}
                            <InstagramIcon sx={{ fontSize: 35 }} style={{color:'#e63946'}}  />
                            <TwitterIcon sx={{ fontSize: 35 }} style={{color:'#00b4d8'}}/>
                            <XIcon sx={{ fontSize: 30 }}/>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2021 BookMySpace. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
