import React, { useState, useEffect } from "react";

import {
    Shield,
    GitBranch,
    Users,
    BarChart3,
    Lock,
    Globe,
    TrendingUp,
    Award,
} from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import "./App.css";

const App = () => {
    const [showWaitlist, setShowWaitlist] = useState(false);
    const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
    const [waitlistError, setWaitlistError] = useState("");
    const [waitlistSuccess, setWaitlistSuccess] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeTab, setActiveTab] = useState("users");
    const [animatedNumbers, setAnimatedNumbers] = useState({
        users: 0,
        projects: 0,
        companies: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const animateNumbers = () => {
            const targets = { users: 10000, projects: 50000, companies: 500 };
            const duration = 2000;
            const steps = 60;
            const increment = duration / steps;

            let current = { users: 0, projects: 0, companies: 0 };

            const timer = setInterval(() => {
                current.users += targets.users / steps;
                current.projects += targets.projects / steps;
                current.companies += targets.companies / steps;

                if (current.users >= targets.users) {
                    current = targets;
                    clearInterval(timer);
                }

                setAnimatedNumbers({
                    users: Math.floor(current.users),
                    projects: Math.floor(current.projects),
                    companies: Math.floor(current.companies),
                });
            }, increment);

            return () => clearInterval(timer);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animateNumbers();
                }
            },
            { threshold: 0.5 }
        );

        const statsSection = document.getElementById("stats-section");
        if (statsSection) {
            observer.observe(statsSection);
        }

        return () => observer.disconnect();
    }, []);

    const userFeatures = [
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Private by Default",
            description:
                "Your code stays private with secure, non-discoverable URLs that can't be found through search engines.",
        },
        {
            icon: <GitBranch className="w-6 h-6" />,
            title: "Git Integration",
            description:
                "Push directly from your terminal or import from GitHub. Works with your existing workflow.",
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Instant Sharing",
            description:
                "Generate secure sharing links instantly. Control who can view and for how long.",
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Analytics Dashboard",
            description:
                "Track views, downloads, and engagement metrics for your shared projects.",
        },
    ];

    const companyFeatures = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Assignment Management",
            description:
                "Create, track, and manage technical assignments with built-in evaluation tools.",
        },
        {
            icon: <Award className="w-6 h-6" />,
            title: "Candidate Analytics",
            description:
                "Comprehensive analytics on completion rates, code quality, and candidate performance.",
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Enterprise Security",
            description:
                "SOC 2 compliant with SSO integration, audit logs, and advanced access controls.",
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: "Hiring Insights",
            description:
                "Data-driven insights to optimize your technical hiring process and improve candidate experience.",
        },
    ];

    const userPricing = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            features: [
                "100MB storage",
                "5 projects",
                "Basic Git integration",
                "30-day retention",
                "Community support",
            ],
            cta: "Start Free",
            popular: false,
        },
        {
            name: "Pro",
            price: "$9.99",
            period: "per month",
            features: [
                "1GB storage",
                "50 projects",
                "Advanced analytics",
                "90-day retention",
                "Priority support",
                "Custom domains",
            ],
            cta: "Start Pro",
            popular: true,
        },
        {
            name: "Premium",
            price: "$19.99",
            period: "per month",
            features: [
                "5GB storage",
                "200 projects",
                "Advanced analytics",
                "1-year retention",
                "Priority support",
                "Custom domains",
                "API access",
            ],
            cta: "Start Premium",
            popular: false,
        },
    ];

    const companyPricing = [
        {
            name: "Basic",
            price: "$99",
            period: "per month",
            features: [
                "10 assignments",
                "100 candidates",
                "Basic analytics",
                "Email support",
                "Standard branding",
            ],
            cta: "Start Basic",
            popular: false,
        },
        {
            name: "Professional",
            price: "$299",
            period: "per month",
            features: [
                "50 assignments",
                "500 candidates",
                "Advanced analytics",
                "Priority support",
                "Custom branding",
                "API access",
            ],
            cta: "Start Professional",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "$999",
            period: "per month",
            features: [
                "Unlimited assignments",
                "Unlimited candidates",
                "Enterprise analytics",
                "Dedicated support",
                "Custom branding",
                "SSO integration",
                "API access",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ];

    // Handler to show modal from anywhere
    const handleShowWaitlist = () => {
        setShowWaitlist(true);
        setWaitlistError("");
        setWaitlistSuccess(false);
    };

    // Waitlist submit handler
    const handleWaitlistSubmit = async (email) => {
        setWaitlistSubmitting(true);
        setWaitlistError("");
        setWaitlistSuccess(false);
        try {
            // Get user IP
            const ipRes = await fetch("https://api.ipify.org?format=json");
            const ipData = await ipRes.json();
            const ip = ipData.ip || "unknown";
            // Save to local JSON file (simulate backend)
            const entry = { email, ip, date: new Date().toISOString() };
            let prev = [];
            try {
                const resp = await fetch("/waitlist.json");
                if (resp.ok) prev = await resp.json();
            } catch (e) {
                console.error(e);
            }
            prev.push(entry);
            await fetch("/waitlist.json", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(prev, null, 2),
            });
            setWaitlistSuccess(true);
        } catch (e) {
            setWaitlistError(
                "Could not join waitlist. Please try again later."
            );
            console.error("Waitlist submission error:", e);
        }
        setWaitlistSubmitting(false);
    };

    // Pass handler to Navbar and CTASection
    return (
        <div className="app-root">
            <Navbar isScrolled={isScrolled} onSignIn={handleShowWaitlist} />
            <Hero onSignIn={handleShowWaitlist} />
            <Stats animatedNumbers={animatedNumbers} />
            <Features
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                userFeatures={userFeatures}
                companyFeatures={companyFeatures}
            />
            <HowItWorks />
            <Pricing
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                userPricing={userPricing}
                companyPricing={companyPricing}
            />
            <CTASection onSignIn={handleShowWaitlist} />
            <Footer />
            <WaitlistModal
                show={showWaitlist}
                onClose={() => setShowWaitlist(false)}
                onSubmit={handleWaitlistSubmit}
                submitting={waitlistSubmitting}
                error={waitlistError}
                success={waitlistSuccess}
            />
        </div>
    );
};

export default App;
