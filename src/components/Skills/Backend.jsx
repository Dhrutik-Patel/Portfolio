import React from 'react';

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Development</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {/* Node.js */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Node.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* Express.js */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Express.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* MongoDB */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* Mongoose */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Mongoose</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* REST APIs */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">REST APIs</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Backend;
