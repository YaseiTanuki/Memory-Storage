export const init = null;

export const reducer = (state, action) => {
    if(action.type == "LOG"){
        return action.payload
    }
    return state;
}