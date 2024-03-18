import React from 'react';

const Information = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i class="bx bx-award about__icon"></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">1.5 Years</span>
            </div>

            <div className="about__box">
                <i class="bx bx-briefcase-alt about__icon"></i>
                <h3 className="about__title">Projects Completed</h3>
                <span className="about__subtitle">15+</span>
            </div>

            <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">Available 24/7</span>
            </div>
        </div>
    );
};

export default Information;
