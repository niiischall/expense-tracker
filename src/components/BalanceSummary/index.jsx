import './styles.css';

const BalanceSummary = ({ transactions }) => {
  // Calculate totals using reduce
  const totals = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'Income') {
        acc.totalIncome += transaction.amount;
      } else {
        acc.totalExpenses += transaction.amount;
      }
      return acc;
    },
    { totalIncome: 0, totalExpenses: 0 }
  );

  const totalBalance = totals.totalIncome - totals.totalExpenses;

  // Format currency display
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className='balance-summary'>
      <h2>Balance Summary</h2>
      <div className='balance-cards'>
        <div className='balance-card total-balance'>
          <div className='balance-label'>Total Balance</div>
          <div
            className={`balance-amount ${
              totalBalance >= 0 ? 'positive' : 'negative'
            }`}
          >
            {formatCurrency(totalBalance)}
          </div>
        </div>

        <div className='balance-card income'>
          <div className='balance-label'>Total Income</div>
          <div className='balance-amount positive'>
            {formatCurrency(totals.totalIncome)}
          </div>
        </div>

        <div className='balance-card expenses'>
          <div className='balance-label'>Total Expenses</div>
          <div className='balance-amount negative'>
            {formatCurrency(totals.totalExpenses)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BalanceSummary;
