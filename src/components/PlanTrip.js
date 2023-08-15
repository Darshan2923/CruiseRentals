import React from 'react'
import Icon1 from '../assets/planTrip/icon_1.jpg'
import Icon2 from '../assets/planTrip/icon_2.jpg'
import Icon3 from '../assets/planTrip/icon_3.jpg'
import '../styles/PlanTrip.css'

const PlanTrip = () => {
    return (
        <>
            <section className="plan-section">
                <div className="container">
                    <div className="plan-container">
                        <div className="plan-container__title">
                            <h3>Start planning your trip now.</h3>
                            <h2>Fast and simple car rental</h2>
                        </div>
                        <div className="plan-container__boxes">
                            <div className="plan-container__boxes__box">
                                <img src={Icon1} alt="icon_img" />
                                <h3>Choose Car</h3>
                                <p>Explore our extensive vehicle selection, catering to all your driving requirements. Discover the ideal car tailored to your needs.</p>
                            </div>
                            <div className="plan-container__boxes__box">
                                <img src={Icon2} alt="icon_img" />
                                <h3>
                                    Call operator</h3>
                                <p>Our operators are available to assist, addressing queries and worries with expertise and kindness.</p>
                            </div>
                            <div className="plan-container__boxes__box">
                                <img src={Icon3} alt="icon_img" />
                                <h3>Time to drive</h3>
                                <p>

                                    For your road adventures, our diverse car collection has you protected.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PlanTrip