import {
  Box,
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Logo from "components/logo";
import Copyright from "components/shared/copyright";
import ReactHookFormSelect from "components/shared/react-hook-form-select";
import * as moment from "moment";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
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
  const router = useRouter();
  let { t } = useTranslation("common");

  const { register, handleSubmit, reset, control } = useForm();

  const onSubmit = async ({ day, last_name, first_name, year, month }) => {
    const dateOfBirth =
      day && month && year
        ? `${day < 10 ? `0${day}` : `${day}`}-${month}-${year}`
        : null;

    router.replace({
      pathname: "/card-result/list",
      query: {
        data: JSON.stringify({
          last_name: last_name,
          first_name: first_name,
          dob: dateOfBirth,
        }),
      },
    });
    // reset();
  };

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
        />
        <Typography color="textSecondary" variant="body2">
          {`${t("dob")}`}
        </Typography>
        <Grid container spacing={1}>
          <Grid item md={3} xs={3}>
            <TextField
              inputRef={register}
              variant="outlined"
              margin="normal"
              type="number"
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
        </Grid>

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

      <Typography variant="caption" align="center" color="error">
        <Box>{t("enfo")}</Box>
      </Typography>

      <Box mt={2}>
        <Copyright />
      </Box>
    </div>
  );
}

export default CitizenSearch;
