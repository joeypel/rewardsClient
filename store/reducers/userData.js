const initialState = {
    username: null,
    balance: null,
    userID: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REFRESHUSER':
            return {
                username: action.username,
                balance: action.balance,
                userID: action.userID
            };
        case 'LOGOUT':
            return initialState
        default:
            return state;
    }
};
