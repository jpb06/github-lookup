import { Action } from "redux";
import { ActionType } from "./action.types";

export interface ActionWithPayload<TPayload> extends Action<ActionType> {
  payload: TPayload;
}

export const payloadAction = (type: ActionType, payload: any) => ({
  type,
  payload,
});
