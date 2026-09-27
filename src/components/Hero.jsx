import React from 'react';
import Icon from './Icon.jsx';
import DailyTip from './DailyTip.jsx';

function Hero() {
    return (
        <section id="home">
            <div className="wrap">
                <div className="hero-grid">

                    <div>
                        <span className="sec-tag">Budget Bee by NEXTGEN CODERS</span>

                        <h1 className="glitch" id="glitchWrap">
                            <span className="layer l1" aria-hidden="true">
                                Money, but make it<span className="grad electric-text">Electric</span>
                            </span>
                            <span className="layer l2" aria-hidden="true">
                                Money, but make it<span className="grad electric-text">Electric</span>
                            </span>
                            Money, but make it<span className="grad electric-text">Electric</span>
                        </h1>

                        <p className="typeline" id="typeline"></p>

                        <p className="muted mt-3" style={{ maxWidth: "520px" }}>
                            BudgetBasics teaches income, needs, wants &amp; savings with interactive tools all running 100% in your browser. No bank. No risk. Just skills.
                        </p>

                        <div className="hero-cta">
                            <a href="#rule" className="btn-neon-action">
                                <Icon name="bi-play-fill" /> Start Planning
                            </a>
                            <a href="#basics" className="btn-ghost-action">Explore Learning</a>
                        </div>

                        <div className="stat-row">
                            <div className="stat">
                                <b id="tipCount" data-count="5">0</b>
                                <small>Learning Tips</small>
                            </div>
                            <div className="stat">
                                <b>50/30/20</b>
                                <small>Guideline</small>
                            </div>
                            <div className="stat">
                                <b>100%</b>
                                <small>Browser Only</small>
                            </div>
                            <div className="stat">
                                <b>
                                    <Icon name="bi-fire" />
                                    <span id="streak">0</span>
                                </b>
                                <small>Saving Streak</small>
                            </div>
                        </div>

                        <div className="panel corner mt-4 d-flex align-items-center gap-3">
                            <div style={{ fontSize: "1.8rem", flexShrink: "0" }}>
                                <Icon name="bi-lightbulb" />
                            </div>
                            <div>
                                <span className="small muted mono">DAILY TIP</span>
                                <div id="dailyTip" className="fw-bold">
                                    <DailyTip />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="orbit-wrap">
                        <div className="orbit-scene">
                            <div className="ring r1">
                                <div className="sat">
                                    <div className="inner"><Icon name="bi-cash-stack" /></div>
                                </div>
                            </div>
                            <div className="ring r2">
                                <div className="sat">
                                    <div className="inner"><Icon name="bi-bullseye" /></div>
                                </div>
                            </div>
                            <div className="ring r3">
                                <div className="sat">
                                    <div className="inner"><Icon name="bi-piggy-bank" /></div>
                                </div>
                            </div>

                            <div className="core" id="core">
                                <Icon name="bi-hexagon-fill" />
                            </div>

                            <div className="hud h1">
                                INCOME<b style={{ color: "var(--neon4)" }}>$800/mo</b>
                            </div>
                            <div className="hud h2">
                                N50 · W30 ·<b style={{ color: "var(--neon3)" }}>S20</b>
                            </div>
                            <div className="hud h3">
                                BUDGET_HEALTH:<b id="healthText" style={{ color: "var(--neon2)" }}>GOOD</b>
                                <div className="bar-track">
                                    <div className="bar-fill" id="healthBar" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;
