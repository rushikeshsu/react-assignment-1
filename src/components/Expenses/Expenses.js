import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";
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
      <ExpenseList items={filteredExpenses}></ExpenseList>
    </div>
  );
}

export default Expenses;
