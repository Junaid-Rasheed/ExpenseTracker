import React,{ useState ,useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'


export const AddTransaction = () => {

const [text,setText]= useState(' ');
const [amount,setAmount] =useState(0);

const {addTransactions} = useContext(GlobalContext);


const onSubmit = e =>{
    e.preventDefault();
    const newTransaction ={
      
        id: new Date().getTime(),
        text,
        amount : +amount
    }
    addTransactions(newTransaction);
}

    return (
        
        <form className="transaction-form" onSubmit={onSubmit}>
            <h3>Add New Transaction</h3>
            <div >

                <label htmlFor="text">Text</label>

                < input id="text"
                     type="text"  
                     value={text}
                     onChange={(e) =>setText(e.target.value)}
                     placeholder="Enter Text"  
                     required ="required"   
                 />

            </div>
            <div >

                <label htmlFor="amount" >   Amount  </label>
                <br />

                < input    id="amount" 
                           type="number" 
                           value={amount}
                           onChange={(e) =>setAmount(e.target.value)} 
                           placeholder="Enter Amount"  
                           required="required"    
                />
                
             </div>

             {/* <input type="submit" placeholder="Submit" 
             /> */}
             <button className="submitbtn">Submit</button>
        </form>
    )
}
