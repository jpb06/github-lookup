import { makeStyles, Theme } from "@material-ui/core";

const styles = makeStyles((theme: Theme) => ({
  icon: {
    width: 100,
    height: 100,
    marginTop: theme.spacing(15),
    color: theme.palette.primary.main,
  },
}));

export default styles;
