import React from 'react';
import Icon from './Icon.jsx';

function Chatbot() {
    return (
        <section id="chatbot">
            <div className="wrap">
                <span className="sec-tag rv up">Module 08</span>
                <h2 className="sec-title rv up">
                    BudgetBee<span className="grad">Assistant</span><Icon name="bi-robot" />
                </h2>

                <div className="grid g84 mt-4">
                    <div className="panel corner rv left">
                        <div className="chatbox">
                            <div id="chatMessages"></div>
                            <div className="d-flex gap-2 mt-2">
                                <input id="chatInput" className="field" placeholder="> ask: what is a need?" />
                                <button type="button" id="chatSend" className="btn-neon-action btn-sm">SEND</button>
                            </div>
                            <div className="d-flex gap-2 mt-2 flex-wrap" id="suggestedPrompts"></div>
                            <p className="small muted mt-2">
                                This assistant provides basic educational information and is not professional financial advice.
                            </p>
                        </div>
                    </div>

                    <div className="panel rv right">
                        <h6 className="mono" style={{ color: "var(--neon2)" }}>&gt; try_asking:</h6>
                        <ul className="muted mt-2 ps-3" style={{ lineHeight: "2.1", fontSize: ".85rem" }}>
                            <li>What is a budget?</li>
                            <li>How much should I save?</li>
                            <li>How do I avoid overspending?</li>
                            <li>What is a want?</li>
                            <li>What is an expense?</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Chatbot;
