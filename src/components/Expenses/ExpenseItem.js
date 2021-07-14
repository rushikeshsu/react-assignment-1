import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">
       ${props.amount}
      </div>
      <button>Change Title</button>
    </div>
  );
} 

export default ExpenseItem;
