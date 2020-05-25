import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { ApplicationState } from "../../types/redux/application.state";
import { ActionTypes } from "../../types/redux/action.types";

const ApplicationStateReducer = (
  state: ApplicationState = initialState.appState,
  action: ActionWithPayload<ApplicationState>
) => {
  switch (action.type) {
    case ActionTypes.AppAvailable:
      return ApplicationState.Available;
    case ActionTypes.AppBusy:
      return action.payload;
  }

  return state;
};

export default ApplicationStateReducer;
