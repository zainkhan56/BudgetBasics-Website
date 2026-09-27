import React from 'react';
import Icon from './Icon.jsx';

function Navbar() {
    return (
        <header id="topbar">
            <div className="bar">
                <a className="brand" href="#top" aria-label="BudgetBasics">
                    <img className="brand-logo" id="brandLogo" src="logo.png" alt="BudgetBasics" />
                </a>

                <ul id="menu">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#basics">Basics</a></li>
                    <li><a href="#needs-wants">Needs/Wants</a></li>
                    <li><a href="#rule">50/30/20</a></li>
                    <li><a href="#savings">Goals</a></li>
                    <li><a href="#planner">Planner</a></li>
                    <li><a href="#mistakes">Mistakes</a></li>
                    <li><a href="#infographics">Gallery</a></li>
                    <li><a href="#chatbot">AI Bot</a></li>
                    <li><a href="#search">Search</a></li>
                    <li><a href="#feedback">Feedback</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#sitemap">Sitemap</a></li>
                </ul>

                <div className="navbtns">
                    <button id="modeBtn" type="button" aria-label="Toggle theme">
                        <Icon name="bi-sun" />
                    </button>
                    <button id="burger" type="button" aria-label="Toggle menu">
                        <Icon name="bi-list" />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
