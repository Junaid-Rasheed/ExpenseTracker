import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total  = amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
    
    

    return (
        <div>
            <h4>CURRENT BALANCE </h4>
             <h2>${total}</h2>
        </div>
    )
}
