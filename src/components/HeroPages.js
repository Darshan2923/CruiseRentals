import React from 'react'
import '../styles/HeroPages.css'
import { Link } from 'react-router-dom'

const HeroPages = ({ name }) => {
    return (
        <div>
            <section className="hero-pages">
                <div className="hero-pages__overlay"></div>
                <div className="container">
                    <div className="hero-pages__text">
                        <h3>{name}</h3>
                        <p><Link to="/">Home</Link>/{name}</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HeroPages