import React from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import LeftMenuItem from "./LeftMenuItem";
import styles from "./LeftMenu.styles";
import { useHistory } from "react-router-dom";
import Logo from "../../../generic/logo/Logo";
import { clearSession } from "../../../../logic/session.logic";

interface LeftMenuProps {
  isOpen: boolean;
  toggleDrawer: (
    open: boolean
  ) => (event: React.SyntheticEvent<{}, Event>) => void;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ isOpen, toggleDrawer }) => {
  const classes = styles();
  const history = useHistory();

  const handleLogout = () => {
    clearSession();
    history.push("/");
  };

  return (
    <SwipeableDrawer
      open={isOpen}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
    >
      <div
        className={clsx(classes.fullList, classes.sideMenu)}
        role="presentation"
      >
        <Logo centered hasMarginBottom />
        <List>
          <LeftMenuItem
            menuText="Home"
            fullText="Home"
            to="/home"
            IconComponent={HomeIcon}
          />
        </List>
        <Divider />
        <List>
          <LeftMenuItem
            menuText="Logout"
            fullText="Logout"
            IconComponent={ExitToAppIcon}
            onClick={handleLogout}
          />
        </List>
      </div>
    </SwipeableDrawer>
  );
};

export default LeftMenu;
