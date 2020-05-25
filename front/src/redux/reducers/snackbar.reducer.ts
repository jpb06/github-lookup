import { initialState } from "../store/root.state";
import { ActionWithPayload } from "../../types/redux/action.with.payload";
import { ActionTypes } from "../../types/redux/action.types";
import { SnackbarData } from "../../types/app/snackbar.data.type";

const snackbarReducer = (
  state: SnackbarData = initialState.snackbar,
  action: ActionWithPayload<SnackbarData>
) => {
  switch (action.type) {
    case ActionTypes.Snackbar:
      return action.payload;
    case ActionTypes.ClearSnackbar:
      return { ...state, isOpen: false };
  }

  return state;
};

export default snackbarReducer;
