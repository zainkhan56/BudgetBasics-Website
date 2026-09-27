import React from 'react';
import Icon from './Icon.jsx';

function Savings() {
    return (
        <section id="savings">
            <div className="wrap">
                <span className="sec-tag rv up">Module 04</span>
                <h2 className="sec-title rv up">
                    Savings Goal<span className="grad">Planner</span>
                </h2>

                <div className="grid g57 mt-4">
                    <div className="panel corner rv left">
                        <input id="goalName" className="field mb-2" placeholder="Goal name (e.g. Laptop)" />
                        <input id="targetAmount" type="number" className="field mb-2" placeholder="Target amount $" />
                        <input id="currentSavings" type="number" className="field mb-2" placeholder="Current savings $" />
                        <input id="savingsMonthlyIncome" type="number" min="0" className="field mb-2" placeholder="Monthly income $" />
                        <input id="monthlyContribution" type="number" min="0" className="field" placeholder="Monthly contribution $" />
                        <div id="goalError" className="err"></div>
                        <button type="button" id="planGoalBtn" className="btn-neon-action w-100 mt-2">
                            <Icon name="bi-bullseye" /> Plan My Goal
                        </button>
                    </div>

                    <div className="panel rv right text-center">
                        <h4 id="displayGoalName">Your Goal</h4>

                        <div className="donut-wrap mt-3">
                            <svg className="ring-svg" viewBox="0 0 190 190">
                                <defs>
                                    <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#A855F7" />
                                        <stop offset="100%" stopColor="#22D3EE" />
                                    </linearGradient>
                                </defs>
                                <circle cx="95" cy="95" r="80" stroke="rgba(255,255,255,.09)" strokeWidth="14" fill="none" />
                                <circle id="progressCircle" cx="95" cy="95" r="80" stroke="url(#ringGrad)" strokeWidth="14" fill="none" strokeDasharray="502.65" strokeDashoffset="502.65" strokeLinecap="round" />
                            </svg>

                            <div className="center-label">
                                <div>
                                    <b id="goalPercent" style={{ fontSize: "1.5rem" }}>0%</b>
                                    <br />
                                    <span className="small muted">complete</span>
                                </div>
                            </div>
                        </div>

                        <div className="meter mt-3">
                            <div id="goalProgressBar" className="m-cyan"></div>
                        </div>

                        <p className="mono small mt-3">
                            REMAINING:<b style={{ color: "var(--neon2)" }} id="remainingAmount">$0</b>
                            • ETA_MONTHS:<b style={{ color: "var(--neon3)" }} id="estimatedMonths">0</b>
                        </p>

                        <div id="savingTip" className="p-2 rounded mt-2" style={{
                            border: "1px solid var(--border2)",
                            background: "rgba(34,211,238,.07)"
                        }}>
                            <Icon name="bi-heart" /> Keep going! Small steps build big streaks.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Savings;
