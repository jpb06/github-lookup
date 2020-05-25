import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import styles from "./Login.styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import GloballyBusy from "../../generic/globally-busy/GloballyBusy";
import GlobalError from "../../generic/global-error/GlobalError";
import SentimentDissatisfiedIcon from "@material-ui/icons/SentimentDissatisfied";
import * as api from "../../../logic/api";

const Login = () => {
  const classes = styles();

  const [authorizeUrl, setAuthorizeUrl] = useState("");
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    const getUrl = async () => {
      const result = await api.getAuthorizeUrl();
      if (result.success) setAuthorizeUrl(result.data as string);
      else setIsErrored(true);
    };

    getUrl();
  }, []);

  if (isErrored)
    return (
      <GlobalError
        title="Oh no!"
        content="An error occured while initializing the application"
        Icon={SentimentDissatisfiedIcon}
      />
    );

  if (authorizeUrl.length === 0)
    return <GloballyBusy text="Initializing authentication process ..." />;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      className={classes.root}
    >
      <Card className={classes.card}>
        <CardMedia className={classes.media} image="/img/github-logo.png" />
        <CardContent>
          <Grid container justify="center" direction="row">
            <Grid item className={classes.logo}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <GitHubIcon className={classes.brandIcon} />
                Lookup
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions className={classes.actions}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <a href={authorizeUrl} className={classes.loginLink}>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid>
                  <AccountCircleIcon className={classes.loginIcon} />
                </Grid>
                Login
              </Grid>
            </a>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Login;
