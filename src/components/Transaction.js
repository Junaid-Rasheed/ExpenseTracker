import React,{ useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Transaction = ({ transaction }) => {
   const {deleteTransactions} = useContext(GlobalContext);

   const sign =transaction.Amount < 0 ? '-':'+';
   
    return (
    
 <li>
        {transaction.text} <span>{sign}${Math.abs(transaction.Amount)}</span> 
        <button onClick={() => (deleteTransactions(transaction.id)) }>X</button>
</li>
    
    )
}
