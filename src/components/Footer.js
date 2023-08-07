import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="footer-content">
                        <ul className="footer-content__1">
                            <li><span>Cruise</span>Rental</li>
                            <li>Explore Our Diverse Fleet: Find the Ideal Vehicle for Your Driving Requirements.</li>
                            <li><a href="tel:987654321">
                                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 98765 43210</a></li>
                            <li><a href="https://xspeedstudio.com/" target='__blank' style={{ fontSize: "14px" }} rel='noreferrer'>Design by XspeedStudio</a></li>
                        </ul>
                        <ul className="footer-content__2">
                            <li>Comapny</li>
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
                                <input type="email" placeholder="Enter Email Address"></input>
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