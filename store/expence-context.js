import { createContext, useReducer } from "react";

// const DATA = [
//     {id: "e1", description: "Some proposition", amount: 33.14, date: new Date("2022-10-13")},
//     {id: "e2", description: "Some data", amount: 55.18, date: new Date("2022-11-13")},
//     {id: "e3", description: "Alah modah", amount: 95.18, date: new Date("2022-12-13")},
//     {id: "e4", description: "Alah Srythos", amount: 92.58, date: new Date("2023-03-30")},
// ]

export const ExpensesContext = createContext({
    expences: [],
    addExpence:({description, amount, date}) => {

    },
    setExpences:(expences) => {},
    deleteExpence:(id) => {

    },
    updateExpence:(id, {description, amount, date}) => {

    }
});

const expencesReducer = (state, action) => {
    switch(action.type){
        case "ADD":{
            return [action.payload, ...state]
        }
        case "DELETE":{
            return state.filter(item => item.id !== action.payload)
        }
        case "SET":{
            const invetered = action.payload.reverse()
            return invetered
        }
        case "UPDATE":{
            const updatableExpenseIndex = state.findIndex(
                (expense) => expense.id === action.payload.id
              );
              const updatableExpense = state[updatableExpenseIndex];
              const updatedItem = { ...updatableExpense, ...action.payload.data };
              const updatedExpenses = [...state];
              updatedExpenses[updatableExpenseIndex] = updatedItem;
              return updatedExpenses;
        }
        default:
            return state
    }
}

const ExpencesContextProvider = ({children}) => {
    const [expencesState, dispatch] = useReducer(expencesReducer, [])

    const addExpence = (expenceData) => {
        dispatch({type: "ADD", payload: expenceData});
    }
    const setExpences = (expences) => {
        dispatch({type:"SET", payload: expences})
    }
    const deleteExpence = (id) => {
        dispatch({type: "DELETE", payload: id})
    }

    const updateExpence = (id, expenceData) => {
        dispatch({type: "UPDATE", payload: {id: id, data: expenceData}})
    }

    const value = {
        expenses: expencesState,
        addExpence: addExpence,
        setExpences: setExpences,
        deleteExpence: deleteExpence,
        updateExpence: updateExpence,
        
    }

    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}
export default ExpencesContextProvider