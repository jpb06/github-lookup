import { ActionTypes } from "../../types/redux/action.types";
import { SnackbarType } from "../../types/app/snackbar.data.type";

export const showSnackbarSaga = (type: SnackbarType, text: string) => ({
  type: ActionTypes.SnackbarSaga,
  payload: {
    isOpen: true,
    type,
    text,
  },
});

export const clearSnackbar = () => ({
  type: ActionTypes.ClearSnackbar,
});
