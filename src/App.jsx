import React from 'react';
import { useEffect } from 'react';
import Starfield from './components/Starfield.jsx';
import TopBar from './components/TopBar.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Basics from './components/Basics.jsx';
import NeedsWants from './components/NeedsWants.jsx';
import Rule from './components/Rule.jsx';
import Savings from './components/Savings.jsx';
import Planner from './components/Planner.jsx';
import Mistakes from './components/Mistakes.jsx';
import Infographics from './components/Infographics.jsx';
import Chatbot from './components/Chatbot.jsx';
import SearchSection from './components/SearchSection.jsx';
import Feedback from './components/Feedback.jsx';
import Contact from './components/Contact.jsx';
import Sitemap from './components/Sitemap.jsx';
import Footer from './components/Footer.jsx';
import UtilityUI from './components/UtilityUI.jsx';
import Divider from './components/Divider.jsx';
import FloatingChatbot from './components/FloatingChatbot.jsx';
import { initScript } from './script.js';

function App() {
    useEffect(() => {
        initScript();
    }, []);

    return (
        <>
            <Starfield />
            <div className="aurora a1"></div>
            <div className="aurora a2"></div>
            <div className="aurora a3"></div>
            <div className="gridfloor"></div>
            <TopBar />
            <Navbar />
            <Hero />
            <Marquee />
            <Basics />
            <Divider />
            <NeedsWants />
            <Divider />
            <Rule />
            <Divider />
            <Savings />
            <Divider />
            <Planner />
            <Divider />
            <Mistakes />
            <Divider />
            <Infographics />
            <Divider />
            <Chatbot />
            <Divider />
            <SearchSection />
            <Divider />
            <Feedback />
            <Divider />
            <Contact />
            <Divider />
            <Sitemap />
            <Footer />
            <UtilityUI />
            <FloatingChatbot />
        </>
    );
}

export default App;
