//setting up the data layer
//need this to track basket.

import react,{ createContext, useContext, useReducer } from "react";

//this is data layer
export const StateContext = createContext();

//Build a provider used in index.js
export const StateProvider = ({ reducer ,initialState ,children}) => {
    return(
        <StateContext.Provider value = {useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )  
};

// this is used in componentss
export const useStateValue = () => useContext(StateContext);