import Page from "@/components/page";
import CardHistory from "@/components/partial/cardHistory";
import CitizenData from "@/components/partial/citizenProfile";
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const data = {
  reg_date: "02/Feb/2029",
  reg_place: "Delmas",
  box: "8",
  packs: "9",
};

const citizen = {
  last_name: "Paul",
  first_name: "Benini",
  middle_name: "Javier de Martha",
  dob: "23 Octobre 1992",
  pob: "Port-au-Prince",
  center: "Siege",
};

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Citizen Details">
      <Container maxWidth="md">
        <Grid container spacing={1}>
          <Grid item lg={5} md={6} xs={12}>
            <CitizenData citizen={citizen} />
          </Grid>
          <Grid item lg={7} md={6} xs={12}>
            <CardHistory data={data} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
