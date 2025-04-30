import React from "react";
import { FaCode, FaServer, FaMobileAlt, FaRobot } from 'react-icons/fa';
import '../../styles/components/Features.scss';
import { motion } from "framer-motion";

const Features = () => {
    const features = [
        {
            icon: <FaCode className="feature-icon" />,
            title: "Frontend Development",
            desc: "React, Vite, Tailwind. Fast and accessible interfaces"
        },
        {
            icon: <FaServer className="feature-icon" />,
            title: "Backend Development",
            desc: "Node.js, Express, MongoDB. Scalable APIs and databases"
        },
        {
            icon: <FaMobileAlt className="feature-icon" />,
            title: "Mobile Responsive Apps",
            desc: "Adaptive designs for all devices."
        }
    ];

    return (
        <section className="features">
            <h2 className="section-title">Our Tech Expertise</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <motion.div whileHover={{scale: 1.05}} className="feature-card" key={index}>
                        <div className="feature-icon-container">
                            {feature.icon}
                        </div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-desc">{feature.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Features;