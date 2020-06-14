import React, {useContext} from "react"
import {TransactionContext} from "./Context/GlobalState"

const TotalBalance = () =>{
    const transaction_Context = useContext(TransactionContext)
    const {initState} = transaction_Context
    const _amount = initState.map(transaction => Number(transaction.amount) )
    const _filterState = _amount.filter(transaction =>  transaction < 0)
    const finalExpense = _filterState.reduce((preVal,currVal)=>{
        return preVal + currVal
    },0)
    const amount = initState.map(transaction => Number(transaction.amount) )
    const filterState = amount.filter(transaction =>  transaction > 0)
    const finalIncome = filterState.reduce((preVal,currVal)=>{
        return preVal + currVal
    },0)
    return(
        <div className = "balance">
            <h2>Your Balance</h2>
            <h1>${finalIncome - Math.abs(finalExpense)}</h1>
        </div>
    )
}
export default TotalBalance