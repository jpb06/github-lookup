import { ApplicationState } from "../../types/redux/application.state";
import { ActionType } from "../../types/redux/action.types";

export const appState = (state: ApplicationState) => ({
  type: ActionType.ApplicationState,
  payload: state,
});
