import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    padding: theme.spacing(1),
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));

const ResultCard = ({ title, value, className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item xl={12}>
            <Typography color="textSecondary" gutterBottom variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item xl={12}>
            {value && (
              <Typography className={classes.orange} variant="rounded">
                {value}
              </Typography>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

ResultCard.propTypes = {
  className: PropTypes.string,
};

export default ResultCard;
