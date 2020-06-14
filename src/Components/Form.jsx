import React, {useState,useContext} from "react"
import {TransactionContext} from "./Context/GlobalState"

const Form = ()=>{
const transaction_Context = useContext(TransactionContext)
const {transactionDispatch} = transaction_Context
const [transaction,setTransaction] = useState({text: "",amount: 0})
const onSubmitHandler = (evt)=>{
evt.preventDefault()
transactionDispatch({type: "ADD-TRANSACTION",transaction})
setTransaction({text: "",amount:" "})
}

    return(
        <div className = "form" onSubmit = {onSubmitHandler}>
          <h3>Add new transactions</h3>
           <hr/>
           <form>
               <label htmlFor="text">Text</label>
               <input type="text" name = "text" 
               placeholder="Enter your text...."
                value = {transaction.text}
                onChange = {(e)=> setTransaction({...transaction,[e.target.name]:e.target.value,id:(Math.floor(Math.random()*1000000))})}/>
               <label htmlFor="text">Amount
               </label>
               <p>(negative -expense,positive-income)</p>
               <input type="text"
                name = "amount"
                 placeholder="Enter your amount..." 
                 value = {transaction.amount} onChange = {(e)=> setTransaction({...transaction,[e.target.name]:e.target.value})}/>
               <button type="submit">Add transactions</button>
           </form>
        </div>
    )
}
export default Form 