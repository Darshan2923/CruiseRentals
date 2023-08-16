import React, { useState } from 'react'

const Faq = () => {
    const [activeQ, setActiveQ] = useState("q1");

    const openQ = (id) => {
        setActiveQ(activeQ === id ? "" : id);
    }

    const getClassQuestion = (id) => {
        return activeQ === id ? "active-question" : "";
    }

    const getClassAnswer = (id) => {
        return activeQ === id ? "active-answer" : "";
    }


    return (
        <>
            <section className="faq-section">
                <div className="container">
                    <div className="faq-content">
                        <div className="faq-content__title">
                            <h5>FAQ</h5>
                            <h2>Frequently Asked Questions</h2>
                            <p>Answers to Common Concerns and Inquiries Regarding the Car Rental Booking Process on Our Website.</p>
                        </div>
                        <div className="all-questions">
                            <div className="faq-box">
                                <div
                                    id='q1'
                                    onClick={() => openQ('q1')}
                                    className={`faq-box__questions ${getClassQuestion("q1")}`}
                                >
                                    <p>1.What makes comparing rental car prices unique?</p>
                                    <i className='fa-solid fa-angle-down'></i>
                                </div>
                                <div
                                    id='q1'
                                    onClick={() => openQ("q1")}
                                    className={`faq-box__answer ${getClassAnswer('q1')}`}
                                >
                                    Rental vehicle comparison offers is vital because it lets you get the greatest price that meets your budget and requirements, ensuring you receive the best value for your money. By evaluating several possibilities, you might uncover bargains that provide cheaper pricing, more services, or superior automobile models. You may locate automobile rental bargains by conducting internet research and comparing costs from various rental businesses.
                                </div>
                            </div>
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
                                    className={`faq-box__question ${getClassQuestion("q3")}`}
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
    )
}

export default Faq;