import { combineReducers } from "redux";
import snackbarReducer from "./snackbar.reducer";
import applicationStateReducer from "./application.state.reducer";
import userReducer from "./user.reducer";
import apiConfiguredReducer from "./api.configured.reducer";
import codeSearchResultsReducer from "./code.search.results.reducer";

const rootReducer = combineReducers({
  appState: applicationStateReducer,
  snackbar: snackbarReducer,
  user: userReducer,
  isApiConfigured: apiConfiguredReducer,
  codeSearchResults: codeSearchResultsReducer,
});

export default rootReducer;
