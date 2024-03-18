import React from 'react';

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Development</h3>
            <div className="skills__box">
                <div className="skills__group">
                    {/* HTML */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* CSS */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* JavaScript */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* React.js */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">React.js</h3>
                            <span className="skills__level">Proficient</span>
                        </div>
                    </div>

                    {/* Redux Toolkit */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Redux Toolkit</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    {/* Next.js */}
                    <div className="skills__data">
                        <i className="bx bx-badge-check"></i>
                        <div>
                            <h3 className="skills__name">Next.js</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;
