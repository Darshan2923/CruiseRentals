// We're importing necessary tools from the 'react' package to build a React component.
import React, { useState } from 'react';
import '../styles/Faq.css'

// We're defining a functional component called 'Faq'.
const Faq = () => {
    // We're using the 'useState' hook to manage a piece of state named 'activeQ'.
    const [activeQ, setActiveQ] = useState("q1");

    // This function handles opening and closing questions when they're clicked.
    const openQ = (id) => {
        // If the clicked question is already open, we close it; otherwise, we open it.
        setActiveQ(activeQ === id ? "" : id);
    }

    // This function calculates the appropriate class for the clicked question.
    const getClassQuestion = (id) => {
        // If the question is open, it gets the class 'active-question', otherwise, it's an empty string.
        return activeQ === id ? "active-question" : "";
    }

    // This function calculates the appropriate class for the clicked answer.
    const getClassAnswer = (id) => {
        // If the question is open, its answer gets the class 'active-answer', otherwise, it's an empty string.
        return activeQ === id ? "active-answer" : "";
    }

    // This is the main structure of the component being returned.
    return (
        <>
            {/* A section dedicated to Frequently Asked Questions */}
            <section className="faq-section">
                {/* A container to hold the FAQ content */}
                <div className="container">
                    {/* The main content area of the FAQ */}
                    <div className="faq-content">
                        {/* The title of the FAQ */}
                        <div className="faq-content__title">
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>Answers to Common Concerns and Inquiries Regarding the Car Rental Booking Process on Our Website.</p>
                        </div>
                        {/* This is where all the questions are listed */}
                        <div className="all-questions">
                            {/* Each question and its answer are wrapped in a 'faq-box' */}
                            <div className="faq-box">
                                {/* The clickable part of the question */}
                                <div
                                    id='q1'
                                    onClick={() => openQ('q1')}
                                    className={`faq-box__questions ${getClassQuestion("q1")}`}
                                >
                                    <p>1. What makes comparing rental car prices unique?</p>
                                    {/* An icon indicating whether the question is open or closed */}
                                    <i className='fa-solid fa-angle-down'></i>
                                </div>
                                {/* The answer part */}
                                <div
                                    id='q1'
                                    onClick={() => openQ("q1")}
                                    className={`faq-box__answer ${getClassAnswer('q1')}`}
                                >
                                    {/* The detailed answer to the question */}
                                    Rental vehicle comparison offers is vital because it lets you get the greatest price that meets your budget and requirements, ensuring you receive the best value for your money. By evaluating several possibilities, you might uncover bargains that provide cheaper pricing, more services, or superior automobile models. You may locate automobile rental bargains by conducting internet research and comparing costs from various rental businesses.
                                </div>
                            </div>
                            {/* ... More question and answer pairs follow, same structure */}
                            <div className="faq-box">
                                <div
                                    id='q2'
                                    onClick={() => openQ('q2')}
                                    className={`faq-box__questions ${getClassQuestion("q2")}`}
                                >
                                    <p>2.How can I locate the best automobile rental deals?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id='q2'
                                    onClick={() => openQ("q2")}
                                    className={`faq-box__answer ${getClassAnswer('q2')}`}
                                >
                                    You may locate automobile rental bargains by browsing online and comparing costs from various rental businesses. Expedia, Kayak, and Travelocity are examples of websites that allow you to compare costs and browse available rental alternatives. Signing up for email newsletters and following rental vehicle businesses on social media is also suggested to stay up to date on any special bargains or promotions.
                                </div>
                            </div>
                            <div className="faq-box">
                                <div
                                    id="q3"
                                    onClick={() => openQ("q3")}
                                    className={`faq-box__questions ${getClassQuestion("q3")}`}
                                >
                                    <p>3. How did I come across such affordable rental vehicle rates?</p>
                                    <i className="fa-solid fa-angle-down"></i>
                                </div>
                                <div
                                    id="q3"
                                    onClick={() => openQ("q3")}
                                    className={`faq-box__answer ${getClassAnswer("q3")}`}
                                >
                                    Make a reservation in advance: Booking your rental car ahead of time may frequently result in reduced rates. Price comparisons from several companies: To compare pricing from several rental vehicle providers, use websites such as Kayak, Expedia, or Travelocity. Look for promotional codes and vouchers such as: Look for discount codes and discounts that you may use to reduce the cost of your rental. Renting from a place other than the airport can occasionally yield in reduced pricing.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

// We're exporting the 'Faq' component so it can be used in other parts of the application.
export default Faq;
