import { Typography, Box } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4, 2),
    display: "flex",
    flexDirection: "column",
  },
}));

const DescriptionSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1" component="h3">
        Description
      </Typography>
      {/* <Divider variant="middle" /> */}
      <Box paddingTop={2} />
      <Typography variant="body2" component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed augue est,
        gravida tincidunt auctor a, porta non urna. Aliquam blandit porttitor
        elit eget convallis. Sed ac ante eget elit mattis dictum sed vel metus.
        Cras pretium consectetur nisl, sed molestie lacus. Aenean pretium cursus
        placerat. Duis neque nibh, elementum id dictum in, consequat vitae
        felis. Proin ut est semper dui posuere bibendum vel sed enim. Maecenas
        tempor felis metus, eget iaculis sem consequat vel. Aliquam congue
        mattis metus sed tincidunt. Cras et tempor dolor.
        <br />
        <br />
        Cras iaculis facilisis risus. Sed efficitur sem sed nibh molestie, nec
        varius augue sodales. Fusce eros est, egestas quis arcu ac, consequat
        pretium lorem. Vivamus a imperdiet est. Pellentesque pulvinar eros nisi,
        nec dignissim enim convallis vel. Aenean condimentum quam mauris, et
        auctor risus pellentesque at. Morbi pharetra vulputate commodo.
        Curabitur eu urna odio. Pellentesque in porta dolor. Cras at quam nec
        justo feugiat scelerisque sollicitudin eget augue. Morbi condimentum
        aliquet tortor non tincidunt. In vitae lorem magna. Vivamus consequat
        neque et nisl gravida, eget porttitor nisl congue.
        <br />
        <br />
        Maecenas fringilla erat eu blandit accumsan. Nam ultrices iaculis
        elementum. Etiam imperdiet egestas dui, eget cursus sapien bibendum nec.
        Nunc et lacus et arcu varius sodales et luctus augue. Vivamus ultrices
        lectus arcu, non mattis nisi ullamcorper et. Cras gravida sodales lacus
        iaculis iaculis. Donec at enim consectetur, sodales urna eu, maximus
        nisi.
      </Typography>
    </div>
  );
};

export default DescriptionSection;
