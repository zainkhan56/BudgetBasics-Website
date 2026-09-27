import React from 'react';
import Icon from './Icon.jsx';

function Sitemap() {
    return (
        <section id="sitemap">
            <div className="wrap">
                <span className="sec-tag rv up">System Map</span>
                <h2 className="sec-title rv up">
                    Site<span className="grad">map</span><Icon name="bi-map" />
                </h2>
                <p className="muted rv up d1">Every node of the grid, one warp away.</p>

                <div className="grid g4 mt-4">
                    <div className="panel corner map-card rv up d1">
                        <div className="icon-orb"><Icon name="bi-book" /></div>
                        <h5 className="grad">Learn</h5>
                        <ul className="map-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#basics">Budgeting Basics</a></li>
                            <li><a href="#needs-wants">Needs vs Wants</a></li>
                        </ul>
                    </div>

                    <div className="panel corner map-card rv up d2">
                        <div className="icon-orb"><Icon name="bi-tools" /></div>
                        <h5 className="grad">Tools</h5>
                        <ul className="map-links">
                            <li><a href="#rule">50/30/20 Rule</a></li>
                            <li><a href="#savings">Savings Goals</a></li>
                            <li><a href="#planner">Expense Planner</a></li>
                        </ul>
                    </div>

                    <div className="panel corner map-card rv up d3">
                        <div className="icon-orb"><Icon name="bi-lightbulb" /></div>
                        <h5 className="grad">Explore</h5>
                        <ul className="map-links">
                            <li><a href="#mistakes">Money Mistakes</a></li>
                            <li><a href="#infographics">Infographics</a></li>
                            <li><a href="#chatbot">AI Chatbot</a></li>
                        </ul>
                    </div>

                    <div className="panel corner map-card rv up d4">
                        <div className="icon-orb"><Icon name="bi-people" /></div>
                        <h5 className="grad">Connect</h5>
                        <ul className="map-links">
                            <li><a href="#search">Search</a></li>
                            <li><a href="#feedback">Feedback</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Sitemap;
