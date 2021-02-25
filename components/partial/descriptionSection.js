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
  let { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h3">
        {t("common:description-title")}
      </Typography>
      <Divider variant="fullWidth" />
      <Box paddingTop={2} />
      <Typography variant="body2" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue est,
        gravida tincidunt auctor a, porta non urna.
        <br />
        <br />
        Cras iaculis facilisis risus. Sed efficitur sem sed nibh molestie, nec
        varius augue sodales. Fusce eros est, egestas quis arcu ac, consequat
        pretium lorem. Vivamus a imperdiet est. Pellentesque pulvinar eros nisi,
        nec dignissim enim convallis vel. Aenean condimentum quam mauris, et
        auctor risus pellentesque at. Morbi pharetra vulputate commodo.
        <br />
        <br />
        Maecenas fringilla erat eu blandit accumsan. Nam ultrices iaculis
        elementum. Etiam imperdiet egestas dui, eget cursus sapien bibendum nec.
        Nunc et
      </Typography>
    </div>
  );
};

export default DescriptionSection;
