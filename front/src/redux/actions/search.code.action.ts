import { payloadAction } from "../../types/redux/action.with.payload";
import { ActionType } from "../../types/redux/action.types";

export const searchCodeSuccess = (data: any) =>
  payloadAction(ActionType.SearchCodeSuccess, data);

export const searchCodeSaga = (term: string, page: number) =>
  payloadAction(ActionType.SearchCodeSaga, { term, page });
