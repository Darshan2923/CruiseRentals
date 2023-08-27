import React, { useEffect, useState } from 'react'
import '../styles/BookCar.css'
import CarAudi from "../assets/Models/audia1.jpg";
import CarGolf from "../assets/Models/golf6.jpg";
import CarToyota from "../assets/Models/toyotacamry.jpg";
import CarBmw from "../assets/Models/bmw320.jpg";
import CarMercedes from "../assets/Models/benz.jpg";
import CarPassat from "../assets/Models/passatcc.jpg";


const BookCar = () => {
    const [modal, setModal] = useState(false); //  class - active-modal

    // booking car
    const [carType, setCarType] = useState("");
    const [pickUp, setPickUp] = useState("");
    const [dropOff, setDropOff] = useState("");
    const [pickTime, setPickTime] = useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");

    // modal infos
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");

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

    //disable page scrolling when modal is displayed
    useEffect(() => {
        if (modal === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [modal]);

    //confirm modal booking
    const confirmBooking = (e) => {
        e.preventDefault();
        setModal(!modal);
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "flex";
    };

    //taking value of booking inputs
    const handleCar = (e) => {
        setCarType(e.target.value);
        setCarImg(e.target.value);
    };

    //Based on value name show, car img
    let imgUrl;
    switch (carImg) {
        case "Audi A1 S-Line":
            imgUrl = CarAudi;
            break;
        case "VW Golf 6":
            imgUrl = CarGolf;
            break;
        case "Toyota Camry":
            imgUrl = CarToyota;
            break;
        case "BMW 320 ModernLine":
            imgUrl = CarBmw;
            break;
        case "Mercedes-Benz GLK":
            imgUrl = CarMercedes;
            break;
        case "VW Passat CC":
            imgUrl = CarPassat;
            break;
        default:
            imgUrl = "";
    }









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

                            <p className="error-message" >
                                Please fill all fields! <i className="fa-solid fa-xmark" onClick={hideMessage}></i>
                            </p>

                            <p className="booking-done" >
                                Check your email to confirm an order.{" "}
                                <i onClick={hideMessage} style={{ cursor: 'pointer' }} className='fa-solid fa-xmark' ></i>
                            </p>

                            <form className="box-form">
                                <div className="box-form__car-type">
                                    {/* Select car model */}
                                    <label htmlFor='car-type__choose'>
                                        <i className="fa-solid fa-car" ></i>&nbsp; Select Your Model Type <b>*</b>
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
                                        <i className="fa-solid fa-location-dot" ></i>&nbsp; Pick-Up{""} <b>*</b>
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
                                        name='picktime'
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
                                        name='droptime'
                                        id="droptime"
                                        value={dropTime}
                                        onChange={(e) => { setDropTime(e.target.value) }}
                                        type="date"
                                    ></input>
                                </div>
                                <button className='book-car__btn' onClick={openModal} type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* modal ------------------------------------ */}
            <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
                {/* title */}
                <div className="booking-modal__title">
                    <h2>Finalize Reservation</h2>
                    <i onClick={openModal} className="fa-solid fa-xmark"></i>
                </div>
                {/* message */}
                <div className="booking-modal__message">
                    <h4>
                        <i className="fa-solid fa-circle-info"></i>Upon finalizing this reservation inquiry, you will receive:
                    </h4>
                    <p>Upon completing this rental inquiry, you will be provided with a rental voucher for the rental desk and a toll-free customer support number.</p>
                </div>
                {/* car info */}
                <div className="booking-modal__car-info">
                    <div className="dates-div">
                        <div className="booking-modal__car-info__dates">
                            <h5>Location & Date</h5>
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Pick-Up Date & Time</h6>
                                    <p>
                                        {pickTime}/{" "}
                                        <input type="time" className='input-time' />
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-location-dot"></i>
                                <div>
                                    <h6>Drop-Off Date & Time</h6>
                                    <p>{dropTime}/{" "}
                                        <input type="time" className='input-time' />
                                    </p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Pick-Up Location</h6>
                                    <p>{pickUp}</p>
                                </div>
                            </span>
                        </div>

                        <div className="booking-modal__car-info__dates">
                            <span>
                                <i className="fa-solid fa-calendar-days"></i>
                                <div>
                                    <h6>Drop-Off Location</h6>
                                    <p>{dropOff}</p>
                                </div>
                            </span>
                        </div>
                    </div>
                    <div className="booking-modal__car-info__model">
                        <h5>
                            <span>Car :</span> {carType}
                        </h5>
                        {imgUrl && <img src={imgUrl} alt="car_img" />}
                    </div>
                </div>

                {/* personal info */}
                <div className="booking-modal__person-info">
                    <h4>Personal Information</h4>
                    <form className="info-form">
                        <div className="info-form__2col">
                            <span>
                                <label htmlFor="fname">First Name <b>*</b></label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => { setName(e.target.value) }}
                                    name='fname'
                                    placeholder='Enter your first name'
                                />
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label htmlFor="lname">Last Name <b>*</b></label>
                                <input
                                    type="text"
                                    value={lastName}
                                    name='lname'
                                    onChange={(e) => setLastName(e.target.value)}
                                    placeholder='Enter your Last Name'
                                />
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label htmlFor='phone'>
                                    Phone Number <b>*</b>
                                </label>
                                <input
                                    value={phone}
                                    name='phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    placeholder="Enter your phone number"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>


                            <span>
                                <label>
                                    Age <b>*</b>
                                </label>
                                <input
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    type="number"
                                    placeholder="18"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <div className="info-form__1col">
                            <span>
                                <label>
                                    Email <b>*</b>
                                </label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter your email address"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Address <b>*</b>
                                </label>
                                <input
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    type="text"
                                    placeholder="Enter your street address"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <div className="info-form__2col">
                            <span>
                                <label>
                                    City <b>*</b>
                                </label>
                                <input
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    type="text"
                                    placeholder="Enter your city"
                                ></input>
                                <p className="error-modal">This field is required.</p>
                            </span>

                            <span>
                                <label>
                                    Zip Code <b>*</b>
                                </label>
                                <input
                                    value={zipcode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    type="text"
                                    placeholder="Enter your zip code"
                                ></input>
                                <p className="error-modal ">This field is required.</p>
                            </span>
                        </div>

                        <span className="info-form__checkbox">
                            <input type="checkbox"></input>
                            <p>Please send me latest news and updates.</p>
                        </span>
                        <div className="reserve-button">
                            <button onClick={confirmBooking}>Reserve Now</button>
                        </div>



                    </form >
                </div>
            </div>







        </>
    )
}

export default BookCar