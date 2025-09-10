export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const filterTransactions = (transactions, filters) => {
  return transactions.filter((transaction) => {
    // Type
    if (filters.type !== 'All' && transaction.type !== filters.type) {
      return false;
    }

    // Category
    if (
      filters.category !== 'All' &&
      transaction.category !== filters.category
    ) {
      return false;
    }

    // Amount range
    if (
      filters.minAmount !== '' &&
      transaction.amount < parseFloat(filters.minAmount)
    ) {
      return false;
    }

    if (
      filters.maxAmount !== '' &&
      transaction.amount > parseFloat(filters.maxAmount)
    ) {
      return false;
    }

    return true;
  });
};
