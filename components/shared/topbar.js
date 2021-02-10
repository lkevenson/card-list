import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1),
  },
  exportButton: {
    marginRight: theme.spacing(1),
  },
}));

const Topbar = ({ className, title, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
              <Typography variant="h3" component="h1">
                {title}
              </Typography>
              {/* <Typography variant="body1" component="p">
                10-Avril-1989
              </Typography> */}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
};

export default Topbar;
