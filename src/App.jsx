import { useState } from 'react';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>💰 Expense Tracker</h1>
        <p>Track your expenses efficiently</p>
      </header>
      <main>
        <div className='expense-form'>
          <h2>Add New Expense</h2>
          {/* Add your expense form here */}
        </div>
        <div className='expense-list'>
          <h2>Your Expenses</h2>
          {expenses.length === 0 ? (
            <p>No expenses yet. Add your first expense above!</p>
          ) : (
            expenses.map((expense, index) => (
              <div key={index} className='expense-item'>
                {expense.description}: ${expense.amount}
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
