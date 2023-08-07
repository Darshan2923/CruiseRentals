import React from 'react'
import '../styles/Team.css'
import Footer from '../components/Footer'
import Person1 from '../assets/team_members/1.png'
import Person2 from '../assets/team_members/3.png'
import Person3 from '../assets/team_members/emily_thomson.png'
import Person4 from '../assets/team_members/jim_kosovo.png'
import Person5 from '../assets/team_members/4.png'
import Person6 from '../assets/team_members/suniel_yadav.png'


const Team = () => {
    const teamPal = [
        { img: Person1, name: 'Alex Jacob', job: 'Manager' },
        { img: Person2, name: 'Cristina Williams', job: 'Business Owner' },
        { img: Person3, name: 'Emily Thomson', job: 'Car Specialist' },
        { img: Person4, name: 'Jim Kosovo', job: 'Photographer' },
        { img: Person5, name: 'Ema Sebestian', job: 'Saleswoman' },
        { img: Person6, name: 'Suniel Yadav', job: 'Mechanic' },
    ];
    return (
        <>
            <section className="team-page">
                {/* <HeroPages name="Our Team" /> */}
                <div className="container">
                    <div className="team-container">
                        {teamPal.map((ppl, id) => (
                            <div className="team-container__box" key={id}>
                                <div className="team-container__box__img-div">
                                    <img src={ppl.img} alt="team_img" />
                                </div>
                                <div className="team-container__box__descr">
                                    <h3>{ppl.name}</h3>
                                    <p>{ppl.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="book-banner">
                        <div className="book-banner__overlay"></div>
                        <div className="container">
                            <div className="text-content">
                                <h2>
                                    Secure Your Ride: Reach Out to Us for Car Booking</h2>
                                <span>
                                    <i className="fa-solid fa-phone"></i>
                                    <h3>(+91) 98765 43210</h3>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team