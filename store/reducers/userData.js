const initialState = {
    username: null,
    balance: null
};

export default (state = initialState, action) => {
    console.log("trigger2")
    switch (action.type) {
        case 'REFRESHUSER':
            console.log("trigger")
            return {
                username: action.username,
                balance: action.balance
            };
        default:
            return state;
    }
};
