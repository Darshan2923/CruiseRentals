import React, { useState } from 'react'

const CarBox = ({ data, carId }) => {
    const [carLoad, setCarLoad] = useState(true);
    return (
        <>
            {data[carId].map((car, id) => {
                <div className="box-cars" key={id}>
                    {/* car */}
                    <div className="pick-car">
                        {carLoad && <span className='loader'></span>}
                        <img
                            style={{ display: carLoad ? "none" : "block" }}
                            alt="car-img"
                            src={car.img}
                            onLoad={() => setCarLoad(false)}
                        />
                    </div>
                    {/* description */}
                    <div className="pick-description">
                        <div className="pick-description__price">
                            <span>₹{car.price}</span>/rent per journey
                        </div>
                        <div className="pick-description__table">
                            <div className="pick-description__table__col">
                                <span>Year</span>
                                <span>{car.year}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Model</span>
                                <span>{car.model}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>AC</span>
                                <span>{car.AC}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Capacity</span>
                                <span>{car.Capacity}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Doors</span>
                                <span>{car.doors}</span>
                            </div>
                            <div className="pick-description__table__col">
                                <span>Fuel</span>
                                <span>{car.fuel}</span>
                            </div>
                        </div>
                        {/* btn car */}
                        <a href="#book" className="cta-btn">
                            Reserve Now
                        </a>
                    </div>
                </div>
            })}
        </>
    );
}

export default CarBox