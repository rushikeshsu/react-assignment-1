import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="notFound">No Expenses Found</h2>;
  }

  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
        ></ExpenseItem>
      ))}
    </div>
  );
};

export default ExpenseList;
