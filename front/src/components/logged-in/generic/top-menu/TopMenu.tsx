import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Avatar } from "@material-ui/core";
import styles from "./TopMenu.styles";
import LeftMenu from "../left-menu/LeftMenu";
import Logo from "../../../generic/logo/Logo";

const Topbar = () => {
  const classes = styles();

  const [isSiderOpen, setIsSiderOpen] = React.useState(false);

  const toggleDrawer = (isOpen: boolean) => (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | any
  ) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsSiderOpen(isOpen);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          <Avatar />
        </Toolbar>
      </AppBar>

      <LeftMenu isOpen={isSiderOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Topbar;
