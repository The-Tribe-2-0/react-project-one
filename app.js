
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function NewTransactionForm({ onAddTransaction }) {
    <NewTransactionForm onAddTransaction={onAddTransaction} />
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newTransaction = { date, description, amount };
    function onAddTransaction(_newTransaction) {
      }
      
     

function NewTransactionForm({ }) {
  // component code
}

NewTransactionForm.propTypes = {
  onAddTransaction: PropTypes.func.isRequired,
};

    onAddTransaction(newTransaction);
    setDate('');
    setDescription('');
    setAmount('');
  };

  return (
    <>
    <h2>New Transactions</h2>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
          <tr >
            <td>{date}</td>
            <td>{description}</td>
            <td>{amount}</td>
          </tr>
        
      </tbody>
    </table>
    <form onSubmit={handleSubmit}>
      <label>
        Date:
        <input
          type="text"
          value={date}
          onChange={event => setDate(event.target.value)}
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={event => setAmount(event.target.value)}
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
    </>
  );
}

export default NewTransactionForm;

