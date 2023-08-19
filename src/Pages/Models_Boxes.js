import React from 'react'

const Models_Boxes = (props) => {
  return (
    <div className="models-div__box">
      <div className="models-div__box__img">
        <img src={props.carImg} alt="car-img" />
        <div className="models-div__box__descr">
          <div className="models-div__box__descr__name-price">
            <div className="models-div__box__descr__name-price__name">
              <p>{props.carName}</p>
              <span>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
            </div>
            <div className="models-div__box__descr__name-price__price">
              <h4>{props.carPrice}</h4>
              <p>{props.carPer}</p>
            </div>
          </div>
          <div className="models-div__box__descr__name-price__details">
            <span>
              <i className="fa-solid fa-car-side"></i>&nbsp; {props.carModel}
            </span>
            <span style={{ textAlign: "right" }}>
              {props.carDoors} &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
            <span>
              <i className="fa-solid fa-car-side"></i> &nbsp; {props.carCapacity}
            </span>
            <span style={{ textAlign: "right" }}>
              {props.carFuel} &nbsp; <i className="fa-solid fa-car-side"></i>
            </span>
          </div>
          <div className="models-div__box__descr__name-price__btn">
            <Link onClick={() => window.scrollTo(0, 0)} to='/'>
              Book Ride
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Models_Boxes