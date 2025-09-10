import { useState, useEffect } from 'react';

import './styles.css';
import { formatDate } from '../../utils/helpers';

const TransactionList = ({ transactions }) => {
  return (
    <div className='transaction-list'>
      <h2>Transaction List</h2>
      {transactions.length === 0 ? (
        <p className='no-transactions'>
          No transactions yet. Add your first transaction above!
        </p>
      ) : (
        <div className='transactions'>
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`transaction-item ${transaction.type.toLowerCase()}`}
            >
              <div className='transaction-info'>
                <div className='transaction-date'>
                  {formatDate(transaction.date)}
                </div>
                <div className='transaction-category'>
                  {transaction.category}
                </div>
                <div className='transaction-amount'>
                  ${transaction.amount.toFixed(2)}
                </div>
                <div
                  className={`transaction-type ${transaction.type.toLowerCase()}`}
                >
                  {transaction.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TransactionList;
