import { put, takeLatest, select } from "redux-saga/effects";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { SnackbarData } from "../../types/app/snackbar.data.type";
import isSnackbarOpen from "../selectors/is.snackbar.open.selector";
import { ActionType } from "../../types/redux/action.types";

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

function* displaySnackbar(action: ActionWithPayload<SnackbarData>) {
  const isOpen = yield select(isSnackbarOpen);

  if (isOpen) {
    yield put({ type: ActionType.ClearSnackbar, payload: null });
    yield delay(500);
  }

  yield put({ type: ActionType.Snackbar, payload: action.payload });
}

function* snackbarSaga() {
  yield takeLatest(ActionType.SnackbarSaga, displaySnackbar);
}

export default snackbarSaga;
