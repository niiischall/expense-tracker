import { useState } from 'react';
import { categories, transactionTypes } from '../../utils/constant';
import './styles.css';

const AddTransaction = ({ onAddTransaction }) => {
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    category: 'Food',
    amount: '',
    type: 'Expense',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    const newTransaction = {
      id: Date.now(),
      date: formData.date,
      category: formData.category,
      amount: parseFloat(formData.amount),
      type: formData.type,
    };

    // Call the parent function to add the transaction
    onAddTransaction(newTransaction);

    // Reset form
    setFormData({
      date: new Date().toISOString().split('T')[0],
      category: 'Food',
      amount: '',
      type: 'Expense',
    });
  };

  return (
    <div className='transaction-form'>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            name='date'
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='category'>Category:</label>
          <select
            id='category'
            name='category'
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='amount'>Amount:</label>
          <input
            type='number'
            id='amount'
            name='amount'
            value={formData.amount}
            onChange={handleInputChange}
            step='0.01'
            min='0.01'
            placeholder='Enter amount'
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='type'>Type:</label>
          <select
            id='type'
            name='type'
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            {transactionTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <button type='submit' className='submit-btn'>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
