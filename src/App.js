import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car insurance", amount: 299.0, date: new Date(2021, 6, 12) },
    { title: "Music Player", amount: 199.0, date: new Date(2021, 2, 2) },
    { title: "Shoes", amount: 99.0, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <h2 id='title'>Expense Tracker!!!!</h2>
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

export default App;
