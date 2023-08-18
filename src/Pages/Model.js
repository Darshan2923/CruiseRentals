import React from 'react'
import HeroPages from '../components/HeroPages'
import '../styles/Banner.css'
import Footer from '../components/Footer'

const Models = () => {
    return (
        <>
            <section className="models-page">
                <HeroPages name="Models" />
                <div className="book-banner">
                    <div className="book-banner__overlay"></div>
                    <div className="container">
                        <div className="text-content">
                            <h2>Reserve a car by reaching out to us.</h2>
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

export default Models