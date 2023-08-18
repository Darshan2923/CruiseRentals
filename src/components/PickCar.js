import React, { useState } from 'react'
import { CarData } from './CarData';
import CarBox from './CarBox';
import '../styles/PickCar.css'

const PickCar = () => {

    const [active, setActive] = useState("SecondCar");
    const [colorBtn, setColorBtn] = useState("btn1");

    const btnID = (id) => {
        setColorBtn(colorBtn === id ? "" : id);
    }

    const coloringButton = (id) => {
        return colorBtn === id ? "colored-button" : "";
    }

    return (
        <>
            <section className="pick-section">
                <div className="container">
                    <div className="pick-container">
                        <div className="pick-container__title">
                            <h3>Car Models</h3>
                            <h2>Our Rental fleet</h2>
                            <p>Select from an array of fantastic vehicles for your upcoming adventure or business travel.</p>
                        </div>
                        <div className="pick-container__car-content">
                            {/* pick car */}
                            <div className="pick-box">
                                <button
                                    className={`${coloringButton("btn1")}`}
                                    onClick={() => {
                                        setActive("SecondCar");
                                        btnID("btn1");
                                    }}
                                >
                                    Toyota Camry
                                </button>
                                <button
                                    className={`${coloringButton("btn2")}`}
                                    onClick={() => {
                                        setActive("FirstCar");
                                        btnID("btn2");
                                    }}
                                >
                                    Mercedes-Benz GLK
                                </button>
                                <button
                                    className={`${coloringButton("btn3")}`}
                                    onClick={() => {
                                        setActive("ThirdCar");
                                        btnID("btn3");
                                    }}
                                >
                                    Audi A1 S-Line
                                </button>
                                <button
                                    className={`${coloringButton("btn4")}`}
                                    onClick={() => {
                                        setActive("FourthCar");
                                        btnID("btn4");
                                    }}
                                >
                                    BMW 320 ModernLine
                                </button>
                                <button
                                    className={`${coloringButton("btn5")}`}
                                    onClick={() => {
                                        setActive("FifthCar");
                                        btnID("btn5");
                                    }}
                                >
                                    VW Golf 6
                                </button>
                                <button
                                    className={`${coloringButton("btn6")}`}
                                    onClick={() => {
                                        setActive("SixthCar");
                                        btnID("btn6");
                                    }}
                                >
                                    VW Passat CC
                                </button>
                            </div>
                            {active === "FirstCar" && <CarBox data={CarData} carId={0} />}
                            {active === "SecondCar" && <CarBox data={CarData} carId={1} />}
                            {active === "ThirdCar" && <CarBox data={CarData} carId={2} />}
                            {active === "FourthCar" && <CarBox data={CarData} carId={3} />}
                            {active === "FifthCar" && <CarBox data={CarData} carId={4} />}
                            {active === "SixCar" && <CarBox data={CarData} carId={5} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PickCar