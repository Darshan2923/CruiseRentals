import React, { useEffect, useState } from 'react';
import BgShape from '../assets/hero/hero_bg.png';
import HeroCar from '../assets/hero/mahindra_xuv700.png';
import { Link } from 'react-router-dom';
import '../styles/Hero.css'

const Hero = () => {
    const [goUp, setGoUp] = useState(false);
    // scroll top function
    let scrollToTop = () => {
        window.scrollTo({ top: (0, 0), behavior: 'smooth' });
    }

    //bookBtn
    let bookBtn = () => {
        document.querySelector('#book').scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        const onPageScroll = () => {
            if (window.scrollY > 600) {
                setGoUp(true);
            } else {
                setGoUp(false);
            }
        };
        window.addEventListener('scroll', onPageScroll);
        return () => {
            window.removeEventListener("scroll", onPageScroll)
        };
    }, []);
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img src={BgShape} alt="bg-shape" className="bg-shape" />
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Set your voyage in motion today</h4>
                            <h1> Save <span>substantial</span> with our offers</h1>
                            <p>
                                Drive your fantasy car. Unmatched rates, endless miles, adaptable pickup choices, and numerous extras.</p>
                            <div className="hero-content__text__btns">
                                <Link onClick={bookBtn} className='hero-content__text__btns__book-ride' to='/'>
                                    Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link className='hero-content__text__btns__learn-more' to='/about'>
                                    Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* image */}
                        <img
                            src={HeroCar}
                            alt="car-img"
                            className="hero-content__car-img"
                        />
                    </div>
                </div>

                {/* page up */}
                <div
                    onClick={scrollToTop}
                    className={`scroll-up ${goUp ? "show-scroll" : ""}`}
                >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        </>

    )
};

export default Hero;