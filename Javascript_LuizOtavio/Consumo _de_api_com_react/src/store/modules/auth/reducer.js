import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: false,
  user: {},
  isLoading: false,
};

// estado atual está sendo copiado para o new state com a spread operator
// e depois trocando o estado (se for true vira false e visse verssa)

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      console.log('REDUCER', action.payload);
      return state;
    }

    case types.LOGIN_FAILURE: {
      const newState = { ...initialState };
      return newState;
    }

    case types.LOGIN_SUCESS: {
      const newState = { ...state };
      newState.isLoggedIn = true;
      newState.token = action.payload.token;
      newState.user = action.payload.user;

      return state;
    }

    default: {
      return state;
    }
  }
}
