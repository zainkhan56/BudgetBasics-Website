import React from 'react';

function Icon({ name, className = "" }) {
    return <i className={`bi ${name} ${className}`.trim()} aria-hidden="true"></i>;
}

export default Icon;
