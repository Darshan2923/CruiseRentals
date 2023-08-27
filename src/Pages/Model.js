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
import ModelsBoxes from './ModelBoxes';
import '../styles/Models.css'

const Models = () => {
    return (
        <>
            <section className="models-page">
                <HeroPages name="Models" />
                <div className="container">
                    <div className="models-div">
                        {/* first box */}
                        <ModelsBoxes carImg={CarImg1} carName='Mercedes' carPrice="₹2999" carModel=" Benz GLK" carDoors="4/5" carCapacity="6 + 1 driver" carFuel="Diesel" />
                        {/* second box */}
                        <ModelsBoxes carImg={CarImg2} carName='Toyota' carPrice="₹2499" carModel=" Camry" carDoors="4/5" carCapacity="4 + 1 driver" carFuel="Hybrid" />
                        {/* third box */}
                        <ModelsBoxes carImg={CarImg3} carName='Audi A1' carPrice="₹2499" carModel=" Audi" carDoors="4/5" carCapacity="4 + 1 driver" carFuel="Gasoline" />
                        {/* fourth box */}
                        <ModelsBoxes carImg={CarImg4} carName='Bmw 320' carPrice="₹2499" carModel="320" carDoors="4/5" carCapacity="4 + 1 driver" carFuel="Diesel" />
                        {/* fifth box */}
                        <ModelsBoxes carImg={CarImg5} carName='VW Golf' carPrice="₹2199" carModel=" Golf 6" carDoors="4/5" carCapacity="4 + 1 driver" carFuel="Diesel" />
                        {/* sixth box */}
                        <ModelsBoxes carImg={CarImg6} carName='VW Passat' carPrice="₹1999" carModel="Passat CC" carDoors="4/5" carCapacity="6 + 1 driver" carFuel="Gasoline" />
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