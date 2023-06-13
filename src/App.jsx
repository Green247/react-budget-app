import React, { useState } from 'react';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);

  const addExpense = (e) => {
    e.preventDefault();
    const newExpense = { name: expenseName, amount: expenseAmount };
    setExpenses([...expenses, newExpense]);
    setExpenseName('');
    setExpenseAmount(0);
  };

  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const calculateTotalExpense = () => {
    let total = 0;
    expenses.forEach((expense) => {
      total += expense.amount;
    });
    return total;
  };

  return (
    <div>
      <h1>Gladys Budget App</h1>

      <form onSubmit={addExpense}>
        <input
          type="text"
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense Amount"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(parseFloat(e.target.value))}
        />
        <button type="submit">Add Expense</button>
      </form>

      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ${expense.amount}
            <button onClick={() => deleteExpense(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <p>Total Expense: € {calculateTotalExpense()}</p>
    </div>
  );
}

export default App;

