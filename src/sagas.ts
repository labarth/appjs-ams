import { fork } from 'redux-saga/effects';

function *initAppSaga() {
  yield console.log('init app');
}


export default function* mainSaga() {
  yield fork(initAppSaga);
}