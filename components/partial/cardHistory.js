import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
} from "@material-ui/core";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import ResultCard from "../shared/result-card";

const CardHistory = (props) => {
  const { data } = props;
  let { t } = useTranslation("common");

  const { reg_date, delivery_place, box, packs } = data;
  return (
    <Card>
      <CardHeader subheader={t("info-text")} title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <ResultCard title={t("reg-date")} value={reg_date} />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <ResultCard title={t("delivery-place")} value={delivery_place} />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <ResultCard title={t("box")} value={box} />
          </Grid>
          <Grid item lg={6} sm={6} xl={6} xs={12}>
            <ResultCard title={t("packs")} value={packs} />
          </Grid>
        </Grid>
      </CardContent>
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
