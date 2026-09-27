import React, { useEffect, useState } from 'react';

function DailyTip() {
    const [tips, setTips] = useState([]);

    useEffect(() => {
        setTips([
            "Track every $1 - small leaks sink ships.",
            "Wait 24h before want purchases.",
            "Pay yourself first - save before spending.",
            "Use cash envelope for fun money.",
            "Review subscriptions monthly."
        ]);
    }, []);

    if (!tips.length) return null;

    const tip = tips[new Date().getDate() % tips.length];

    return <>{tip}</>;
}

export default DailyTip;
