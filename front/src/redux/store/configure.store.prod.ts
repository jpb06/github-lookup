import { createStore, applyMiddleware } from "redux";
import rootReducer from "./../reducers";
import { RootState } from "./root.state";
import createSagaMiddleware from "redux-saga";
import { runSagas } from "./run.sagas";

export default function configureStore(preloadedState?: RootState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  // then run the saga
  runSagas(sagaMiddleware);

  return store;
}
