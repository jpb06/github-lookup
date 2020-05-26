import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { SnackbarData } from "../../types/app/snackbar.data.type";
import { ActionType } from "../../types/redux/action.types";

const snackbarReducer = (
  state: SnackbarData = initialState.snackbar,
  action: ActionWithPayload<SnackbarData>
) => {
  switch (action.type) {
    case ActionType.Snackbar:
      return action.payload;
    case ActionType.ClearSnackbar:
      return { ...state, isOpen: false };
  }

  return state;
};

export default snackbarReducer;
