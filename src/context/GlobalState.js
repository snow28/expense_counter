import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state

const initialState = {
    transactions:  [
       { id: 1, text: 'Subway', amount: -20 },
       { id: 2, text: 'Salary', amount: 2000 },
       { id: 3, text: 'Taxi', amount: -30 },
       { id: 4, text: 'Phone', amount: -350 }
     ]
};

// Create context

export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ( { children } ) => {
    const [state, dispatch] = useReducer( AppReducer, initialState );

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    }
    function addTransaction( transaction ) {
        dispatch({
            type: 'ADD',
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </GlobalContext.Provider>
    );
}