import { SagaMiddleware } from "redux-saga";
import snackbarSaga from "../sagas/snackbar.saga";
import getUserSaga from "../sagas/get.user.saga";
import searchCodeSaga from "../sagas/search.code.saga";

export const runSagas = (sagaMiddleware: SagaMiddleware<object>) => {
  sagaMiddleware.run(snackbarSaga);
  sagaMiddleware.run(getUserSaga);
  sagaMiddleware.run(searchCodeSaga);
};
