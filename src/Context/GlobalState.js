import React ,{ useReducer,createContext } from 'react'
import { AppReducer} from './AppReducer'

const initialState={
transactions:[
    // {id :1,text:"Hazma" , Amount:400},
    // {id :2,text:"rice" ,  Amount:300},
    // {id :3,text:"morgan" ,Amount:-1000},
    // {id :4,text:"ice" ,   Amount:100}
]
    

}

//create global COntext

export const GlobalContext= createContext(initialState);

//craete provier

export const GlobalProvider =({children}) =>{

const[state,dispatch] = useReducer(AppReducer,initialState)

function deleteTransactions(id){
    dispatch({
        type : "DELETE_TRANSACTION",
        payload : id
    });
}

function addTransactions(transaction){
    dispatch({
        type : "ADD_TRANSACTION",
        payload : transaction
    })

}

    return(
        <GlobalContext.Provider value={
        {
            transactions : state.transactions,
            deleteTransactions,
            addTransactions
        }
     }>
{children}

        </GlobalContext.Provider>
    );
}