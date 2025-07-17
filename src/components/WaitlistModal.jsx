import React, { useState } from "react";
import "../App.css";

const tempMailPatterns = [
    /mailinator\.com$/i,
    /guerrillamail\.com$/i,
    /10minutemail\.com$/i,
    /tempmail\./i,
    /yopmail\.com$/i,
    /dispostable\.com$/i,
    /trashmail\./i,
    /fakeinbox\./i,
    /sharklasers\.com$/i,
    /getnada\.com$/i,
    /maildrop\.cc$/i,
    /mintemail\.com$/i,
    /throwawaymail\.com$/i,
    /mailnesia\.com$/i,
    /spamgourmet\.com$/i,
];

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const WaitlistModal = ({
    show,
    onClose,
    onSubmit,
    submitting,
    error,
    success,
}) => {
    const [email, setEmail] = useState("");
    const [inputError, setInputError] = useState("");

    const validateEmail = (value) => {
        if (!emailRegex.test(value)) return "Enter a valid email.";
        if (tempMailPatterns.some((pat) => pat.test(value)))
            return "Temporary emails are not allowed.";
        return "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const err = validateEmail(email);
        setInputError(err);
        if (!err) onSubmit(email);
    };

    if (!show) return null;

    return (
        <div className="waitlist-modal-overlay">
            <div className="waitlist-modal animate-fade-in">
                <button className="waitlist-modal-close" onClick={onClose}>
                    &times;
                </button>
                <h2 className="waitlist-modal-title">🚧 Work in Progress</h2>
                <p className="waitlist-modal-desc">
                    Sign in is coming soon! Join our waitlist and be the first
                    to know when we launch.
                </p>
                <form className="waitlist-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="waitlist-input"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={submitting || success}
                        required
                    />
                    <button
                        type="submit"
                        className="waitlist-submit"
                        disabled={submitting || success}
                    >
                        {submitting
                            ? "Joining..."
                            : success
                            ? "Joined!"
                            : "Join Waitlist"}
                    </button>
                </form>
                {inputError && (
                    <div className="waitlist-error">{inputError}</div>
                )}
                {error && <div className="waitlist-error">{error}</div>}
                {success && (
                    <div className="waitlist-success">
                        Thank you! We'll keep you posted.
                    </div>
                )}
            </div>
        </div>
    );
};

export default WaitlistModal;
