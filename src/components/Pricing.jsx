import React from "react";
import { Check } from "lucide-react";
import "../App.css";

const Pricing = ({ activeTab, setActiveTab, userPricing, companyPricing }) => (
    <section className="pricing" id="pricing">
        <div className="pricing-container">
            <div className="pricing-header">
                <h2 className="pricing-title">Simple, Transparent Pricing</h2>
                <p className="pricing-subtitle">
                    Choose the plan that works for you
                </p>
            </div>
            <div className="pricing-tabs">
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
            <div className="pricing-grid">
                {(activeTab === "users" ? userPricing : companyPricing).map(
                    (plan, index) => (
                        <div
                            key={index}
                            className={`pricing-card${
                                plan.popular ? " popular" : ""
                            }`}
                        >
                            {plan.popular && (
                                <div className="pricing-badge">
                                    Most Popular
                                </div>
                            )}
                            <div className="pricing-header-content">
                                <h3 className="pricing-plan-name">
                                    {plan.name}
                                </h3>
                                <div className="pricing-plan-price">
                                    {plan.price}
                                </div>
                                <div className="pricing-plan-period">
                                    {plan.period}
                                </div>
                            </div>
                            <ul className="pricing-features">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="pricing-feature">
                                        <Check className="pricing-feature-icon" />
                                        <span className="pricing-feature-text">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => (window.location.href = "#")}
                                className={`pricing-cta${
                                    plan.popular ? " popular" : ""
                                }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    )
                )}
            </div>
        </div>
    </section>
);

export default Pricing;
