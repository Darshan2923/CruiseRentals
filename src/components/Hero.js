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


/*
const Hero = () => {
    const [goUp, setGoUp] = useState(false);
    // ...
This section defines a functional component named Hero. Functional components are building blocks in modern web development used to create reusable and manageable UI elements. The component uses the useState hook to create a state variable goUp and a function setGoUp to update it. This state will control whether the "scroll to top" button should be displayed or not.

let scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: 'smooth' });
}
Here, a function scrollToTop is defined. It uses the window.scrollTo method to smoothly scroll to the top of the page when called.



let bookBtn = () => {
    document.querySelector('#book').scrollIntoView({ behavior: "smooth" });
};
Another function bookBtn is defined. It finds an element with the ID "book" and smoothly scrolls the page to make that element visible.

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
The useEffect hook is used here to add an event listener to the scroll event of the window. When the user scrolls, the onPageScroll function is called. If the vertical scroll position (scrollY) is greater than 600 pixels, it sets goUp to true, indicating that the "scroll to top" button should be shown. Otherwise, it sets goUp to false. The useEffect hook also returns a cleanup function to remove the event listener when the component unmounts.

The rest of the code is JSX, which defines the structure and content of the component's UI. It creates a section with a hero image, text content, and buttons. The "scroll to top" button is conditionally displayed based on the goUp state.

This component seems to be a part of a web page that might be related to car rentals or travel. It encourages users to book a ride and provides a "scroll to top" button for convenience.

*/