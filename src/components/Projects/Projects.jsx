import React from 'react';
import './Projects.css';
import RecentProjects from './RecentProjects';

const Projects = () => {
    return (
        <section className="portfolio section" id="portfolio">
            <h2 className="section__title">Personal Projects</h2>
            <span className="section__subtitle">Most Recent Projects</span>

            <RecentProjects />
        </section>
    );
};

export default Projects;
