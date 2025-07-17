import React from "react";
import { Github, ArrowRight } from "lucide-react";
import "../App.css";

const CTASection = ({ onSignIn }) => (
    <section className="cta-section">
        <div className="cta-container">
            <h2 className="cta-title">Ready to Keep Your Code Private?</h2>
            <p className="cta-subtitle">
                Join thousands of developers who trust GitPrivy for secure code
                sharing
            </p>
            <div className="cta-buttons">
                <button onClick={onSignIn} className="cta-button-primary">
                    <Github className="icon-md" />
                    <span>Start Free with GitHub</span>
                </button>
                <button onClick={onSignIn} className="cta-button-secondary">
                    <span>Book a Demo</span>
                    <ArrowRight className="icon-md" />
                </button>
            </div>
        </div>
    </section>
);

export default CTASection;
