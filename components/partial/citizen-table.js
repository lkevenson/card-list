import {
  Box,
  Card,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const CitizenResults = ({ className, citizens, ...rest }) => {
  const classes = useStyles();
  const [selectedCitizenIds, setSelectedCitizenIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedCitizenIds;

    if (event.target.checked) {
      newSelectedCitizenIds = citizens.map((citizen) => citizen.id);
    } else {
      newSelectedCitizenIds = [];
    }

    setSelectedCitizenIds(newSelectedCitizenIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell>Prenom</TableCell>
                <TableCell>Surnom</TableCell>
                <TableCell>Date de Naissance</TableCell>
                <TableCell>Lieu de Naissance</TableCell>
                <TableCell>Centre d'inscription</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {citizens.slice(0, limit).map((citizen) => (
                <TableRow hover key={citizen.id}>
                  <TableCell>
                    <Typography color="textPrimary" variant="body1">
                      {citizen.last_name}
                    </Typography>
                  </TableCell>
                  <TableCell>{citizen.first_name}</TableCell>
                  <TableCell>{citizen.middle_name}</TableCell>
                  <TableCell>{citizen.dob}</TableCell>
                  <TableCell>{citizen.pob}</TableCell>
                  <TableCell>{citizen.center}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={citizens.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CitizenResults.propTypes = {
  className: PropTypes.string,
  citizens: PropTypes.array.isRequired,
};

export default CitizenResults;
