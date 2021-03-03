import { Box, Button, Container, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Copyright from "../shared/copyright";

const useStyles = makeStyles((theme) => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
    height: "70vh",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },

  footer: {
    padding: theme.spacing(6),
  },
}));

const NoResultPage = ({ loading }) => {
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
            {t("record-not-found")}
          </Typography>

          <div className={classes.heroButtons}>
            <Box
              display="flex"
              justifyContent="center"
              m={1}
              p={1}
              bgcolor="background.transparent"
            >
              <Button variant="outlined" color="primary">
                <Link href="/">
                  <a> {t("btn-home")}</a>
                </Link>
              </Button>
            </Box>
          </div>

          <Divider />

          <Box m={1} p={1} />
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            paragraph
          >
            {t("contact")}
          </Typography>
        </Container>
      </div>
      <footer className={classes.footer}>
        <Copyright />
      </footer>
    </>
  );
};

export default NoResultPage;
