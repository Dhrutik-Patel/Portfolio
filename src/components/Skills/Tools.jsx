import React from 'react';

const Tools = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Development Tools</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {/* Git */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Git</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* VS Code */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Visual Studio Code</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* Chrome DevTools */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Chrome DevTools</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* Postman */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Postman</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* MongoDB Compass */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">MongoDB Compass</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* Webpack */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Webpack</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Tools;
