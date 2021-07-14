import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: 21,
    title: "Car Insurance",
    amount: 299.0,
    date: new Date(2021, 6, 12),
  },
  { id: 22, title: "Music Player", amount: 199.0, date: new Date(2021, 2, 2) },
  { id: 33, title: "Shoes", amount: 99.0, date: new Date(2020, 1, 1) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseDataHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
