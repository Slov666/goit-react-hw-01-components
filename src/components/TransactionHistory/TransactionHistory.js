import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';
const { transactionHistory, td, td1 } = styles;

const TransactionHistory = ({ items }) => {
  return (
    <table className={transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => (
        <tbody key={item.id}>
          <tr>
            <td className={td}>{item.type}</td>
            <td className={td}>{item.amount}</td>
            <td className={td}>{item.currency}</td>
          </tr>
          <tr>
            <td className={td1}>{item.type}</td>
            <td className={td1}>{item.amount}</td>
            <td className={td1}>{item.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  TransactionHistory: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
