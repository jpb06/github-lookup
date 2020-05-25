import { ApplicationState } from "../../types/redux/application.state";
import { SnackbarData, SnackbarType } from "../../types/app/snackbar.data.type";
import { Session } from "../../types/app/session.type";

export interface RootState {
  readonly appState: ApplicationState;
  readonly snackbar: SnackbarData;
  readonly session: Session;
}

export const initialState: RootState = {
  appState: ApplicationState.Available,
  snackbar: {
    isOpen: false,
    type: SnackbarType.Error,
    text: "",
  },
  session: {},
};
