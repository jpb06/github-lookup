import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { User } from "../../types/app/user.type";
import { ActionType } from "../../types/redux/action.types";

const userReducer = (
  state: User | null = initialState.user,
  action: ActionWithPayload<User>
) => {
  switch (action.type) {
    case ActionType.GetUserSuccess:
      return action.payload;
  }

  return state;
};

export default userReducer;
