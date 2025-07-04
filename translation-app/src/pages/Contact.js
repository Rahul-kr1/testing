// src/pages/Contact.js
import React from 'react';
import './Contact.css'; // Import CSS for Contact

const Contact = () => {
    return (
        <div className="contact">
            <h2>Contact Us</h2>
            <p>If you have any questions or feedback, feel free to reach out!</p>
            <p>Email: <a href="mailto:support@translationapp.com">support@translationapp.com</a></p>
            <p>Phone: +1 (555) 123-4567</p>

            <h3>Contact Form</h3>
            <form className="contact-form">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit" className="submit-button">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
