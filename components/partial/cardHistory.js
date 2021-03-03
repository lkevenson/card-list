import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  Typography,
} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import ResultCard from "../shared/result-card";

const CardHistory = (props) => {
  const { data } = props;
  let { t } = useTranslation("common");

  const { delivery_place, box, packs, status } = data;

  const view =
    status === "Issued" ? (
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        {t("delivered-card")}
      </Typography>
    ) : (
      <>
        <Grid container spacing={3}>
          {/* <Grid item sm={6} xl={6} xs={12}>
            <ResultCard title={t("reg-date")} value={reg_date} />
          </Grid> */}
          <Grid item sm={12} xl={12} xs={12}>
            <ResultCard title={t("delivery-place")} value={delivery_place} />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <ResultCard title={t("box")} value={box} />
          </Grid>
          <Grid item sm={6} xl={6} xs={12}>
            <ResultCard title={t("packs")} value={packs} />
          </Grid>
        </Grid>
      </>
    );
  return (
    <Card>
      <CardHeader subheader={t("info-text")} title="Profile" />
      <Divider />
      <CardContent>{view}</CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button color="primary" variant="outlined">
          <Link href="/">
            <a> {t("btn-home")}</a>
          </Link>
        </Button>
      </Box>
    </Card>
  );
};

export default CardHistory;
