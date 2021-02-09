import { Typography, Box, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
  },
}));

const CardHistory = () => {
  const classes = useStyles();
  return <Card className={classes.root}>Card Data History</Card>;
};

export default CardHistory;
