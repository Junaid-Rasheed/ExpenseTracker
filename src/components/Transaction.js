import React,{ useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Transaction = ({ transaction }) => {
   const {deleteTransactions} = useContext(GlobalContext);

   const sign =transaction.amount < 0 ? '-':'+';
   const transactionType = transaction.amount > 0 ? "plus" : "minus";
   
    return (
    
 <li className={transactionType}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span> 
        <button onClick={() => deleteTransactions(transaction.id) }>X</button>
</li>
    
    )
}
