import Page from "@/components/page";
import CitizenResults from "@/components/partial/citizen-table";
import Topbar from "@/components/shared/topbar";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import citizens from "./data";

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
      <Container maxWidth="md">
        <Box mt={3}>
          <Topbar title="Card Result Table" />

          <Box mt={3}>
            <CitizenResults citizens={citizens} />
          </Box>
        </Box>
      </Container>
    </Page>
  );
};

export default CardResultList;
