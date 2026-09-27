import React from 'react';

function SearchSection() {
    return (
        <section id="search">
            <div className="wrap">
                <span className="sec-tag rv up">Module 09</span>
                <h2 className="sec-title rv up">
                    Search &amp; Filter<span className="grad">Content</span>
                </h2>

                <div className="panel corner rv zoom mt-4">
                    <div className="search-controls">
                        <input id="searchInput" className="field flex-grow-1" placeholder="search tips, goals, expenses..." />
                        <select id="sortSelect" className="field" style={{ maxWidth: "150px" }}>
                            <option value="newest">Newest</option>
                            <option value="az">A-Z</option>
                        </select>
                    </div>

                    <div className="d-flex gap-2 mt-3 flex-wrap">
                        <button type="button" className="chip topicFilter on" data-topic="all">ALL</button>
                        <button type="button" className="chip topicFilter" data-topic="saving">SAVING</button>
                        <button type="button" className="chip topicFilter" data-topic="needs">NEEDS</button>
                        <button type="button" className="chip topicFilter" data-topic="expenses">EXPENSES</button>
                        <button type="button" className="chip topicFilter" data-topic="goals">GOALS</button>
                        <button type="button" className="chip topicFilter" data-topic="budgeting">BUDGETING</button>
                        <button type="button" className="chip topicFilter" data-topic="wants">WANTS</button>
                    </div>

                    <div className="grid g3 mt-4" id="searchResults"></div>

                    <p id="noResults" className="mono small muted mt-3 text-center" style={{ display: "none" }}>
                        no matching content found
                    </p>
                </div>
            </div>
        </section>
    );
}

export default SearchSection;
