import React, {useContext} from "react"
import {TransactionContext} from "./Context/GlobalState"

const Expense = () =>{
    const transaction_Context = useContext(TransactionContext)
    const {initState} = transaction_Context
    const amount = initState.map(transaction => Number(transaction.amount) )
    const filterState = amount.filter(transaction =>  transaction < 0)
    const finalAmount = filterState.reduce((preVal,currVal)=>{
        return preVal + currVal
    },0)
    return(
        <div className = "expense">
            <h3>EXPENSE</h3>
            <h2>${Math.abs(finalAmount)}</h2>
        </div>
    )
}
export default Expense