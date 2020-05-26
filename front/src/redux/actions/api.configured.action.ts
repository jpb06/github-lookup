import { ActionType } from "../../types/redux/action.types";

export const apiConfigured = (isConfigured: boolean) => ({
  type: ActionType.ApiConfigured,
  payload: isConfigured,
});
