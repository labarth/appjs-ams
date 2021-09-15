import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { signInAction, signOutAction, setUser } from 'modules/Auth/actions/signInActions';
import { setAppLoading } from 'common/actions/actions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';
import { isAuthService, signInService, User } from 'modules/Auth/services/signInService';
import { push } from 'connected-react-router';

interface AuthSaga {
  payload: SignInPayload;
}

function *signInSaga({ payload }: AuthSaga) {
  try {
    yield put(setAppLoading(true));

    const { data: user } = yield call(signInService, payload);
    localStorage.setItem('token', user.token);

    yield put(setUser(user));
    yield put(push('/'));
    yield put(setAppLoading(false));
  } catch(e: any) {
    yield put(setAppLoading(false));
  }
}

export function *signOutSaga() {
  localStorage.removeItem('token');
  yield put(push('/signin'));
}

export function *authorizeSaga() {
  try {
    const token: string | null  = localStorage.getItem('token');

    if (token) {
      const user: User = yield call(isAuthService, token);
      localStorage.setItem('token', user.token);
      yield put(setUser(user));
      yield put(push('/'));
    } else {
      yield delay(0);
      yield put(push('/signin'));
    }
  } catch (e) {
    yield delay(0);
    yield put(push('/signin'));
  }
}

export function *SignInSagaWatcher() {
  yield takeLatest(signInAction, signInSaga);
  yield takeLatest(signOutAction, signOutSaga);
}