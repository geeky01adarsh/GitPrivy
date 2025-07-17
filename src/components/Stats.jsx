import React from "react";
import "../App.css";

const Stats = ({ animatedNumbers }) => (
    <section className="stats" id="stats-section">
        <div className="stats-grid">
            <div className="stat-item">
                <div className="stat-number blue">
                    {animatedNumbers.users.toLocaleString()}+
                </div>
                <div className="stat-label">Active Developers</div>
            </div>
            <div className="stat-item">
                <div className="stat-number purple">
                    {animatedNumbers.projects.toLocaleString()}+
                </div>
                <div className="stat-label">Private Projects</div>
            </div>
            <div className="stat-item">
                <div className="stat-number pink">
                    {animatedNumbers.companies.toLocaleString()}+
                </div>
                <div className="stat-label">Companies Trust Us</div>
            </div>
        </div>
    </section>
);

export default Stats;
