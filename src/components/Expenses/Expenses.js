import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState, useEffect } from "react";
function Expenses(props) {
  let expenses = props.expenses;
  const [selectedYear, setSelectedYear] = useState("");

  const saveChangedYear = (year) => {
    setSelectedYear(year);
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div className="expenses">
      <div>
        <ExpensesFilter onYearChange={saveChangedYear}></ExpensesFilter>
      </div>
      {filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default Expenses;
