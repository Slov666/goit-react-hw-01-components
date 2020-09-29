import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
const { statistics, Title, statList, item, label, percentage } = styles;

const Statistics = ({ title, stats }) => {
  return (
    <section className={statistics}>
      {title && <h2 className={Title}>{title}</h2>}

      <ul className={statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={item}
            style={{ background: randomColor() }}
          >
            <span className={label}>{stat.label}</span>
            <span className={percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
export default Statistics;
