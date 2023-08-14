import React from 'react'
import Img1 from '../assets/testimonials/sierre_leone.jpg'
import Img2 from '../assets/testimonials/rakhi_madanna.jpg'
import '../styles/Testimonials.css'

const Testimonials = () => {
    return (
        <div>
            <section className="testimonials-section">
                <div className="container">
                    <div className="testimonials-content">
                        <div className="testimonials-content__title">
                            <h4>Reviewed by Individuals</h4>
                            <h2>Client's Testimonials</h2>
                            <p>
                                Explore the transformative influence we've had on our clients by delving into their heartfelt testimonials. Our clients have first-hand encounters with our services and outcomes, and they're enthusiastic about sharing their uplifting journeys with you.
                            </p>
                        </div>
                        <div className="all-testimonials">
                            <div className="all-testimonials__box">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    We decided to rent a car from this website and the experience was absolutely fantastic! Booking the car was a breeze, and the rental rates were surprisingly affordable.
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img1} alt="user_img" />
                                        <span>
                                            <h4>Sierre Leone</h4>
                                            <p>Goa</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="all-testimonials__box box-2">
                                <span className="quotes-icon">
                                    <i className="fa-solid fa-quote-right"></i>
                                </span>
                                <p>
                                    The car was in excellent shape and truly enhanced our trip. I highly recommend this car rental website.
                                </p>
                                <div className="all-testimonials__box__name">
                                    <div className="all-testimonials__box__name__profile">
                                        <img src={Img2} alt="user_img" />
                                        <span>
                                            <h4>Rashi Mandanna</h4>
                                            <p>Mumbai</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Testimonials