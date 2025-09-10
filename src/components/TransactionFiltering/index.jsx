import { useState } from 'react';

import { categories, transactionTypes } from '../../utils/constant';
import './styles.css';

const TransactionFiltering = ({ filters, onFiltersChange }) => {
  const handleFilterChange = (filterName, value) => {
    const newFilters = {
      ...filters,
      [filterName]: value,
    };
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      type: 'All',
      category: 'All',
      minAmount: '',
      maxAmount: '',
    };
    onFiltersChange(resetFilters);
  };

  const hasActiveFilters =
    filters.type !== 'All' ||
    filters.category !== 'All' ||
    filters.minAmount !== '' ||
    filters.maxAmount !== '';

  return (
    <div className='transaction-filtering'>
      <div className='filtering-header'>
        <h3>Filter Transactions</h3>
        {hasActiveFilters && (
          <button className='clear-filters-btn' onClick={clearFilters}>
            Clear Filters
          </button>
        )}
      </div>

      <div className='filters-grid'>
        <div className='filter-group'>
          <label htmlFor='typeFilter'>Type:</label>
          <select
            id='typeFilter'
            value={filters.type}
            onChange={(e) => handleFilterChange('type', e.target.value)}
          >
            <option value='All'>All Types</option>
            {transactionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className='filter-group'>
          <label htmlFor='categoryFilter'>Category:</label>
          <select
            id='categoryFilter'
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
          >
            <option value='All'>All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className='filter-group'>
          <label htmlFor='minAmount'>Min Amount:</label>
          <input
            type='number'
            id='minAmount'
            placeholder='0.00'
            step='0.01'
            min='0'
            value={filters.minAmount}
            onChange={(e) => handleFilterChange('minAmount', e.target.value)}
          />
        </div>
        <div className='filter-group'>
          <label htmlFor='maxAmount'>Max Amount:</label>
          <input
            type='number'
            id='maxAmount'
            placeholder='1000.00'
            step='0.01'
            min='0'
            value={filters.maxAmount}
            onChange={(e) => handleFilterChange('maxAmount', e.target.value)}
          />
        </div>
      </div>
      {hasActiveFilters && (
        <div className='active-filters'>
          <span className='active-filters-label'>Active filters:</span>
          <div className='filter-tags'>
            {filters.type !== 'All' && (
              <span className='filter-tag'>Type: {filters.type}</span>
            )}
            {filters.category !== 'All' && (
              <span className='filter-tag'>Category: {filters.category}</span>
            )}
            {filters.minAmount && (
              <span className='filter-tag'>Min: ${filters.minAmount}</span>
            )}
            {filters.maxAmount && (
              <span className='filter-tag'>Max: ${filters.maxAmount}</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TransactionFiltering;
