import React from 'react';
import Icon from './Icon.jsx';

function NeedsWants() {
    return (
        <section id="needs-wants">
            <div className="wrap">
                <span className="sec-tag rv up">Module 02</span>
                <h2 className="sec-title rv up">
                    Needs vs Wants<span className="grad">Interactive</span>
                </h2>

                <div className="grid g75 mt-4">
                    <div className="panel corner rv left text-center">
                        <div className="scenario-emoji" id="scenarioIcon">
                            <Icon name="bi-bus-front" />
                        </div>
                        <h3 id="scenarioText" className="mt-3">Bus fare to college</h3>
                        <p className="muted mono" id="scenarioAmount">$2.50 daily</p>

                        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
                            <button type="button" id="needBtn" className="btn-neon-action btn-sm">NEED</button>
                            <button type="button" id="wantBtn" className="btn-ghost-action btn-sm">WANT</button>
                        </div>

                        <div id="scenarioFeedback" className="mt-3 p-3 rounded" style={{ display: "none" }}></div>

                        <button type="button" id="nextScenario" className="chip mt-3" style={{ display: "none" }}>
                            NEXT SCENARIO <Icon name="bi-arrow-right" />
                        </button>
                    </div>

                    <div className="panel rv right">
                        <h5>⏸️ Pause Before Buying</h5>
                        <ol className="muted mt-3 mb-3 ps-3" style={{ lineHeight: "2.1" }}>
                            <li>Do I really need it?</li>
                            <li>Can I wait 24 hours?</li>
                            <li>Does it fit my budget?</li>
                            <li>Is there a cheaper option?</li>
                        </ol>

                        <div className="p-3 rounded" style={{
                            border: "1px solid var(--neon4)",
                            background: "rgba(163,230,53,.07)",
                            color: "var(--neon4)"
                        }}>
                            <Icon name="bi-lightbulb" /> If answer is NO to any, it can wait! Save the money.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NeedsWants;
