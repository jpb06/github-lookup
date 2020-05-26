import React from "react";
import { useReduxSelector } from "../../../hooks/redux.hooks";
import { User } from "../../../types/app/user.type";
import {
  Grid,
  Typography,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@material-ui/core";
import styles from "./Profile.styles";
import CodeIcon from "@material-ui/icons/Code";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FaceIcon from "@material-ui/icons/Face";
import BuildIcon from "@material-ui/icons/Build";

const Profile = () => {
  const classes = styles();
  const user = useReduxSelector((state) => state.user) as User;

  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <Avatar src={user.avatar_url} className={classes.avatar} />
        <Typography variant="h5">
          Welcome{" "}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.links}
          >
            {user.login}
          </a>
        </Typography>
        <Typography color="primary">
          Github user since {new Date(user.created_at).toDateString()}
        </Typography>
        <Typography color="primary">
          Last active on {new Date(user.updated_at).toDateString()}
        </Typography>
      </Grid>
      <Divider className={classes.divider} />
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item xs={12} md={6} lg={3}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar className={classes.icons}>
                <CodeIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Repos" secondary={user.public_repos} />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar className={classes.icons}>
                <BuildIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Gists" secondary={user.public_gists} />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar className={classes.icons}>
                <FavoriteIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Followers" secondary={user.followers} />
          </ListItem>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <ListItem disableGutters>
            <ListItemAvatar>
              <Avatar className={classes.icons}>
                <FaceIcon color="primary" />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Following" secondary={user.following} />
          </ListItem>
        </Grid>
      </Grid>
    </>
  );
};

export default Profile;
