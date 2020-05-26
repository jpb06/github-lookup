import { RootState } from "../store/root.state";

const isUserLoaded = (state: RootState) => state.user !== null;

export default isUserLoaded;
