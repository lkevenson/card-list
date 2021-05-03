import { Box, Divider, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTranslation from "next-translate/useTranslation";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
  },
}));

const DescriptionSection = () => {
  const classes = useStyles();
  let { t } = useTranslation("common");
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h3">
        {t("description-title")}
      </Typography>
      <Divider variant="fullWidth" />
      <Box paddingTop={2} />
      <Typography
        variant="body2"
        component="p"
        gutterBottom
        paragraph
        align="justify"
        variantMapping="p"
        display="block"
      >
        {t("description-content")}
      </Typography>
    </div>
  );
};

export default DescriptionSection;
