import React, { useEffect } from "react";
import Topbar from "./generic/top-menu/TopMenu";
import styles from "./LoggedInContainer.styles";
import Config from "../../logic/config";
import { useHistory } from "react-router-dom";

interface LoggedInContainerProps {
  Component: React.ElementType;
}

const LoggedInContainer: React.FC<LoggedInContainerProps> = ({
  Component,
  ...rest
}) => {
  const classes = styles();
  const history = useHistory();

  useEffect(() => {
    if (Config.token.length === 0) {
      history.push("/");
    }
  }, [history]);

  return (
    <>
      <Topbar />
      <div className={classes.content}>
        <Component {...rest} />
      </div>
    </>
  );
};

export default LoggedInContainer;
