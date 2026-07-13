import React from 'react';
import './Stats.css';

const stats = [
  { label: 'Humidity', value: '62%' },
  { label: 'Wind', value: '12 km/h' },
  { label: 'Pressure', value: '1012 hPa' },
];

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__grid">
        {stats.map((item) => (
          <div key={item.label} className="stats__card">
            <span className="stats__label">{item.label}</span>
            <strong className="stats__value">{item.value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
