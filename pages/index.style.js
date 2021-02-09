import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  // container: {
  //   height: "100vh",
  // },
}));

export default useStyles;
