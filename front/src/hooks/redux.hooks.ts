import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../redux/store/root.state";

const useReduxDispatch = () => useDispatch();
const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useReduxDispatch, useReduxSelector };
