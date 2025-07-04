// src/pages/About.js
import React from 'react';
import './About.css'; // Import CSS for About

const About = () => {
    return (
        <div className="about">
            <h2>About Us</h2>
            <p>We are dedicated to providing the best translation services and resources.</p>
            <p>Our mission is to bridge language barriers and connect people through communication.</p>
            <p>Our team consists of language experts and technology enthusiasts who are passionate about languages.</p>

            <h3>Our Values</h3>
            <ul>
                <li><strong>Integrity:</strong> We uphold the highest standards of integrity in all our actions.</li>
                <li><strong>Innovation:</strong> We strive to innovate and improve our services continuously.</li>
                <li><strong>Community:</strong> We believe in building a supportive community for language learners.</li>
            </ul>

            <h3>Meet Our Team</h3>
            <div className="team">
                <div className="team-member">
                    <h4>John Doe</h4>
                    <p>Founder & CEO</p>
                </div>
                <div className="team-member">
                    <h4>Jane Smith</h4>
                    <p>Chief Technology Officer</p>
                </div>
                <div className="team-member">
                    <h4>Emily Johnson</h4>
                    <p>Language Expert</p>
                </div>
            </div>

            <h3>Join Us</h3>
            <p>Become a part of our community and help us make language learning accessible to everyone!</p>
        </div>
    );
};

export default About;
