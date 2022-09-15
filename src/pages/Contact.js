import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact">
            <div
                className="leftSide"
                style={{ backgroundImage: `url(${PizzaLeft})` }}>
            </div>
            <div className="rightSide">
                <h1>Contact Us</h1>
                
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter full name..." type="text" />
                    <lable htmlFor="email">Email</lable>
                    <input name="email" placeholder="Enter email..." type="email" />
                    <lable htmlFor="message">Message</lable>
                    <textarea
                        rows="6"
                        placeholder="Enter message..."
                        name="message"
                        required
                    ></textarea>
                    <buttton type="submit">Send Message</buttton>
                </form>
            </div>
        </div>
    );
}

export default Contact;