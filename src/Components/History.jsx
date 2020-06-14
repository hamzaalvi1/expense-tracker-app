import React, {useContext}from "react"
import {TransactionContext} from "./Context/GlobalState"


const History = () =>{
    const transaction_Context = useContext(TransactionContext)
    const {initState,transactionDispatch} = transaction_Context
    return(
        <div className = "history">
            <h3>History</h3>
            <hr/>
            <ul>
             {initState.map((transaction)=>{
                 return(
                 <li key= {transaction.id}><span>{transaction.text}</span><span>${transaction.amount}
                  <button onClick = {()=> transactionDispatch({type:"DELETE-TRANSACTION",id:transaction.id}) }>X</button></span></li>
                 )
             })}
            </ul>
        </div>
    )
}
export default History