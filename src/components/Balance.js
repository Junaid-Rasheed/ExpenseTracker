import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {

    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.Amount);
    const total  = amounts.reduce((acc,item)=>(acc +=item),0);
    
    

    return (
        <>
            <h4>CURRENT BALANCE (in $)</h4>
             <h2>{total}</h2>
        </>
    )
}
