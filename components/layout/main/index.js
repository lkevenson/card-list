import AppBar from "components/shared/appbar/appbar";
import useStyles from "./main.style";

const MyMainLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar title="Office Nationale d'Identification" />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MyMainLayout;
