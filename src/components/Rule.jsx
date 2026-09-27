import React from 'react';
import Icon from './Icon.jsx';

function Rule() {
    return (
        <section id="rule">
            <div className="wrap">
                <span className="sec-tag rv up">Module 03</span>
                <h2 className="sec-title rv up">
                    50/30/20<span className="grad">Calculator</span>
                </h2>

                <div className="grid g57 mt-4">
                    <div className="panel corner rv left">
                        <label className="mono small" style={{ color: "var(--neon2)" }}>MONTHLY INCOME ($)</label>
                        <input id="incomeInput" type="number" min="200" className="field mt-2" placeholder="Minimum $200" />
                        <div id="incomeError" className="err"></div>
                        <button type="button" id="calcBtn" className="btn-neon-action w-100 mt-2">
                            <Icon name="bi-lightning-charge" /> Calculate
                        </button>
                        <p className="small muted mt-3">
                            The 50/30/20 split is an educational guideline and may be adjusted according to individual circumstances.
                        </p>
                    </div>

                    <div className="panel rv right">
                        <div className="rule-grid">
                            <div>
                                <h6 className="mono small muted">NEEDS 50%</h6>
                                <h3 id="needsAmount" style={{ color: "var(--neon2)", margin: "4px 0" }}>$0</h3>
                                <div className="meter">
                                    <div id="needsBar" className="m-cyan"></div>
                                </div>
                            </div>
                            <div>
                                <h6 className="mono small muted">WANTS 30%</h6>
                                <h3 id="wantsAmount" style={{ color: "var(--neon1)", margin: "4px 0" }}>$0</h3>
                                <div className="meter">
                                    <div id="wantsBar" className="m-purple"></div>
                                </div>
                            </div>
                            <div>
                                <h6 className="mono small muted">SAVINGS 20%</h6>
                                <h3 id="savingsAmount" style={{ color: "var(--neon3)", margin: "4px 0" }}>$0</h3>
                                <div className="meter">
                                    <div id="savingsBar" className="m-pink"></div>
                                </div>
                            </div>
                        </div>

                        <canvas id="budgetChart" width="320" height="190"></canvas>
                        <p id="calcExplain" className="small muted mono mt-2 text-center"></p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rule;
