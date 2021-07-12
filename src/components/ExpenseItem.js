import "./ExpenseItem.css";

function ExpenseItem(props) {
  //  const expenseDate = new Date(2021, 6, 12);
  //  const expenseTitle = 'Car Insurance';
  //  const expenseAmount  = 299.00;
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-item">
      <div className="expense-item_date">
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
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