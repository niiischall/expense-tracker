import { useState } from 'react';

import './styles.css';
import TransactionFiltering from '../TransactionFiltering';
import { formatDate, filterTransactions } from '../../utils/helpers';

const TransactionList = ({ transactions }) => {
  const [filters, setFilters] = useState({
    type: 'All',
    category: 'All',
    minAmount: '',
    maxAmount: '',
  });

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredTransactions = filterTransactions(transactions, filters);

  return (
    <div className='transaction-list-container'>
      <h2>Transaction List</h2>
      {/*Transaction Filter*/}
      <TransactionFiltering
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />
      {/*Transaction List*/}
      <div className='transaction-list'>
        {filteredTransactions.length === 0 ? (
          <p className='no-transactions'>
            No transactions yet. Add your first transaction above!
          </p>
        ) : (
          <div className='transactions'>
            {filteredTransactions.map((transaction) => (
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
    </div>
  );
};

export default TransactionList;
