import { Box, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyleCircular = makeStyles((theme) => ({
  root: {
    position: "relative",
    // backgroundColor: "#443345",
    // margin: "auto",
  },
  marginAutoItem: {
    margin: "auto",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "absolute",
    left: 0,
  },
  circle: {
    strokeLinecap: "round",
  },
}));

function CircleProgress(props) {
  const classes = useStyleCircular();

  return (
    <div className={classes.root}>
      <CircularProgress
        variant="determinate"
        className={classes.bottom}
        size={80}
        thickness={8}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        className={classes.top}
        classes={{
          circle: classes.circle,
        }}
        size={80}
        thickness={8}
        {...props}
      />
    </div>
  );
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgress() {
  const classes = useStyles();

  return (
    <Box
      display="flex"
      alignItems="center"
      // bgcolor="lightgreen"
      justifyContent="center"
      // width={500}
      // height={80}
    >
      <CircleProgress />
    </Box>
  );
}

//  <Box
//         display="flex"
//         width={500} height={80}
//         bgcolor="lightgreen"
//         alignItems="center"
//         justifyContent="center"
//       >
//         2. Box (alignItems and justifyContent)
//       </Box>
