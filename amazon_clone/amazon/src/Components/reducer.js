export const initialState = {
    basket : [],
    user:null,
};

function reducer(state,action){
    console.log(action)
    switch(action.type){
        case "user":
            return{
                ...state,
                user:action.user,
            }
        case "add_to_basket":
            return {
                ...state,//keep the previous data of the state
                basket: [...state.basket,action.items], //keep the previous data of the basket and add the item on top of it.
            };
        case "remove_from_basket":

            return {...state};
        default:
            return state;
    }
}

export default reducer;