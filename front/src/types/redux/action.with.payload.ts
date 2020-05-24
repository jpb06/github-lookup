import { Action } from "redux";
import { ActionTypes } from "./action.types";

export interface ActionWithPayload<TPayload> extends Action<ActionTypes> {
  payload: TPayload;
}
