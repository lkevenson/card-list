import { Box, Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Copyright from "components/shared/copyright";
import useTranslation from "next-translate/useTranslation";
import { BeatLoader } from "react-spinners";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: "70vh",
  },

  footer: {
    padding: theme.spacing(6),
  },
}));

const SearchPage = ({ loading }) => {
  const classes = useStyles();
  let { t } = useTranslation("common");

  return (
    <>
      <div className={classes.heroContent}>
        <Container maxWidth="xl">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {t("loading")}
          </Typography>

          <Box
            display="flex"
            justifyContent="center"
            m={1}
            p={1}
            bgcolor="background.transparent"
          >
            <BeatLoader color={"#123abc"} loading={loading} />
          </Box>

          <Divider />
          <Box m={1} p={1} />
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            {t("waiting")}
          </Typography>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
};

export default SearchPage;
