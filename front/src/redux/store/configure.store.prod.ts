import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import { RootState } from "./root.state";
import createSagaMiddleware from "redux-saga";
import snackbarSaga from "../sagas/snackbar.saga";

export default function configureStore(preloadedState?: RootState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  // then run the saga
  sagaMiddleware.run(snackbarSaga);

  return store;
}
