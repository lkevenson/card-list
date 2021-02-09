import { Avatar, Button, Box, Typography, TextField } from "@material-ui/core";
import Copyright from "../../components/copyright";

import useStyles from "./citizenSearch.style";
import Logo from "../../components/logo";

const CitizenSearch = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <Logo width={160} height={120} />
      {/* <Typography component="h1" variant="h5">
        Sign in
      </Typography> */}
      <form className={classes.form} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Lastname"
          name="lastname"
          autoComplete="last-name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="Firstname"
          name="firstname"
          autoComplete="first-name"
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="DOB"
          id="password"
          autoComplete="current-password"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Search
        </Button>

        <Box mt={5}>
          <Copyright />
        </Box>
      </form>
    </div>
  );
};

export default CitizenSearch;
