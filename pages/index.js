import Page from "@/components/page";
import { Container, Grid, Hidden, Paper } from "@material-ui/core";
import useStyles from "./index.style";
import CitizenSearch from "./views/citizenSearch";
import DescriptionSection from "./views/descriptionSection";

export default function Home() {
  const classes = useStyles();

  const decription = "Text";

  return (
    <Page className={classes.page} title="Home">
      <Container maxWidth="md">
        <Grid container component="main" className={classes.container}>
          <Hidden mdDown>
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
            elevation={6}
            // square
          >
            <CitizenSearch />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
