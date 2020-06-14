import React, {useContext} from "react"
import {TransactionContext} from "./Context/GlobalState"


const Income = () =>{
    const transaction_Context = useContext(TransactionContext)
    const {initState} = transaction_Context
    const amount = initState.map(transaction => Number(transaction.amount) )
    const filterState = amount.filter(transaction =>  transaction > 0)
    const finalAmount = filterState.reduce((preVal,currVal)=>{
        return preVal + currVal
    },0)
    return(
        <div className = "income">
            <h3>INCOME</h3>
            <h2>${finalAmount}</h2>
        </div>
    )
}
export default Income