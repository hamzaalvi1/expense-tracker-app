import React from "react"
import Income from "./Income"
import Expense from "./Expense"

const IncomeExpense = ()=>{
    return(
        <div className = "card-panel">
         <Income/>
         <Expense/>

        </div>
    )
}

export default IncomeExpense