export default (state, action) => {
    if(action.type == "Clicked"){
        // return {
        //     ...state,
        //     tech: action.tech
        // };
        return [
            action.user,
            ... state
        ]
    }
    if(action.type == "Clear"){
        return []
    }
    return state
}