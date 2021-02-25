import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
// import * as moment from "moment";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import CustomizedProgress from "../../components/shared/circular-progress";
import { addCitizen } from "../../redux/actions/citizen.action";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2),
  },
  container: {
    maxHeight: 420,
  },
}));

const CitizenResults = ({
  className,
  page,
  limit,
  handleLimitChange,
  handlePageChange,
  loading,
  ...rest
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { citizens, count } = useSelector((state) => state.inventory);

  let { t } = useTranslation();
  let router = useRouter();

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <Box>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            {loading ? (
              <CustomizedProgress />
            ) : (
              <>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>{t("common:action")}</StyledTableCell>
                    <StyledTableCell>{t("common:last-name")}</StyledTableCell>
                    <StyledTableCell>{t("common:first-name")}</StyledTableCell>
                    <StyledTableCell>{t("common:middle-name")}</StyledTableCell>
                    <StyledTableCell>{t("common:dob")}</StyledTableCell>
                    <StyledTableCell>{t("common:pob")}</StyledTableCell>
                    <StyledTableCell>{t("common:reg-place")}</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {citizens &&
                    citizens.slice(0, limit).map((citizen) => (
                      <StyledTableRow hover key={citizen.id}>
                        <StyledTableCell>
                          <Button
                            variant="outlined"
                            color="secondary"
                            onClick={() => {
                              dispatch(addCitizen(citizen));
                              router.push(
                                `/card-result/card-result-info?info=${citizen.id}`,
                                null,
                                {
                                  shallow: true,
                                }
                              );
                            }}
                          >
                            {t("common:btn-info")}
                          </Button>
                        </StyledTableCell>
                        <StyledTableCell>
                          <Typography color="textPrimary" variant="body1">
                            {citizen.last_name}
                          </Typography>
                        </StyledTableCell>
                        <StyledTableCell>{citizen.first_name}</StyledTableCell>
                        <StyledTableCell>{citizen.middle_name}</StyledTableCell>
                        <StyledTableCell>
                          {citizen.dob}
                          {/* {moment(citizen.dob).format("DD/MM/YYYY")} */}
                        </StyledTableCell>
                        <StyledTableCell>{citizen.pob}</StyledTableCell>
                        <StyledTableCell>{citizen.reg_place}</StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
      </Box>
      <TablePagination
        component="div"
        count={count}
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
