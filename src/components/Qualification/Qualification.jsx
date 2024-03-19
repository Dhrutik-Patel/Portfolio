import React, { useState } from 'react';
import './Qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualifications</h2>
            <span className="section__subtitle">My Educational and Professional Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={`qualification__button button--flex ${
                            toggleState === 1 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        className={`qualification__button button--flex ${
                            toggleState === 2 ? 'qualification__active' : ''
                        }`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div
                        className={`qualification__content ${
                            toggleState === 1 ? 'qualification__content-active' : ''
                        }`}
                    >
                        {/* Education */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Graduation</h3>
                                <span className="qualification__subtitle">Indus University</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2023
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Higher Secondary School</h3>
                                <span className="qualification__subtitle">
                                    The H.B. Kapadia New High School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2017 - 2019
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">
                                    Primary and Secondary School
                                </h3>
                                <span className="qualification__subtitle">
                                    J.V.Sarva Vidyalaya & R.H.Patel High School
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2007 - 2017
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        {/* Add more educational experiences here */}
                    </div>

                    <div
                        className={`qualification__content ${
                            toggleState === 2 ? 'qualification__content-active' : ''
                        }`}
                    >
                        {/* Experience */}

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Software Developer</h3>
                                <span className="qualification__subtitle">
                                    Odoo India, Gandhinagar
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Jun 2023 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Software Developer Intern</h3>
                                <span className="qualification__subtitle">
                                    Odoo India, Gandhinagar
                                </span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    Dec 2022 - Jun 2023
                                </div>
                            </div>
                        </div>

                        {/* Add more professional experiences here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
