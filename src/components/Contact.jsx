import React from 'react';
import Icon from './Icon.jsx';

function Contact() {
    return (
        <section id="contact">
            <div className="wrap">
                <span className="sec-tag rv up">Module 11</span>
                <h2 className="sec-title rv up">
                    Contact<span className="grad">&amp; About</span>
                </h2>

                <div className="grid g2 mt-4">
                    <div className="panel corner rv left">
                        <h4><Icon name="bi-broadcast-pin" /> Contact</h4>
                        <p className="mono small mt-2" style={{ lineHeight: "2.2" }}>
                            EMAIL &nbsp;→&nbsp; <span className="alt-link">zk011647@gmail.com</span>
                            <br />
                            PHONE &nbsp;→&nbsp; <span className="alt-link">+923136471001</span>
                            <br />
                            SOCIAL →&nbsp; <span className="alt-link">@BudgetBasicsBee</span>
                        </p>
                        <h5 className="mt-4">About Us</h5>
                        <p className="small muted mt-2">
                            BudgetBasics is a student project for TechWiz 7 teaching financial literacy through the NextGen BudgetBee theme. only learning.
                        </p>
                    </div>

                    <div className="panel rv right">
                        <h5><Icon name="bi-satellite" /> Visitor Info</h5>
                        <p className="mono small mt-2" style={{ lineHeight: "2.2" }}>
                            VISITS →&nbsp; <b style={{ color: "var(--neon2)" }} id="visitCount">0</b>
                            <br />
                            CURRENT TIME &nbsp;→&nbsp; <b style={{ color: "var(--neon4)" }} id="liveTime">--</b>
                        </p>
                        <div className="d-flex gap-2 mt-3 flex-wrap">
                            <span className="tag">Beginner Friendly</span>
                            <span className="tag">Accessible</span>
                            <span className="tag">Neon Edition</span>
                            <span className="tag">NEXTGEN CODERS</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
