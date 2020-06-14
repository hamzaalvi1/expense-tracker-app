import React , {createContext,useReducer} from "react"

const transactionReducer = (state,action)=>{
switch(action.type){
    case "ADD-TRANSACTION":
     return [...state, action.transaction]
     case "DELETE-TRANSACTION":
      return state.filter((trans)=> trans.id !== action.id)    
    default : return state
}
}

let initialState = []
export const TransactionContext = createContext()

export const TransactionProvider = ({children})=>{
    const [initState,transactionDispatch] = useReducer(transactionReducer,initialState)
    return(
      <TransactionContext.Provider value = {{initState,transactionDispatch}}>
          {children}
       </TransactionContext.Provider>   
    )
}