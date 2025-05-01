import React from "react";
import '../../styles/components/Header.scss';
import { FaHome, FaStar, FaEnvelope, FaPhone } from "react-icons/fa";

const Header = () => {
    return (
        <header className="header">
            <h1 className="header-title">Land Page</h1>
            <div className="header-content">
                <div className="logo-container"></div>
                <nav className="header-nav-container">
                    <ul className="header-nav">
                        <li>
                            <FaHome className="nav-icon" />
                            <a href="#Hero" className="hover:underline">Home</a>
                        </li>
                        <li>
                            <FaStar className="nav-icon" />
                            <a href="#Features" className="hover:underline">Features</a>
                        </li>
                        <li>
                            <FaEnvelope className="nav-icon" />
                            <a href="#Form" className="hover:underline">Get in touch</a>
                        </li>
                        <li>
                            <FaPhone className="nav-icon" />
                            <a href="#Footer" className="hover:underline">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;