import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated');
    console.log('Clicked');
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item_description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item_price">
       ${props.amount}
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
} 

export default ExpenseItem;
