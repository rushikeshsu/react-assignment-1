import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const addExpenseDataHandler = (expense) =>{
    console.log('In App.js');
    console.log(expense);
  }
  const expenses = [
    { title: "Car Insurance", amount: 299.0, date: new Date(2021, 6, 12) },
    { title: "Music Player", amount: 199.0, date: new Date(2021, 2, 2) },
    { title: "Shoes", amount: 99.0, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
