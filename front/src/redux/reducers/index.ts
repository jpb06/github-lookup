import { combineReducers } from "redux";
import snackbarReducer from "./snackbar.reducer";
import applicationStateReducer from "./application.state.reducer";

const rootReducer = combineReducers({
  appState: applicationStateReducer,
  snackbar: snackbarReducer,
});

export default rootReducer;
