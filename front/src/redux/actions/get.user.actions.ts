import { User } from "../../types/app/user.type";
import { payloadAction } from "../../types/redux/action.with.payload";
import { ActionType } from "../../types/redux/action.types";

export const getUserSuccess = (user: User) =>
  payloadAction(ActionType.GetUserSuccess, user);

export const getUserSaga = () => ({ type: ActionType.GetUserSaga });
