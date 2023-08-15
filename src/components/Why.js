import React from 'react'
import MainImg from '../assets/WhyUs/group_cars_main.png'
import Box1 from '../assets/WhyUs/icon_1.jpg'
import Box2 from '../assets/WhyUs/icon_2.jpg'
import Box3 from '../assets/WhyUs/icon_3.jpg'
import '../styles/Why.css'


const Why = () => {
    return (
        <>
            <section className="choose-section">
                <div className="container">
                    <div className="choose-container">
                        <img src={MainImg} alt="car_img" className='choose-container__img' />
                        <div className="text-container">
                            <div className="text-container__left">
                                <h4>What Sets Us Apart</h4>
                                <h2>
                                    Unbeatable deals you will ever find</h2>
                                <p>
                                    Explore unparalleled deals featuring unbeatable offers for a premier value, allowing you to relish high-quality products and services affordably. Experience ultimate savings and an exceptional rental experience - seize this opportunity!</p>
                                <a href="#book">Discover &nbsp;
                                    <i className="fa-solid fa-angle-right"></i></a>
                            </div>
                            <div className="text-container__right">
                                <div className="text-container__right-box">
                                    <img src={Box1} alt="car-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>
                                            Journey Across Country</h4>
                                        <p>Elevate your road trip with our premium vehicles designed for your cross-country escapades.</p>
                                    </div>
                                </div>
                                {/* second box */}
                                <div className="text-container__right__box">
                                    <img src={Box2} alt="coin-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>
                                            Comprehensive Pricing</h4>
                                        <p>
                                            Access all essentials in a single, transparent cost through our all-inclusive pricing approach.
                                        </p>
                                    </div>
                                </div>
                                {/* third box */}
                                <div className="text-container__right__box">
                                    <img src={Box3} alt="coin-img" />
                                    <div className="text-container__right__box__text">
                                        <h4>Transparent Pricing</h4>
                                        <p>Experience tranquility with our commitment to no hidden charges. Our ethos revolves around transparent and straightforward pricing.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Why