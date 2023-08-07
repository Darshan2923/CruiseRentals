import React from 'react'
import Hero from '../components/Hero';
import BookCar from "../components/BookCar";
import PlanTrip from '../components/PlanTrip';
import PickCar from '../components/PickCar';
import Why from '../components/Why';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import Download from '../components/Download';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <Hero />
            <BookCar />
            <PlanTrip />
            <PickCar />
            <Why />
            <Testimonials />
            <Faq />
            <Download />
            <Footer />
        </div>
    )
}

export default Home