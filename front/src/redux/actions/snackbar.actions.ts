import { SnackbarType } from "../../types/app/snackbar.data.type";
import { ActionType } from "../../types/redux/action.types";

export const showSnackbarSaga = (type: SnackbarType, text: string) => ({
  type: ActionType.SnackbarSaga,
  payload: {
    isOpen: true,
    type,
    text,
  },
});

export const clearSnackbar = () => ({
  type: ActionType.ClearSnackbar,
});
