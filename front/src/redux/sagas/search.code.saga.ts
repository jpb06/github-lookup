import { put, takeLatest, call } from "redux-saga/effects";
import * as api from "./../../logic/api";
import { ApiResponse } from "../../types/api/api.types";
import { ApplicationState } from "../../types/redux/application.state";
import { appState, showSnackbarSaga, searchCodeSuccess } from "../actions";
import { SnackbarType } from "../../types/app/snackbar.data.type";
import { ActionType } from "../../types/redux/action.types";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { CodeSearchResult } from "../../types/api/code.search.result";
import { SearchCodeParams } from "./../../logic/api";

function* searchCode(action: ActionWithPayload<SearchCodeParams>) {
  yield put(appState(ApplicationState.BusyGlobal));

  const result: ApiResponse<CodeSearchResult> = yield call(
    api.searchCode,
    action.payload
  );
  if (result.success) {
    yield put(searchCodeSuccess(result.data));
  } else {
    yield put(showSnackbarSaga(SnackbarType.Error, result.error as string));
  }

  yield put(appState(ApplicationState.Available));
}

function* searchCodeSaga() {
  yield takeLatest(ActionType.SearchCodeSaga, searchCode);
}

export default searchCodeSaga;
