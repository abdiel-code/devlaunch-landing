import React from "react";
import '../../styles/components/Header.scss';
import { FaHome, FaStar, FaEnvelope, FaPhone } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <nav className="header-nav-container">
                    <ul className="header-nav">
                        <li>
                            
                            <Link
                                to="Hero"
                                smooth={true}
                                duration={500}
                                className="hover:underline"
                            >
                                <FaHome className="nav-icon" />
                                Home
                            </Link>
                        </li>
                        <li>
                            
                            <Link
                                to="Features"
                                smooth={true}
                                duration={500}
                                className="hover:underline"
                            >
                                <FaStar className="nav-icon" />
                                Features
                            </Link>
                        </li>
                        <li>
                            
                            <Link
                                to="Form"
                                smooth={true}
                                duration={500}
                                className="hover:underline"
                            >
                                <FaEnvelope className="nav-icon" />
                                Get in touch
                            </Link>
                        </li>
                        <li>
                            
                            <Link
                                to="Contact"
                                smooth={true}
                                duration={500}
                                className="hover:underline"
                            >
                                <FaPhone className="nav-icon" />
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;