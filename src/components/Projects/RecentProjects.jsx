import React from 'react';
import projects from './Data';
import Project from './Project';

const RecentProjects = () => {
    return (
        <div>
            <div className="project__container container grid">
                {projects.map((item) => {
                    return <Project item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default RecentProjects;
