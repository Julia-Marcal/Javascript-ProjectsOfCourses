import { createStore } from 'redux';

const initialState = {
  botaoClicado: false,
};

// estado atual está sendo copiado para o new state com a spread operator
// e depois trocando o estado (se for true vira false e visse verssa)

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }

    default: {
      return state;
    }
  }
};

const store = createStore(reducer);

export default store;
