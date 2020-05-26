import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { ActionType } from "../../types/redux/action.types";

const apiConfiguredReducer = (
  state: boolean = initialState.isApiConfigured,
  action: ActionWithPayload<boolean>
) => {
  if (action.type === ActionType.ApiConfigured) {
    return action.payload;
  }

  return state;
};

export default apiConfiguredReducer;
