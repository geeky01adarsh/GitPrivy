import React from "react";
import { Star, Github, Mail, ChevronDown } from "lucide-react";
import "../App.css";

const Hero = ({ onSignIn }) => (
    <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
            <div className="hero-badge">
                <Star className="hero-badge-icon" />
                <span>Private code sharing made simple</span>
            </div>
            <h1 className="hero-title">
                Share Code Privately,
                <br />
                Hire Confidently
            </h1>
            <p className="hero-subtitle">
                Stop exposing your assignments on public GitHub. Share code
                securely with unique URLs, track engagement, and streamline your
                technical hiring process.
            </p>
            <div className="hero-cta">
                <button onClick={onSignIn} className="hero-cta-primary">
                    <Github className="icon-md" />
                    <span>Start with GitHub</span>
                </button>
                <button onClick={onSignIn} className="hero-cta-secondary">
                    <Mail className="icon-md" />
                    <span>Sign up with Email</span>
                </button>
            </div>
        </div>
        <div className="hero-scroll-indicator">
            <ChevronDown className="hero-scroll-icon" />
        </div>
    </section>
);

export default Hero;
