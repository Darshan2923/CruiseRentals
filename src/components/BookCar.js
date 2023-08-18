import React, { useState } from 'react'

const BookCar = () => {
    const [modal, setModal] = useState(false); //  class - active-modal

    // booking car
    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");



    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "none";
    };


    // open modal when all inputs are fulfilled
    const openModal = (e) => {
        e.preventDefault();
        const errorMsg = document.querySelector(".error-message");
        if (
            pickUp === "" ||
            dropOff === "" ||
            pickTime === "" ||
            dropTime === "" ||
            carType === ""
        ) {
            errorMsg.style.display = "flex";
        } else {
            setModal(!modal);
            const modalDiv = document.querySelector(".booking-modal");
            modalDiv.scroll(0, 0);
            errorMsg.style.display = "none";
        }
    };








    return (
        <>
            <section id='book'>
                {/* overlay */}
                <div
                    className={`modal-overlay ${modal ? "active-modal" : ""}`}
                    onClick={openModal}></div>

                <div className="container">
                    <div className="book-content">
                        <div className="book-content__box">
                            <h2>Book a car</h2>

                            <p className="error-message">
                                Pls fill all fields! <i className="fa-solid fa-xmark"></i>
                            </p>

                            <p className="booking-done">
                                Check your email to confirm an oredr.{""}
                                <i onClick={hideMessage} className='fa-solid fa-xmark'></i>
                            </p>

                            <form className="box-form">
                                <div className="box-form__car-type">
                                    {/* Select car model */}
                                    <label htmlFor='car-type__choose'>
                                        <i className="fa-solid fa-car"></i>&nbsp; Select Your Model Type <b>*</b>
                                    </label>
                                    <select value={carType} name="car-type__choose" id="car-type__choose"
                                        onChange={(e) => {
                                            setCarType(e.target.value);
                                            setCarImg(e.target.value);
                                        }}>
                                        <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
                                        <option value="Toyota Camry">Toyota Camry</option>
                                        <option value="Audi A1 S-Line">Audi A1 S-Line</option>
                                        <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
                                        <option value="VW Golf 6">VW Golf 6</option>
                                        <option value="VW Passat CC">VW Passat CC</option>
                                    </select>
                                </div>

                                {/* Pick-Up */}
                                <div className="box-form__car-type">
                                    {/* Select car model */}
                                    <label htmlFor='pick-up__source'>
                                        <i className="fa-solid fa-location-dot"></i>&nbsp; Pick Up{""} <b>*</b>
                                    </label>
                                    <select value={pickUp} name='pick-up__source' id="car-type__choose"
                                        onChange={(e) => {
                                            setPickUp(e.target.value);
                                        }}>
                                        <option>Select Pick Up Location</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Hyderabad</option>
                                        <option>Kolkata</option>
                                        <option>Chennai</option>
                                        <option >Ahemdabad</option>
                                        <option >Goa</option>
                                        <option >Jaipur</option>
                                    </select>
                                </div>

                                {/* Drop Off */}
                                <div className="box-form__car-type">
                                    {/* Select car model */}
                                    <label htmlFor='drop-off__dest'>
                                        <i className="fa-solid fa-location-dot"></i>&nbsp; DropOff{""} <b>*</b>
                                    </label>
                                    <select value={dropOff} name="drop-off__dest" id="car-type__choose"
                                        onChange={(e) => {
                                            setDropOff(e.target.value);
                                        }}>
                                        <option>Select Pick Up Location</option>
                                        <option>Mumbai</option>
                                        <option>Delhi</option>
                                        <option>Hyderabad</option>
                                        <option>Kolkata</option>
                                        <option>Chennai</option>
                                        <option >Ahemdabad</option>
                                        <option >Goa</option>
                                        <option >Jaipur</option>
                                    </select>
                                </div>

                                {/* Pick Up Date */}
                                <div className="box-form__car-time">
                                    <label htmlFor="picktime">
                                        <i className="fa-regular fa-calendar-days "></i> &nbsp;
                                        Pick-up Date<b>*</b>
                                    </label>
                                    <input
                                        id="picktime"
                                        value={pickTime}
                                        onChange={(e) => { setPickTime(e.target.value) }}
                                        type="date"
                                    ></input>
                                </div>

                                {/* Drop-Off Date */}
                                <div className="box-form__car-time">
                                    <label htmlFor="droptime">
                                        <i className="fa-regular fa-calendar-days "></i> &nbsp;
                                        Drop-off <b>*</b>
                                    </label>
                                    <input
                                        id="droptime"
                                        value={dropTime}
                                        onChange={(e) => { setDropTime(e.target.value) }}
                                        type="date"
                                    ></input>
                                </div>
                                <button onClick={openModal} type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default BookCar