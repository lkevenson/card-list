import {
  Box,
  Card,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import * as moment from "moment";
import Router from "next/router";
import PropTypes from "prop-types";
import React from "react";
const useStyles = makeStyles(() => ({
  root: {},
}));

const Profile = ({ className, citizen, ...rest }) => {
  const classes = useStyles();
  const { last_name, first_name, middle_name, dob, pob, center } = citizen;
  const local = Router.locale === "ht" ? "fr" : Router.locale;
  const dateFormated = moment(dob, "DD-MM-YYYY").format("YYYY-MM-DD");
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Box display="flex" flexDirection="column">
          <Typography color="textPrimary" variant="h2">
            {`${last_name}, ${first_name}`}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="h3">
            {middle_name ? middle_name : ""}
          </Typography>
          <Typography color="textSecondary" gutterBottom variant="subtitle1">
            {moment(dateFormated).locale(local).format("LL").toUpperCase()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Profile.propTypes = {
  className: PropTypes.string,
};

export default Profile;
