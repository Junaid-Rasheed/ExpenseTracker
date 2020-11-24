import React,{ useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'
import { Transaction } from './Transaction';

export const IncomeExpense = () => {
    
    const { transactions } = useContext(GlobalContext);

const amount=transactions.map(transaction => (transaction.Amount))
const income=amount .filter(item => item > 0).reduce((acc,item)=> (acc +=item),0 )
const expense=amount .filter(item => item < 0).reduce((acc,item)=> (acc +=item),0 )*-1;

    return (
        <div className="styleAccount">

        <div>
            <h4>Income</h4>
    <p className="money plus">{income}</p>
        </div>

        <div>
        <h4>Expense</h4>
    <p  className="money minus">{expense}</p>
        </div>

    </div>
    )
}
