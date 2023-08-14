import React from 'react'
import HeroPages from '../components/HeroPages'

const About = () => {
    return (
        <div>
            <section className="about-page">
                <HeroPages name="About" />
                <div className="container">
                    <div className="about-main">
                        <img src="" alt="car-rent-img" className='about-main__img' />
                        <div className="about-main__text">
                            <h3>About Company</h3>
                            <h2>Your adventure begins as you start the engine. </h2>
                            <p>
                                Embark on seamless journeys with our premium car rental services. Explore a diverse range of vehicles, relish competitive rates, and experience hassle-free booking. Your adventure begins with us!
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About