import React from "react";
import { Code } from "lucide-react";
import "../App.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-grid">
                <div>
                    <div className="footer-brand">
                        <Code className="footer-brand-icon" />
                        <span className="footer-brand-text">GitPrivy</span>
                    </div>
                    <p className="footer-description">
                        Secure, private code sharing for developers and
                        companies worldwide.
                    </p>
                </div>
                <div>
                    <h4 className="footer-section-title">Product</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" className="footer-link">
                                Features
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                API
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="footer-section-title">Company</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" className="footer-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Careers
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="footer-section-title">Support</h4>
                    <ul className="footer-links">
                        <li>
                            <a href="#" className="footer-link">
                                Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Community
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Status
                            </a>
                        </li>
                        <li>
                            <a href="#" className="footer-link">
                                Security
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 GitPrivy. All rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;
