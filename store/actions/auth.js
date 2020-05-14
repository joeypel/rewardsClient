import { AsyncStorage } from 'react-native';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';

let timer;

export const authenticate = (token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE, token: token });
  };
};

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://hedgebetcalculator.com/services/signup',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.msg;
      throw new Error(errorId);
    }

    const resData = await response.json();
    console.log(resData);
    saveDataToStorage(resData.token);

    dispatch(
      authenticate(
        resData.token,
      )
    );
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(
      'https://hedgebetcalculator.com/services/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        })
      }
    );

    if (!response.ok) {
      const errorResData = await response.json();
      console.log(errorResData)
      const errorId = errorResData.msg;
      throw new Error(errorId);
    }

    const resData = await response.json();
    AsyncStorage.setItem('userData', resData.token)
    dispatch(
      authenticate(
        resData.token,
      )
    );
  };
};

export const logout = () => {
  // clearLogoutTimer();
  // AsyncStorage.removeItem('userData');
  // return { type: LOGOUT };
};

const clearLogoutTimer = () => {
  if (timer) {
    clearTimeout(timer);
  }
};

const setLogoutTimer = expirationTime => {
  return dispatch => {
    timer = setTimeout(() => {
      dispatch(logout());
    }, expirationTime);
  };
};

const saveDataToStorage = (token) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify(token)
  );
};


