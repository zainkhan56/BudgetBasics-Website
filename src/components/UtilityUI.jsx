import React from 'react';
import Icon from './Icon.jsx';

function UtilityUI() {
    return (
        <>
            <div id="cursorDot"></div>
            <div id="cursorRing"></div>
            <div id="progress"></div>
            <button type="button" id="toTop" aria-label="Back to top">
                <Icon name="bi-arrow-up" />
            </button>
            <div id="toast"></div>
        </>
    );
}

export default UtilityUI;
