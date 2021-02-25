import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  button: {
    margin: theme.spacing(1),
  },
  textFieldDate: {
    // marginLeft: theme.spacing(1),
    // marginRight: theme.spacing(1),
    // width: 200,

    font: "inherit",
    width: "100%",
    // border: 0,
    height: "1.1876em",
    margin: 0,
    // display: "block",
    // padding: "6px 0 7px",
    padding: theme.spacing(1),

    minWidth: 0,
    background: "none",
    boxSizing: "content-box",
    // animation-name: 'mui-auto-fill-cancel',
    // letter-spacing: 'inherit',
    // animation-duration: '10ms',
    // -webkit-tap-highlight-color: 'transparent',
  },
}));

export default useStyles;
