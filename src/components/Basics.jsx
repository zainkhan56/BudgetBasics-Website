import React from 'react';
import Icon from './Icon.jsx';

function Basics() {
    return (
        <section id="basics">
            <div className="wrap">
                <span className="sec-tag rv up">Module 01</span>
                <h2 className="sec-title rv up">
                    Budgeting<span className="grad">Basics</span>
                </h2>
                <p className="muted rv up d1">Learn the 6 building blocks of a student budget.</p>

                <div className="grid g3 mt-4">
                    <div className="panel corner rv up d1">
                        <h4><Icon name="bi-cash-stack" /> Income</h4>
                        <p className="muted mt-2">Allowance, scholarship, part-time job. Example: $800/month.</p>
                    </div>
                    <div className="panel corner rv up d2">
                        <h4><Icon name="bi-house" /> Fixed Expenses</h4>
                        <p className="muted mt-2">Same every month: rent, bus pass, phone bill.</p>
                    </div>
                    <div className="panel corner rv up d3">
                        <h4><Icon name="bi-controller" /> Variable Expenses</h4>
                        <p className="muted mt-2">Changes: food, entertainment, shopping.</p>
                    </div>
                    <div className="panel corner rv up d4">
                        <h4><Icon name="bi-check-circle" /> Needs</h4>
                        <p className="muted mt-2">Essential for study &amp; life: books, transport, utilities.</p>
                    </div>
                    <div className="panel corner rv up d5">
                        <h4><Icon name="bi-heart" /> Wants</h4>
                        <p className="muted mt-2">Nice to have: gaming, eating out, fashion.</p>
                    </div>
                    <div className="panel corner rv up d6">
                        <h4><Icon name="bi-piggy-bank" /> Savings</h4>
                        <p className="muted mt-2">Pay your future self first. Even $20/month matters.</p>
                    </div>
                </div>

                <div className="panel rv left mt-4">
                    <h5 className="mono" style={{ color: "var(--neon2)" }}>&gt; sample_student_budget</h5>
                    <div className="table-scroll">
                        <table className="table-neon">
                            <thead>
                                <tr>
                                    <th>Category</th>
                                    <th>Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Income</td><td>$800</td></tr>
                                <tr><td>Rent/Hostel</td><td>$250</td></tr>
                                <tr><td>Food</td><td>$150</td></tr>
                                <tr><td>Transport</td><td>$50</td></tr>
                                <tr><td>Books</td><td>$70</td></tr>
                                <tr><td>Fun (Wants)</td><td>$120</td></tr>
                                <tr><td>Savings</td><td>$160</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="panel rv right mt-3">
                    <h5><Icon name="bi-lightning-charge" /> Quick Knowledge Check</h5>
                    <p className="muted mt-2 mb-3">What is an example of a fixed expense?</p>
                    <div className="d-flex gap-2 flex-wrap">
                        <button type="button" className="chip quizBtn" data-answer="rent">Rent</button>
                        <button type="button" className="chip quizBtn" data-answer="snacks">Snacks daily</button>
                    </div>
                    <div id="quizFeedback" className="mono small mt-2 fw-bold"></div>
                </div>
            </div>
        </section>
    );
}

export default Basics;
