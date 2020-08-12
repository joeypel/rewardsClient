const initialState = {
    hidden: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "HIDEOFFER":
            return {
                ...state, hidden: [...state.hidden, action.offerName]
            };
        case "UNHIDEALL":
            return initialState;
        case "UNHIDE":
            return { ...state, hidden: state.hidden.filter(item => item !== action.offerName) };
        default:
            return state;
    }
};
