import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] =useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // const [userInput, setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    const titleChangeHandler = (event) =>{
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })
        // setUserInput((prevState) => {
        //     return {...prevState, enteredTitle: event.target.value};
        // })
        setEnteredTitle(event.target.value);
    }

    const amountChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredAmount: event.target.value};
        // })
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {...prevState, enteredDate: event.target.value};
        // });
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData);
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler} className='expense-form'>
            <div className='controls'>
                <div className='control'>
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>                <div className='control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler}></input>
                </div>
                <div className='control'>
                    <label>Date</label>
                    <input type='date' min='2019-01-01' max='2022-22-31' value={enteredDate} onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className=' actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
};

export default ExpenseForm;