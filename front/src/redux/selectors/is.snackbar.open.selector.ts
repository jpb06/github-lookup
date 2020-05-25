import { RootState } from "../store/root.state";

const isSnackbarOpen = (state: RootState) => state.snackbar.isOpen;

export default isSnackbarOpen;
