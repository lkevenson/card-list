import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
} from "@material-ui/core";

const CardHistory = ({ data }) => {
  const { reg_date, reg_place, box, packs } = data;

  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <Divider />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              disabled
              fullWidth
              id="reg_date"
              label="Registration Date"
              defaultValue={reg_date}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              disabled
              fullWidth
              id="reg_place"
              label="Registration Place"
              defaultValue={reg_place}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              disabled
              fullWidth
              id="box"
              label="Box"
              defaultValue={box}
            />
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <TextField
              disabled
              fullWidth
              id="pack"
              label="Package"
              defaultValue={packs}
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box display="flex" justifyContent="flex-end" p={2}>
        <Button color="primary" variant="contained">
          Home
        </Button>
      </Box>
    </Card>
  );
};

export default CardHistory;
