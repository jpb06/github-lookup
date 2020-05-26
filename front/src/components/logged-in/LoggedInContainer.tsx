import React, { useEffect } from "react";
import TopMenu from "./generic/top-menu/TopMenu";
import styles from "./LoggedInContainer.styles";
import Config from "../../logic/config";
import { useHistory } from "react-router-dom";
import LookupApi from "../../logic/api/setup/lookup.api";
import { useReduxDispatch, useReduxSelector } from "../../hooks/redux.hooks";
import GloballyBusy from "../generic/globally-busy/GloballyBusy";
import { apiConfigured, getUserSaga } from "../../redux/actions";

interface LoggedInContainerProps {
  Component: React.ElementType;
}

const LoggedInContainer: React.FC<LoggedInContainerProps> = ({
  Component,
  ...rest
}) => {
  const classes = styles();
  const history = useHistory();
  const dispatch = useReduxDispatch();
  const user = useReduxSelector((state) => state.user);
  const isReady = useReduxSelector((state) => state.isApiConfigured);

  useEffect(() => {
    if (Config.token.length === 0) {
      history.push("/");
    } else {
      LookupApi.setup(history);
      dispatch(apiConfigured(true));
      dispatch(getUserSaga());
    }
  }, [history, dispatch]);

  if (!isReady || !user) return <GloballyBusy text="Loading ... " />;

  return (
    <>
      <TopMenu user={user} />
      <div className={classes.content}>
        <Component {...rest} />
      </div>
    </>
  );
};

export default LoggedInContainer;
