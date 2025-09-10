import { useState, useEffect, useCallback } from 'react';

import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import BalanceSummary from './components/BalanceSummary';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  const handleAddTransaction = useCallback(
    (newTransaction) => {
      const updatedTransactions = [newTransaction, ...transactions];
      setTransactions(updatedTransactions);
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
    },
    [transactions]
  );

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>💰 Expense Tracker</h1>
      </header>
      <main className='content'>
        <div className='balance-summary-row'>
          <BalanceSummary transactions={transactions} />
        </div>
        <div className='main-content-row'>
          <AddTransaction onAddTransaction={handleAddTransaction} />
          <TransactionList transactions={transactions} />
        </div>
      </main>
    </div>
  );
}

export default App;
