import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [expenseFlag, setExpenseFlag] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setExpenseFlag(false);
  };

  const expenseFormShowHandler = () => {
        setExpenseFlag(true);
  };

  const expenseFormHideHandler = () => {
      setExpenseFlag(false);
  }

  let content = 
    <div className="new_expense">
      <button className="add_expense_btn" onClick={expenseFormShowHandler}>
        Add Expense
      </button>
    </div>
  
  if(expenseFlag === true)
  {
      content = <div className="new_expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={expenseFormHideHandler}></ExpenseForm>
   </div>
  }

return (<div>{content}</div>);

//   return (
//     <div className="new_expense">
//       <button className="add_expense_btn" onClick={expenseFormHandler}>
//         Add Expense
//       </button>
//     </div>
//   );

  // return (
    //   <div className="new_expense">
    //      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
    //   </div>
  // )
};

export default NewExpense;
