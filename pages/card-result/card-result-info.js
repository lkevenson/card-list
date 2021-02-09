import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "../../components/page";
import CardHistory from "../views/cardHistory";
import CitizenData from "../views/citizenInfo";
//   import Page from 'src/components/Page';
//   import Profile from './Profile';
//   import ProfileDetails from './ProfileDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const Account = () => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Citizen Details">
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid item lg={5} md={6} xs={12}>
            {/* <Profile /> */}
            <CitizenData />
          </Grid>
          <Grid item lg={7} md={6} xs={12}>
            {/* <ProfileDetails /> */}
            <CardHistory />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Account;
