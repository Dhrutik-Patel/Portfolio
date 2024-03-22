import React from 'react';

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://github.com/Dhrutik-Patel"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="uil uil-github-alt"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/dhrutik-patel/"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a
                href="https://www.instagram.com/dhrutik._.patel"
                className="home__social-icon"
                target="_blank"
                rel="noopener noreferrer"
            >
                <i className="uil uil-instagram"></i>
            </a>
        </div>
    );
};

export default Social;
