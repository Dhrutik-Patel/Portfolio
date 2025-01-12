import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Projects from './components/Projects/Projects';

const App = () => {
    return (
        <>
            <Header />

            <main className="main">
                <Home />
                <About />
                <Qualification />
                <Skills />
                <Projects />
                <Contact />
            </main>

            <Footer />
            <ScrollUp />
        </>
    );
};

export default App;
