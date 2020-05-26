import { ApplicationState } from "../../types/redux/application.state";
import { SnackbarData, SnackbarType } from "../../types/app/snackbar.data.type";
import { User } from "../../types/app/user.type";
import { CodeSearchResult } from "../../types/api/code.search.result";

export interface RootState {
  readonly appState: ApplicationState;
  readonly snackbar: SnackbarData;
  readonly user: User | null;
  readonly isApiConfigured: boolean;
  readonly codeSearchResults: CodeSearchResult | null;
}

export const initialState: RootState = {
  appState: ApplicationState.Available,
  snackbar: {
    isOpen: false,
    type: SnackbarType.Error,
    text: "",
  },
  user: null,
  isApiConfigured: false,
  codeSearchResults: null,
};
