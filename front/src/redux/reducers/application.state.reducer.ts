import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { ApplicationState } from "../../types/redux/application.state";
import { ActionType } from "../../types/redux/action.types";

const applicationStateReducer = (
  state: ApplicationState = initialState.appState,
  action: ActionWithPayload<ApplicationState>
) => {
  if (action.type === ActionType.ApplicationState) {
    return action.payload;
  }

  return state;
};

export default applicationStateReducer;
