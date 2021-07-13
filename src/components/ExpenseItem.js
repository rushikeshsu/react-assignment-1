import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  
  return (
    <div className="expense-item">
      <ExpenseDate title={props.title} amount={props.amount} date={props.date}></ExpenseDate>
      <div className="expense-item_description">
        <h2>{props.title}</h2>
      </div>
      <div className="expense-item_price">
        &nbsp; &nbsp;${props.amount} &nbsp; &nbsp;
      </div>
    </div>
  );
}

export default ExpenseItem;
