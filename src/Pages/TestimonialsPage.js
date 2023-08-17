import React from 'react'
import HeroPages from '../components/HeroPages'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import '../styles/Contact_Banner.css'

const TestimonialsPage = () => {
    return (
        <div>
            <section className="testimonials-section">
                <HeroPages name="Testimonials" />
                <Testimonials />
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Book a car by getting in touch with us</h2>
                            <span>
                                <i className="fa-solid fa-phone"></i>
                                <h3>
                                    (+91) 98765 43210</h3>
                            </span>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </div>
    )
}

export default TestimonialsPage