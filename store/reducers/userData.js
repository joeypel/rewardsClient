const initialState = {
    username: null,
    balance: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'REFRESHUSER':
            return {
                username: action.username,
                balance: action.balance,
                userID: action.userID
            };
        default:
            return state;
    }
};
