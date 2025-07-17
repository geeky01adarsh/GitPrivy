import React from "react";
import "../App.css";

const HowItWorks = () => (
    <section className="how-it-works">
        <div className="how-it-works-container">
            <div className="how-it-works-header">
                <h2 className="how-it-works-title">How It Works</h2>
                <p className="how-it-works-subtitle">
                    Get started in minutes, not hours
                </p>
            </div>
            <div className="how-it-works-grid">
                <div className="how-it-works-step">
                    <div className="step-number blue">
                        <span>1</span>
                    </div>
                    <h3 className="step-title">Connect & Upload</h3>
                    <p className="step-description">
                        Sign in with GitHub or create an account. Push your code
                        directly or import existing repositories.
                    </p>
                </div>
                <div className="how-it-works-step">
                    <div className="step-number purple">
                        <span>2</span>
                    </div>
                    <h3 className="step-title">Generate Secure Link</h3>
                    <p className="step-description">
                        Get a unique, private URL that's not discoverable by
                        search engines. Set permissions and expiration.
                    </p>
                </div>
                <div className="how-it-works-step">
                    <div className="step-number pink">
                        <span>3</span>
                    </div>
                    <h3 className="step-title">Share & Track</h3>
                    <p className="step-description">
                        Share your work confidently. Track views, downloads, and
                        engagement with detailed analytics.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default HowItWorks;
