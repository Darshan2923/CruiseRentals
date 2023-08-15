import React from 'react'
import HeroPages from '../components/HeroPages'
import Footer from '../components/Footer'


const Contact = () => {
    return (
        <>
            <section className="contact-section">
                <HeroPages name="Contact" />
                <div className="container">
                    <div className="contact-div">
                        <div className="contact-div__text">
                            <h2>
                                Require supplementary details?</h2>
                            <p>
                                Experienced in research, development, and education, this professional strengthens your car rental service with 15+ years of versatile expertise.</p>
                            <a href="/">
                                <i className="fa-solid fa-phone"></i>&nbsp; (+91) 98765 43210
                            </a>
                            <a href="/">
                                <i className="fa-solid fa-envelope"></i>&nbsp;  cruiserental@gmail.com
                            </a>
                            <a href="/">
                                <i className="fa-solid fa-location-dot"></i>&nbsp; Mumbai,India
                            </a>
                        </div>
                        <div className="contact-div__form">
                            <form>
                                <label>
                                    <input type="text" placeholder='E.g.:"Jane Doe"' />
                                </label>
                                <label>
                                    Email <b>*</b>
                                </label>
                                <input type="email" placeholder="youremail@example.com"></input>

                                <label>
                                    Tell us about it <b>*</b>
                                </label>
                                <textarea placeholder="Write Here.."></textarea>
                                <button type='submit'>
                                    <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2> Secure Your Ride: Reach Out to Us for Car Booking.</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>(+91) 98765 43210</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact