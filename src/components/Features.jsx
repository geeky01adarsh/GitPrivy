import React from "react";
import "../App.css";

const Features = ({
    activeTab,
    setActiveTab,
    userFeatures,
    companyFeatures,
}) => (
    <section className="features" id="features">
        <div className="features-container">
            <div className="features-header">
                <h2 className="features-title">
                    Built for Developers & Companies
                </h2>
                <p className="features-subtitle">
                    Powerful features for both individual developers and hiring
                    teams
                </p>
            </div>
            <div className="features-tabs">
                <div className="features-tab-container">
                    <button
                        onClick={() => setActiveTab("users")}
                        className={`features-tab${
                            activeTab === "users" ? " active" : ""
                        }`}
                    >
                        For Developers
                    </button>
                    <button
                        onClick={() => setActiveTab("companies")}
                        className={`features-tab${
                            activeTab === "companies" ? " active" : ""
                        }`}
                    >
                        For Companies
                    </button>
                </div>
            </div>
            <div className="features-grid">
                {(activeTab === "users" ? userFeatures : companyFeatures).map(
                    (feature, index) => (
                        <div
                            key={index}
                            className="feature-card"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">
                                {feature.description}
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    </section>
);

export default Features;
