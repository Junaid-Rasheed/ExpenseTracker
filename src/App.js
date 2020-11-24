import React from 'react'
import './App.css';

//components.

import { Header } from './components/Header'
import { Balance } from './components/Balance'
import {IncomeExpense} from './components/IncomeExpense'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

//context
import { GlobalProvider}  from './Context/GlobalState'

function App() {

  return (
  <GlobalProvider>
  <div className="container">
<Header />
<Balance />
<IncomeExpense />
<TransactionList />
<AddTransaction />   
   </div>
   </GlobalProvider>
  );
}

export default App;

