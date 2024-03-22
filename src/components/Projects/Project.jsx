import React, { useState, useEffect } from 'react';
import Tag from '../Tags/Tags';

const Project = ({ item }) => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('active-modal');
        } else {
            document.body.classList.remove('active-modal');
        }

        return () => {
            document.body.classList.remove('active-modal');
        };
    }, [showModal]);

    return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <p className="project__p" onClick={toggleModal}>
                View Project
            </p>

            {showModal && (
                <div className="modal" role="dialog" aria-modal="true">
                    <div className="overlay" onClick={toggleModal}></div>

                    <div className="modal-content">
                        <h2 className="modal-title">{item.title}</h2>

                        <div className="tags">
                            {item.tags.map((tag, index) => (
                                <Tag tag={tag} key={index} />
                            ))}
                        </div>

                        <p className="modal-p">{item.description}</p>
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noreferrer noopener"
                            className="modal-link"
                        >
                            View GitHub Repository <i className="uil uil-arrow-right"></i>
                        </a>

                        <i className="uil uil-times close-modal" onClick={toggleModal}></i>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Project;
