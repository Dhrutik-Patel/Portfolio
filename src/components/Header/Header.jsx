import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    const handleToggle = () => {
        setToggle((prev) => !prev);
    };

    // Add event listener using useEffect
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('.header');
            if (window.scrollY >= 80) {
                header.classList.add('scroll-header');
            } else {
                header.classList.remove('scroll-header');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect runs only once on component mount

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
                            <a
                                href="#home"
                                className={
                                    activeLink === '#home' ? 'nav__link active-link' : 'nav__link'
                                }
                                onClick={() => setActiveLink('#home')}
                            >
                                <i className="uil uil-estate nav__icon"></i>
                                Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#about"
                                className={
                                    activeLink === '#about' ? 'nav__link active-link' : 'nav__link'
                                }
                                onClick={() => setActiveLink('#about')}
                            >
                                <i className="uil uil-user nav__icon"></i>
                                About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#skills"
                                className={
                                    activeLink === '#skills' ? 'nav__link active-link' : 'nav__link'
                                }
                                onClick={() => setActiveLink('#skills')}
                            >
                                <i className="uil uil-file-alt nav__icon"></i>
                                Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#projects"
                                className={
                                    activeLink === '#projects'
                                        ? 'nav__link active-link'
                                        : 'nav__link'
                                }
                                onClick={() => setActiveLink('#projects')}
                            >
                                <i className="uil uil-scenery nav__icon"></i>
                                Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a
                                href="#contact"
                                className={
                                    activeLink === '#contact'
                                        ? 'nav__link active-link'
                                        : 'nav__link'
                                }
                                onClick={() => setActiveLink('#contact')}
                            >
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
