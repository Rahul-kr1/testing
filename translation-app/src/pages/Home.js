// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import CSS for Home

const Home = () => {
    return (
        <div className="home">
            <h2>Welcome to the Translation App!</h2>
            <p>Your gateway to learning and translating languages effortlessly.</p>

            <h3>Features</h3>
            <div className="features">
                <div className="feature">
                    <h4>Real-time Translation</h4>
                    <p>Translate text instantly with our advanced algorithms.</p>
                </div>
                <div className="feature">
                    <h4>Language Learning Resources</h4>
                    <p>Access a variety of resources to help you learn new languages.</p>
                </div>
                <div className="feature">
                    <h4>User-friendly Interface</h4>
                    <p>Navigate easily with our intuitive design.</p>
                </div>
                <div className="feature">
                    <h4>Community Support</h4>
                    <p>Join our community of language learners and experts.</p>
                </div>
            </div>

            <h3>Get Started</h3>
            <p>Sign up now to start translating and learning!</p>
            <button className="cta-button">Sign Up</button>
        </div>
    );
};

export default Home;
