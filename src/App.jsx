import { useState, useEffect } from 'react';

import './App.css';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

function App() {
  const [transactions, setTransactions] = useState([]);

  // Load transactions from localStorage on component mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem('transactions');
    if (savedTransactions) {
      setTransactions(JSON.parse(savedTransactions));
    }
  }, []);

  // Save transactions to localStorage whenever transactions change
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Function to add a new transaction
  const handleAddTransaction = (newTransaction) => {
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>💰 Expense Tracker</h1>
        <p>Track your expenses efficiently</p>
      </header>
      <main className='content'>
        <AddTransaction onAddTransaction={handleAddTransaction} />
        <TransactionList transactions={transactions} />
      </main>
    </div>
  );
}

export default App;
