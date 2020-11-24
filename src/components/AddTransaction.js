import React,{ useState ,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const AddTransaction = () => {
const [text,setText]= useState(" ");
const [amount,setAmount] =useState(0);

const {addtTransactions} = useContext(GlobalContext);

const handleAddition =(e) =>{
    e.preventDefault();
    const newTransaction ={
        id:Math.floor(Math.random()*1000000),text,amount
    }
    addtTransactions(newTransaction);
}
    return (
        <form className="transaction-form" onSubmit={handleAddition}>
            <h3>Add New Transaction</h3>
            <div >

                <label htmlFor="text">Text</label>

                < input id="text"          type="text" 
                placeholder="Enter Text"    value={text}
                onChange={(e) =>setText(e.target.value)}    required   />

            </div>
            <div >

                <label htmlFor="Amount" >   Amount  </label>
                <br />

                < input id="Amount"          type="number" 
                placeholder="Enter Amount"    value={amount}
                onChange={(e) =>setAmount(e.target.value)}    required   />
             </div>

             <input type="submit" placeholder="Submit" 
             />
        </form>
    )
}
