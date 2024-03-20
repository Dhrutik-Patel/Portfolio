import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Dhrutik Patel</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a
                        href="https://www.github.com/Dhrutik-Patel"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-github-alt"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/dhrutik-patel"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-linkedin-alt"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/dhrutik._.patel"
                        className="footer__social-link"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="uil uil-instagram"></i>
                    </a>
                </div>
                <span className="footer__copy">
                    &copy; {new Date().getFullYear()} Dhrutik Patel. All rights reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
