import { AsyncStorage } from 'react-native';
export const AUTHENTICATE = 'AUTHENTICATE';
export const LOGOUT = 'LOGOUT';
export const SET_DID_TRY_AL = 'SET_DID_TRY_AL';

let timer;

export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

export const authenticate = (token) => {
  return dispatch => {
    dispatch({ type: AUTHENTICATE , token: token });
  };
};

export const signup = (email, password) => {

};

export const login = (token) => {
  return async dispatch => {
    console.log("HERE AT DISPATCH");
    console.log("TOKEN RECIVED");
    console.log(token);
    await dispatch(
      authenticate(token)
    );
    saveDataToStorage(token);
  };
};

export const logout = () => {
  clearLogoutTimer();
  AsyncStorage.removeItem('userData');
  return { type: LOGOUT };
};

const saveDataToStorage = (token) => {
  AsyncStorage.setItem(
    'user_token',
    JSON.stringify({
      token: token,
    })
  );
};
