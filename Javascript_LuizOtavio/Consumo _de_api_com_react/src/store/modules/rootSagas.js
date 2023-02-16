import { all } from 'redux-saga/effects';

import auth from './auth/sagas';

export default function* rootSaga() {
  return yield all([auth]);
}

// dentro da lista do all é onde ficará todos os sagas
