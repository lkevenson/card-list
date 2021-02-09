import { Typography, Container, Box } from "@material-ui/core";

import Page from "../../components/page";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));
const CardResultList = () => {
  const classes = useStyles();
  return (
    <Page className={classes.page} title="Results">
      <Container maxWidth={false}>
        {/* <Toolbar /> */}
        <Box mt={3}>
          {/* <Results customers={customers} /> */}

          <Typography> Card Result Table</Typography>
        </Box>
      </Container>
    </Page>
  );
};

export default CardResultList;
