import React from 'react'
import HeroPages from '../components/HeroPages'
import Footer from '../components/Footer'
import PlanTrip from '../components/PlanTrip'
import '../styles/HeroPages.css'

const About = () => {
    return (
        <>
            <section className="about-page">
                <HeroPages name="About" />
                <div className="container">
                    <div className="about-main">
                        <img src="" alt="car-rent-img" className='about-main__img' />
                        <div className="about-main__text">
                            <h3>About Our Company</h3>
                            <h2>Your adventure begins as you start the engine. </h2>
                            <p>
                                Embark on seamless journeys with our premium car rental services. Explore a diverse range of vehicles, relish competitive rates, and experience hassle-free booking. Your adventure begins with us!
                            </p>
                            <div className="about-main__text__icons">
                                <div className="about-main__text__icons__box">
                                    <img src="" alt="car-icon" />
                                    <span>
                                        <h4>15</h4>
                                        <p>Car Types</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src="" alt="car-icon" />
                                    <span>
                                        <h4>90+</h4>
                                        <p>Rental Distributers</p>
                                    </span>
                                </div>
                                <div className="about-main__text__icons__box">
                                    <img src="" alt="car-icon" />
                                    <span>
                                        <h4>60</h4>
                                        <p>Repair Shop</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <PlanTrip />
                </div>
            </section>
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
        </>
    )
}

export default About