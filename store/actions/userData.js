export const refreshUser = (token) => {
    return async dispatch => {
        const response = await fetch(
            'https://hedgebetcalculator.com/services/user',
            {
                method: 'GET', headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    token: token,
                },
            }
        );

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!';
            }
            throw new Error(message);
        }

        const resData = await response.json();

        dispatch({ type: 'REFRESHUSER', resData }
        );
    };
}