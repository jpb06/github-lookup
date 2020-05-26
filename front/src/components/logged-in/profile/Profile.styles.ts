import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  avatar: {
    width: 120,
    height: 120,
    marginBottom: theme.spacing(1),
  },
  icons: {
    backgroundColor: theme.palette.secondary.main,
  },
  links: {
    color: "white",
  },
  divider: {
    margin: theme.spacing(2),
  },
}));

export default styles;
