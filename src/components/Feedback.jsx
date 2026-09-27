import React from 'react';
import Icon from './Icon.jsx';

function Feedback() {
    return (
        <section id="feedback">
            <div className="wrap">
                <span className="sec-tag rv up">Module 10</span>
                <h2 className="sec-title rv up">
                    Feedback<span className="grad"> &amp; Contact Us</span>
                </h2>
                <div className="grid g2 mt-4">
                    <div className="panel corner rv up d1">
                        <h4 className="mb-3"><Icon name="bi-chat-square-heart" /> Send Feedback</h4>
                        <input id="fbName" className="field mb-2" placeholder="Name" />
                        <input id="fbEmail" type="email" className="field mb-2" placeholder="Email" />
                        <select id="fbRating" className="field mb-2">
                            <option value="">Rating</option>
                            <option value="5">5 - Excellent</option>
                            <option value="4">4 - Good</option>
                            <option value="3">3 - Average</option>
                        </select>
                        <textarea id="fbComments" className="field" placeholder="Comments" rows={4}></textarea>
                        <div id="fbError" className="err"></div>
                        <button type="button" id="fbSubmit" className="btn-neon-action mt-2">
                            <Icon name="bi-rocket-takeoff" /> Submit Feedback
                        </button>
                        <div className="feedback-ok" id="fbOk">
                            <Icon name="bi-check-lg" /> FEEDBACK SUBMITTED SUCCESSFULLY
                        </div>
                    </div>

                    <div className="panel corner rv up d2">
                        <h4 className="mb-3"><Icon name="bi-envelope-paper" /> Contact Us</h4>
                        <input id="contactName" className="field mb-2" placeholder="Your Name" />
                        <input id="contactEmail" type="email" className="field mb-2" placeholder="Your Email" />
                        <input id="contactSubject" className="field mb-2" placeholder="Subject" />
                        <textarea id="contactMessage" className="field" placeholder="Write your message..." rows={4}></textarea>
                        <div id="contactError" className="err"></div>
                        <button type="button" id="contactSubmit" className="btn-neon-action mt-2">
                            <Icon name="bi-send" /> Send Message
                        </button>
                        <div className="feedback-ok" id="contactOk">
                            <Icon name="bi-check-lg" /> MESSAGE SUBMITTED SUCCESSFULLY
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feedback;
