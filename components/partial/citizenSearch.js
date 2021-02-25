// import Logo from "@/components/logo";
import { Box, Button, Grid, IconButton, TextField } from "@material-ui/core";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import Logo from "../logo";
import Copyright from "../shared/copyright";
import useStyles from "./citizenSearch.style";

function CitizenSearch() {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  let { t } = useTranslation();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (input) => {
    reset();

    router.push({
      pathname: "/card-result/card-result-list",
      query: { data: JSON.stringify(input) },
    });
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
              label={`${t("common:dob")}`}
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

      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          inputRef={register}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="last_name"
          label={`${t("common:last-name")}`}
          name="last_name"
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
          label={`${t("common:first-name")}`}
          name="first_name"
          autoComplete="first-name"
          autoFocus
        />
        <DatePicker
          dateFormat="yyyy-MM-dd"
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
          {t("common:btn-search")}
        </Button>
      </form>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default CitizenSearch;
