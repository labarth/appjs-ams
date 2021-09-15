import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { signInAction, signOutAction } from 'modules/Auth/actions/signInActions';
import { setAppLoading } from 'common/actions/actions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';
import { isAuthService, signInService} from 'modules/Auth/services/signInService';
import { push } from 'connected-react-router';

interface AuthSaga {
  payload: SignInPayload;
}

function *signInSaga({ payload }: AuthSaga) {
  try {
    yield put(setAppLoading(true));

    const token: string = yield call(signInService, payload);
    localStorage.setItem('token', token);

    yield put(push('/'));
    yield put(setAppLoading(false));
  } catch(e: any) {
    console.log(e.message);
  }
}

export function *signOutSaga() {
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
    yield delay(0);
    yield put(push('/signin'));
  }
}

export function *SignInSagaWatcher() {
  yield takeLatest(signInAction, signInSaga);
  yield takeLatest(signOutAction, signOutSaga);
}