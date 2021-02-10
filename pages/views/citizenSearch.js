import Logo from "@/components/logo";
import Copyright from "@/components/shared/copyright";
import { Box, Button, Grid, IconButton, TextField } from "@material-ui/core";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import useStyles from "./citizenSearch.style";

const CitizenSearch = () => {
  const classes = useStyles();

  const [startDate, setStartDate] = useState(new Date());
  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    reset();
  };

  const InputDate = forwardRef((props, ref) => {
    const { value, onClick } = props;
    return (
      <>
        <Grid container spacing={1}>
          <Grid item md={10} sm={10}>
            <TextField
              ref={ref}
              inputRef={register}
              id="dob"
              name="dob"
              label="Date of Birth"
              defaultValue={value}
              fullWidth
              required
              variant="filled"
            />
          </Grid>
          <Grid item md={2} sm={2}>
            <IconButton
              aria-label="calendar"
              color="primary"
              className={classes.button}
              onClick={onClick}
            >
              <CalendarIcon />
            </IconButton>
          </Grid>
        </Grid>
      </>
    );
  });

  return (
    <div className={classes.paper}>
      <Logo width={100} height={100} />
      {/* <Typography component="h1" variant="h5">
        Sign in
      </Typography> */}
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register}
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
          inputRef={register}
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
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          // withPortal
          disabledKeyboardNavigation
          peekNextMonth={false}
          customInput={<InputDate />}
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
      </form>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default CitizenSearch;
