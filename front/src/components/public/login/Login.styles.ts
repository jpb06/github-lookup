import { makeStyles, fade } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: 'url("/img/earth.jpg")',
    backgroundSize: "cover",
  },
  card: {
    width: "100%",
    maxWidth: 310,
    paddingBottom: theme.spacing(2),
    backgroundColor: fade(theme.palette.background.default, 0.88),
  },
  media: {
    height: 220,
  },
  actions: {
    paddingTop: 0,
    justifyContent: "center",
  },
  logo: {
    color: "white",
    fontSize: "x-large",
    alignSelf: "center",
  },
  brandIcon: {
    marginRight: 5,
  },
  loginLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
  loginIcon: {
    fontSize: 90,
  },
}));

export default useStyles;
