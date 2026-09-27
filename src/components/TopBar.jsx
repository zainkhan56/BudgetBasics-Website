import React, { useState, useEffect } from 'react';
import Icon from './Icon.jsx';

export default function TopBar() {
  const [visits, setVisits] = useState(() => {
    const current = parseInt(localStorage.getItem('visitCount') || '0', 10);
    const updated = current + 1;
    localStorage.setItem('visitCount', updated);
    return updated;
  });

  const [dateTime, setDateTime] = useState({
    date: '',
    time: ''
  });

  useEffect(() => {
    const vEl = document.getElementById('visitCount');
    if (vEl) vEl.textContent = visits;

    const updateClock = () => {
      const now = new Date();
      const dateStr = now.toLocaleDateString(undefined, {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
      const timeStr = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      setDateTime({ date: dateStr, time: timeStr });
      const liveTimeEl = document.getElementById('liveTime');
      if (liveTimeEl) {
        liveTimeEl.textContent = now.toLocaleString();
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [visits]);

  return (
    <div className="site-topbar">
      <div className="wrap topbar-inner">
        <div className="topbar-left">
          <span className="topbar-live-dot"></span>
          <span className="topbar-brand">BUDGETBASICS LIVE</span>
          <span className="topbar-sep">•</span>
          <span className="topbar-date">
            <Icon name="bi-calendar-event" /> {dateTime.date}
          </span>
        </div>

        <div className="topbar-right">
          <span className="topbar-time">
            <Icon name="bi-clock-history" /> <span className="topbar-time-val">{dateTime.time}</span>
          </span>
          <span className="topbar-sep">•</span>
          <span className="topbar-visitors">
            <Icon name="bi-eye-fill" /> VISITS: <b className="topbar-visit-num">{visits}</b>
          </span>
        </div>
      </div>
    </div>
  );
}
