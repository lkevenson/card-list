import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const months = [
  { key: 0, value: "January" },
  { key: 1, value: "February" },
  { key: 2, value: "March" },
  { key: 3, value: "April" },
  { key: 4, value: "May" },
  { key: 5, value: "June" },
  { key: 6, value: "July" },
  { key: 7, value: "August" },
  { key: 8, value: "September" },
  { key: 9, value: "October" },
  { key: 10, value: "November" },
  { key: 11, value: "December" },
];

const DateSelect = () => {
  const classes = useStyles();

  let { t } = useTranslation("common");
  const [age, setDay] = useState("");
  const handleChange = (event) => {
    setDay(event.target.value);
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={3}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            {t("calendar.day")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            {months.map(({ key }) => {
              return (
                <MenuItem key={key} value={key}>
                  {t(`calendar.months.${key}`)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={3}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            {t("calendar.month")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            {months.map(({ key }) => {
              return (
                <MenuItem key={key} value={key}>
                  {t(`calendar.months.${key}`)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={3}>
        <FormControl variant="filled" className={classes.formControl}>
          <InputLabel id="demo-simple-select-filled-label">
            {t("calendar.year")}
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={age}
            onChange={handleChange}
          >
            {months.map(({ key }) => {
              return (
                <MenuItem key={key} value={key}>
                  {t(`calendar.months.${key}`)}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default DateSelect;
