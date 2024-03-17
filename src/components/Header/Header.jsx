import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    return (
        <header className="header">
            <nav className="nav container">
                {/* Logo */}
                <a href="/" className="nav__logo">
                    Dhrutik Patel
                </a>

                {/* Menu */}
                <div className={toggle ? 'nav__menu show-menu' : 'nav__menu'} id="nav-menu">
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" className="nav__link">
                                <i className="uil uil-scenery nav__icon"></i>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link">
                                <i className="uil uil-message nav__icon"></i>
                                Contact
                            </a>
                        </li>
                    </ul>

                    <i
                        className="uil uil-times nav__close"
                        id="nav-close"
                        onClick={handleToggle}
                    ></i>
                </div>

                {/* Button toggle */}
                <div className="nav__toggle" id="nav-toggle" onClick={handleToggle}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
