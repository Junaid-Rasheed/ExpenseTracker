import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../Context/GlobalState'

export const TransactionList = () => {

    const {transactions} = useContext(GlobalContext);
    
    return (
        <>

        <h3 className="heading">History</h3>
        <ul className="transaction-list">
            {transactions.map(transaction =>
            (<Transaction key= {transaction.id} transaction={transaction} />

            ))}

            
    
        </ul>

        </>
    )
}
