import React from 'react'
import Img1 from '../assets/download/googleapp.svg'
import Img2 from '../assets/download/appstore.svg'
import '../styles/Download.css'

const Download = () => {
    return (
        <div>
            <section className="download-section">
                <div className="container">
                    <div className="download-text">
                        <h2>
                            Maximize your experience by downloading our app.</h2>
                        <p>
                            Elevate your overall experience by downloading our app. Seamlessly unlock a world brimming with convenience and endless possibilities, all conveniently accessible at your fingertips.
                        </p>
                        <div className="download-text__btns">
                            <img src={Img1} alt="download_img" />
                            <img src={Img2} alt="download_img" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Download