import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { signInAction, signOutAction, setUser } from 'modules/Auth/actions/signInActions';
import { setAppLoading } from 'common/actions/actions';
import { SignInPayload } from 'modules/Auth/interfaces/signInInterfaces';
import { isAuthService, signInService } from 'modules/Auth/services/signInService';
import { push } from 'connected-react-router';
import {currentLocationSelector} from '../selectors';
import {ROUTES_PATH} from '../../../common/constants';

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

export function *redirectToSignIn() {
  const location: string = yield select(currentLocationSelector);

  if (location !== ROUTES_PATH.SIGN_UP) {
    yield delay(0);
    yield put(push('/signin'));
  }
}

export function *authorizeSaga() {
  try {
    const token: string | null  = localStorage.getItem('token');

    if (token) {
      const { data: user } = yield call(isAuthService, token);
      localStorage.setItem('token', user.token);
      yield put(setUser(user));
      yield put(push('/'));
    } else {
      yield call(redirectToSignIn);
    }
  } catch (e) {
    yield call(redirectToSignIn);
  }
}

export function *SignInSagaWatcher() {
  yield takeLatest(signInAction, signInSaga);
  yield takeLatest(signOutAction, signOutSaga);
}