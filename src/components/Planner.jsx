import React from 'react';

function Planner() {
    return (
        <section id="planner">
            <div className="wrap">
                <span className="sec-tag rv up">Module 05</span>
                <h2 className="sec-title rv up">
                    Expense<span className="grad">Planner</span>
                    <span className="mono small muted">(temporary planner)</span>
                </h2>

                <div className="panel corner rv zoom mt-4">
                    <div className="planner-form">
                        <input id="expenseDate" type="date" className="field" />

                        <select id="expenseCategory" className="field">
                            <option value={true}>Category</option>
                            <option>Food</option>
                            <option>Transport</option>
                            <option>Education</option>
                            <option>Entertainment</option>
                            <option>Shopping</option>
                            <option>Utilities</option>
                            <option>Miscellaneous</option>
                        </select>

                        <input id="expenseDescription" className="field" placeholder="Description" />
                        <input id="expenseAmount" type="number" className="field" placeholder="Amount $" />

                        <button type="button" id="addExpenseBtn" className="btn-neon-action">+ Add</button>
                    </div>

                    <div id="expenseError" className="err"></div>

                    <div className="table-scroll mt-3">
                        <table className="table-neon" id="expenseTable">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Category</th>
                                    <th>Description</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>
                    </div>

                    <div className="d-flex justify-content-between flex-wrap gap-2 mt-3 mono small">
                        <span>
                            TOTAL:<b style={{ color: "var(--neon3)" }}>$<span id="totalExpenses">0</span></b>
                        </span>
                        <span>
                            SAMPLE BALANCE $1000  REMAINING:<b style={{ color: "var(--neon4)" }}>$<span id="remainingBalance">1000</span></b>
                        </span>
                    </div>

                    <p className="small muted mt-2">Data is not permanently stored. For learning only.</p>
                </div>
            </div>
        </section>
    );
}

export default Planner;
