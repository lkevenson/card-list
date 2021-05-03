import { Container, Grid, makeStyles } from "@material-ui/core";
import { MainLayout } from "components/layout";
import Page from "components/page";
import CardHistory from "components/partial/cardHistory";
import CitizenData from "components/partial/citizenProfile";
import _ from "lodash";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));

const CardInfo = () => {
  const { t } = useTranslation("common");

  const classes = useStyles();
  const [citizen, setCitizen] = useState({});
  const [data, setData] = useState({});
  const router = useRouter();
  const { citizens } = useSelector((state) => state.inventory);
  const { info } = router.query;

  const validateData = (tmp, id) => {
    const person = _.find(tmp, { id: id });
    const {
      last_name,
      first_name,
      middle_name,
      dob,
      pob,
      delivery_place,
      box,
      status,
      packs,
    } = person;

    setCitizen({
      last_name,
      first_name,
      middle_name,
      dob,
      pob,
    });

    setData({
      delivery_place,
      box,
      status,
      packs,
    });
  };

  useEffect(() => {
    if (Array.isArray(citizens) && citizens.length) {
      validateData(citizens, info);
    } else {
      router.replace("/");
    }
  }, [citizens, info]);

  return (
    <MainLayout>
      <Page className={classes.root} title={t("citizen-details")}>
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
    </MainLayout>
  );
};

export default CardInfo;
