import React from "react"


const Form = ()=>{
    return(
        <div className = "form">
          <h3>Add new transactions</h3>
           <hr/>
           <form>
               <label htmlFor="text">Text</label>
               <input type="text" name = "text" placeholder="Enter your text...."/>
               <label htmlFor="text">Amount
               </label>
               <p>(negative -expense,positive-income)</p>
               <input type="text" name = "number" placeholder="Enter your amount..."/>
               <button type="submit">Add transactions</button>
           </form>
        </div>
    )
}
export default Form 