import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Typography, Grid } from "@material-ui/core";
import styles from "./Logo.styles";

interface LogoProps {
  centered?: boolean;
  hasMarginBottom?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  centered = false,
  hasMarginBottom = false,
}) => {
  const classes = styles();

  return (
    <Grid
      container
      direction="row"
      justify={centered ? "center" : "flex-start"}
      alignItems={"flex-start"}
      className={hasMarginBottom ? classes.marginBottom : undefined}
    >
      <Grid item>
        <GitHubIcon />
      </Grid>
      <Grid item>
        <Typography variant="h6" className={classes.title}>
          Lookup
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Logo;
