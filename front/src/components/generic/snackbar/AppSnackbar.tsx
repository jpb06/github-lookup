import Snackbar, { SnackbarCloseReason } from "@material-ui/core/Snackbar";
import React from "react";
import { useReduxDispatch, useReduxSelector } from "../../../hooks/redux.hooks";
import * as Actions from "../../../redux/actions";
import DownTransition from "../transitions/DownTransition";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import WarningIcon from "@material-ui/icons/Warning";
import clsx from "clsx";
import styles from "./AppSnackbar.styles";
import { SnackbarType } from "../../../types/app/snackbar.data.type";

const typeToIcon = (type: SnackbarType) => {
  switch (type) {
    case SnackbarType.Success:
      return CheckCircleIcon;
    case SnackbarType.Warning:
      return WarningIcon;
    case SnackbarType.Error:
      return ErrorIcon;
    default:
      return InfoIcon;
  }
};
const typeToClassName = (type: SnackbarType, classes: any) =>
  classes[SnackbarType[type].toLowerCase()];

const AppSnackbar: React.FC = () => {
  const classes = styles();
  const dispatch = useReduxDispatch();
  const snackbar = useReduxSelector((state) => state.snackbar);

  const Icon = typeToIcon(snackbar.type);

  const closeSnackbar = () => dispatch(Actions.clearSnackbar());

  const handleClose = (
    event: React.SyntheticEvent<any, Event>,
    reason?: SnackbarCloseReason
  ) => {
    if (reason === "clickaway") {
      return;
    }
    closeSnackbar();
  };

  return (
    <Snackbar
      open={snackbar.isOpen}
      message={
        <div className={classes.content}>
          <Icon />
          <span className={classes.text}>{snackbar.text}</span>
        </div>
      }
      action={[
        <IconButton
          key="close"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>,
      ]}
      ContentProps={{
        classes: {
          root: clsx(typeToClassName(snackbar.type, classes)),
        },
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      autoHideDuration={5000}
      TransitionComponent={DownTransition}
      transitionDuration={500}
      onClose={handleClose}
    />
  );
};

export default AppSnackbar;
