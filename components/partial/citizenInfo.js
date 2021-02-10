import { Typography, Box, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
  },
}));

const CitizenData = () => {
  const classes = useStyles();
  return <Card className={classes.root}>Citizen Data</Card>;
};

export default CitizenData;
