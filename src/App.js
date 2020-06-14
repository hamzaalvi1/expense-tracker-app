import React from 'react';
import './App.css';
import {TransactionProvider} from "./Components/Context/GlobalState"
import Header from "./Components/Header"
import TotalBalance from "./Components/Total-Balance"
import IncomeExpense from "./Components/IncomeExpenseCard"
import History from "./Components/History"
import Form from './Components/Form';


function App() {
  return (
    <TransactionProvider>
    <div className="App">
      <Header/>
      <TotalBalance/>
      <IncomeExpense/>
      <History/>
      <Form/>
    </div>
    </TransactionProvider>

  );
}

export default App;
