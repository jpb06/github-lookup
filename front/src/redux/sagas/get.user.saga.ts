import { put, takeLatest, select, call } from "redux-saga/effects";
import isUserLoaded from "../selectors/is.user.loaded";
import * as api from "./../../logic/api";
import { User } from "../../types/app/user.type";
import { ApiResponse } from "../../types/api/api.types";
import { ApplicationState } from "../../types/redux/application.state";
import { appState, getUserSuccess, showSnackbarSaga } from "../actions";
import { SnackbarType } from "../../types/app/snackbar.data.type";
import { ActionType } from "../../types/redux/action.types";

function* fetchUser() {
  const userLoaded = yield select(isUserLoaded);

  if (!userLoaded) {
    yield put(appState(ApplicationState.BusyGlobal));

    const result: ApiResponse<User> = yield call(api.getUser);
    if (result.success) {
      yield put(getUserSuccess(result.data as User));
    } else {
      yield put(showSnackbarSaga(SnackbarType.Error, result.error as string));
    }

    yield put(appState(ApplicationState.Available));
  }
}

function* getUserSaga() {
  yield takeLatest(ActionType.GetUserSaga, fetchUser);
}

export default getUserSaga;
