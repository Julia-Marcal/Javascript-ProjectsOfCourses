import { call, put, all, takeLatest } from 'redux-saga/effects';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import axios from '../../../services/axios';
import * as actions from './actions';
import * as types from '../types';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSucess({ ...response.data }));

    toast.success('Você fez login');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Email ou senha inválidos');

    yield put(actions.loginFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
]);
// takeLatest é ouvir apenas o último clique dado
// o primeiro item do array é oq o Saga vai ouvir
// o segundo oq ele vai executar
