import React from 'react';
import './App.css';
import Header from "./Components/Header"
import TotalBalance from "./Components/Total-Balance"
import IncomeExpense from "./Components/IncomeExpenseCard"
import History from "./Components/History"
import Form from './Components/Form';


function App() {
  return (
    <div className="App">
      <Header/>
      <TotalBalance/>
      <IncomeExpense/>
      <History/>
      <Form/>
    </div>
  );
}

export default App;
