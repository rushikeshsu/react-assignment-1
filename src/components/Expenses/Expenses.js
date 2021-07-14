import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
function Expenses(props) {
  const expenses = props.expenses;
  const saveChangedYear = (data) =>{ 
    console.log("In Expenses.js");
    console.log(data);
  }

  return (
    <div className='expenses'>
      <div>
        <ExpensesFilter onYearChange={saveChangedYear}></ExpensesFilter>
      </div>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default Expenses;
