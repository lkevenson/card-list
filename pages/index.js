import { Container, Grid, Hidden, Paper } from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import Page from "../components/page";
import CitizenSearch from "../components/partial/citizenSearch";
import DescriptionSection from "../components/partial/descriptionSection";
import useStyles from "./index.style";

const Home = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Page className={classes.page} title={t("home")}>
      <Container maxWidth="md">
        <Grid container component="main" className={classes.container}>
          <Hidden smDown>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              component={Paper}
              elevation={0}
              square
              style={{
                backgroundColor: "#0A74AD",
                color: "#ffffff",
              }}
            >
              <DescriptionSection />
            </Grid>
          </Hidden>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={0}
            square
          >
            <CitizenSearch />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Home;
