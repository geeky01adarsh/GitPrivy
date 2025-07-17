import React from "react";
import { Code, Github } from "lucide-react";
import "../App.css";

const Navbar = ({ isScrolled, onSignIn }) => (
    <nav className={`nav${isScrolled ? " scrolled" : ""}`}>
        <div className="nav-content">
            <div className="nav-logo">
                <Code className="nav-logo-icon" />
                <span className="nav-logo-text">GitPrivy</span>
            </div>
            <div className="nav-links">
                <a href="#features" className="nav-link">
                    Features
                </a>
                <a href="#pricing" className="nav-link">
                    Pricing
                </a>
                <a href="#about" className="nav-link">
                    About
                </a>
            </div>
            <button onClick={onSignIn} className="nav-cta">
                <Github className="icon-sm" />
                <span>Sign In</span>
            </button>
        </div>
    </nav>
);

export default Navbar;
