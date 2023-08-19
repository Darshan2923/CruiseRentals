import React from 'react'
import HeroPages from '../components/HeroPages'
import '../styles/Banner.css'
import Footer from '../components/Footer'
import CarImg1 from '../assets/Models/benz-box.png'
import CarImg2 from '../assets/Models/toyota-box.png'
import CarImg3 from '../assets/Models/audi-box.png'
import CarImg4 from '../assets/Models/bmw-box.png'
import CarImg5 from '../assets/Models/golf6-box.png'
import CarImg6 from '../assets/Models/passat-box.png'
import { Link } from 'react-router-dom'
import Models_Boxes from './Models_Boxes'

const Models = () => {
    return (
        <>
            <section className="models-page">
                <HeroPages name="Models" />
                <div className="container">
                    <div className="models-div">
                        {/* first box */}
                        <Models_Boxes />
                        <div className="models-div__box">
                            <div className="models-div__box__img">
                                <img src={CarImg1} alt="car-img" />
                                <div className="models-div__box__descr">
                                    <div className="models-div__box__descr__name-price">
                                        <div className="models-div__box__descr__name-price__name">
                                            <p>Mercedes</p>
                                            <span>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </span>
                                        </div>
                                        <div className="models-div__box__descr__name-price__price">
                                            <h4>₹2499</h4>
                                            <p>per day</p>
                                        </div>
                                    </div>
                                    <div className="models-div__box__descr__name-price__details">
                                        <span>
                                            <i className="fa-solid fa-car-side"></i>&nbsp; Benz GLK
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            4/5 &nbsp; <i className="fa-solid fa-car-side"></i>
                                        </span>
                                        <span>
                                            <i className="fa-solid fa-car-side"></i> &nbsp; Manual
                                        </span>
                                        <span style={{ textAlign: "right" }}>
                                            Diesel &nbsp; <i className="fa-solid fa-car-side"></i>
                                        </span>
                                    </div>
                                    <div className="models-div__box__descr__name-price__btn">
                                        <Link onClick={() => window.scrollTo(0, 0)} to='/'>
                                            Book Ride
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* second box */}
                        {/* third box */}
                        {/* fourth box */}
                        {/* fifth box */}
                        {/* sixth box */}
                    </div>
                </div>





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