import {
  Box,
  Button,
  Grid,
  IconButton,
  MenuItem,
  TextField,
} from "@material-ui/core";
import CalendarIcon from "@material-ui/icons/CalendarToday";
import * as moment from "moment";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React, { forwardRef } from "react";
import { useForm } from "react-hook-form";
import Logo from "../logo";
import Copyright from "../shared/copyright";
import ReactHookFormSelect from "../shared/react-hook-form-select";
import useStyles from "./citizenSearch.style";

const months = [
  { key: "01", value: "January" },
  { key: "02", value: "February" },
  { key: "03", value: "March" },
  { key: "04", value: "April" },
  { key: "05", value: "May" },
  { key: "06", value: "June" },
  { key: "07", value: "July" },
  { key: "08", value: "August" },
  { key: "09", value: "September" },
  { key: "10", value: "October" },
  { key: "11", value: "November" },
  { key: "12", value: "December" },
];

function CitizenSearch() {
  const classes = useStyles();
  // const [startDate, setStartDate] = useState(moment().subtract(18, "years")._d);
  // const [startDate, setStartDate] = useState(new Date());
  const router = useRouter();
  let { t } = useTranslation("common");

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async ({ day, last_name, first_name, year, month }) => {
    reset();

    const dateOfBirth =
      day && month && year
        ? `${day < 10 ? `0${day}` : `${day}`}-${month}-${year}`
        : null;

    router.push({
      pathname: "/card-result/card-result-list",
      query: {
        data: JSON.stringify({
          last_name: last_name,
          first_name: first_name,
          dob: dateOfBirth,
        }),
      },
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
              label={`${t("dob")}`}
              defaultValue={value}
              fullWidth
              required
              variant="filled"
              onClick={onClick}
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
          label={`${t("last-name")}`}
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
          label={`${t("first-name")}`}
          name="first_name"
          autoComplete="first-name"
          // autoFocus
        />

        <Grid container spacing={1}>
          <Grid item md={3} xs={3}>
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              type="number"
              // required
              fullWidth
              id="day"
              label={`${t("calendar.day")}`}
              name="day"
              InputProps={{ inputProps: { min: 1, max: 31 } }}
            />
          </Grid>
          <Grid item md={5} xs={5}>
            <ReactHookFormSelect
              id="month"
              name="month"
              className={classes.textField}
              label={`${t("calendar.month")}`}
              control={control}
              variant="outlined"
              margin="normal"
              defaultValue=""
              // required
              fullWidth
            >
              {months.map(({ key }) => {
                return (
                  <MenuItem key={key} value={key}>
                    {t(`calendar.months.${key}`)}
                  </MenuItem>
                );
              })}
            </ReactHookFormSelect>
          </Grid>
          <Grid item md={4} xs={4}>
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              // required
              fullWidth
              type="number"
              id="year"
              label={`${t("calendar.year")}`}
              name="year"
              InputProps={{
                inputProps: {
                  min: moment().subtract(100, "years").year(),
                  max: moment().subtract(18, "years").year(),
                },
              }}
            />
          </Grid>
          {/* minDate={moment().subtract(100, "years")._d}
          maxDate={moment().subtract(18, "years")._d} */}
        </Grid>
        {/* <DatePicker
          // dateFormat="yyyy-MM-dd"
          dateFormat="dd-MM-yyyy"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          peekNextMonth
          minDate={moment().subtract(100, "years")._d}
          maxDate={moment().subtract(18, "years")._d}
          showDisabledMonthNavigation
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
          disabledKeyboardNavigation
          peekNextMonth={false}
          customInput={<InputDate />}
        /> */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          {t("btn-search")}
        </Button>
      </form>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default CitizenSearch;
