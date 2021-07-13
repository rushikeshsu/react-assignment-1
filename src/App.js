import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 299.0, date: new Date(2021, 6, 12) },
    { title: "Music Player", amount: 199.0, date: new Date(2021, 2, 2) },
    { title: "Shoes", amount: 99.0, date: new Date(2021, 1, 1) },
  ];
  return (
    <div>
      <h2 id="title">Expense Tracker!!!!</h2>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
