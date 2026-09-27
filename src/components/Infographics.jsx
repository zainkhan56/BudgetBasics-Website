import React from 'react';

function Infographics() {
    return (
        <section id="infographics">
            <div className="wrap">
                <span className="sec-tag rv up">Module 07</span>
                <h2 className="sec-title rv up">
                    Infographics &amp;<span className="grad">Learning Gallery</span>
                </h2>

                <div className="d-flex gap-2 my-3 flex-wrap rv up d1">
                    <button type="button" className="chip filterBtn on" data-filter="all">ALL</button>
                    <button type="button" className="chip filterBtn" data-filter="budget">BUDGET</button>
                    <button type="button" className="chip filterBtn" data-filter="saving">SAVING</button>
                    <button type="button" className="chip filterBtn" data-filter="habits">HABITS</button>
                </div>

                <div className="grid g3" id="galleryGrid"></div>
            </div>
        </section>
    );
}

export default Infographics;
