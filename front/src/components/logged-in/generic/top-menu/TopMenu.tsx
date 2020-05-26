import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, Avatar } from "@material-ui/core";
import styles from "./TopMenu.styles";
import LeftMenu from "../left-menu/LeftMenu";
import Logo from "../../../generic/logo/Logo";
import { User } from "../../../../types/app/user.type";
import { useHistory } from "react-router-dom";

interface TopbarProps {
  user: User;
}

const Topbar: React.FC<TopbarProps> = ({ user }) => {
  const classes = styles();
  const history = useHistory();

  const [isSiderOpen, setIsSiderOpen] = React.useState(false);

  const handleGoToProfile = () => history.push("/profile");

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
          <Avatar src={user.avatar_url} onClick={handleGoToProfile} />
        </Toolbar>
      </AppBar>

      <LeftMenu isOpen={isSiderOpen} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default Topbar;
