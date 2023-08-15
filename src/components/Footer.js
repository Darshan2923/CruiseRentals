import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li><span>Cruise</span>Rental</li>
                            <li className='footer-content__1__para'>Explore Our Diverse Fleet: Find the Ideal Vehicle for Your Driving Requirements.</li>
                            <li className='footer-content__1__tel' ><a href="tel:987654321">
                                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 98765 43210</a></li>
                            <li className='footer-content__1__email'>
                                <a
                                    href="mailto: 
                cruiserental@gmail.com"
                                >
                                    <i className="fa-solid fa-envelope"></i>
                                    &nbsp; cruiserental@gmail.com
                                </a>
                            </li>
                            <li className='footer-content__1__site'><a href="https://xspeedstudio.com/" target='__blank' style={{ fontSize: "14px" }} rel='noreferrer'>Design by XspeedStudio</a></li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Company</li>
                            <li><a href="#home">Mumbai</a></li>
                            <li><a href="#home">Careers</a></li>
                            <li><a href="#home">Mobile</a></li>
                            <li><a href="#home">Blog</a></li>
                            <li><a href="#home">How we work</a></li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Working Hours</li>
                            <li>Mon - Fri: 8:00AM - 10:00PM</li>
                            <li>Sat: 9:00AM - 7:00PM</li>
                            <li>Sun: Closed</li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Subscription</li>
                            <li>
                                <p>Subscribe your Email address for latest news & updates.</p>
                            </li>
                            <li>
                                <input className='footer-content__2__input' type="email" placeholder="Enter Email Address"></input>
                            </li>
                            <li>
                                <button className="submit-email">Submit</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer