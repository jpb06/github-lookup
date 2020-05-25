import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import React from "react";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { SvgIconTypeMap } from "@material-ui/core";
import ForwardNavLink from "../../../generic/ForwardNavLink";

interface LeftMenuItemProps {
  to?: string;
  menuText: string;
  fullText: string;
  IconComponent: OverridableComponent<SvgIconTypeMap>;
  onClick?: () => void;
}

const LeftMenuItem: React.FC<LeftMenuItemProps> = ({
  to,
  menuText,
  fullText,
  IconComponent,
  onClick,
}) =>
  to ? (
    <ListItem
      button
      key={menuText}
      component={ForwardNavLink}
      to={to}
      activeClassName={"Mui-selected"}
    >
      <ListItemIcon>
        <IconComponent />
      </ListItemIcon>
      <ListItemText primary={fullText} />
    </ListItem>
  ) : (
    <ListItem key={menuText} button onClick={onClick}>
      <ListItemIcon>
        <IconComponent />
      </ListItemIcon>
      <ListItemText primary={fullText} />
    </ListItem>
  );

export default LeftMenuItem;
