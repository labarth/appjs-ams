import { takeLatest, call, put } from 'redux-saga/effects';
import { signInAction } from 'modules/Auth/actions/signInActions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';
import { isAuthService, signInService} from 'modules/Auth/services/signInService';
import { push } from 'connected-react-router';

interface SignInSaga {
  payload: SignInPayload;
}

function *signInSaga({ payload }: SignInSaga) {
  try {
    const token: string = yield call(signInService, payload);
    yield localStorage.setItem('token', token);
    yield put(push('/'));
  } catch(e: any) {
    console.log(e.message);
  }
}

function *signOutSaga() {
  localStorage.removeItem('token');
  yield put(push('/signin'));
}

export function *authorizeSaga() {
  const token: string | null  = localStorage.getItem('token');

  if (token) {
    const updatedToken: string = yield call(isAuthService, token);
    localStorage.setItem('token', updatedToken);
    yield put(push('/'));
  } else {
    yield put(push('/signin'));
  }
}

export function *SignInSagaWatcher() {
  yield takeLatest(signInAction, signInSaga);
}