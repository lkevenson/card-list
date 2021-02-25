import { useLazyQuery } from "@apollo/client";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import useTranslation from "next-translate/useTranslation";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SEARCH_CITIZEN_QUERY } from "../../components/graphql/citizen.operation";
import Page from "../../components/page";
import CitizenResults from "../../components/partial/citizen-table";
import { fetchCitizens } from "../../redux/actions/citizen.action";

const useStyles = makeStyles((theme) => ({
  page: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}));
const CardResultList = () => {
  const dispatch = useDispatch();
  const [citizens, setCitizens] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const classes = useStyles();
  const router = useRouter();
  let { t } = useTranslation("common");

  const [execQuery, { loading: myLoading, error }] = useLazyQuery(
    SEARCH_CITIZEN_QUERY,
    {
      onCompleted: (data) => {
        const { searchCitizen } = data;
        const enfo = {
          data: searchCitizen.data,
          count: searchCitizen.count,
        };
        dispatch(fetchCitizens(enfo));
        setCitizens(searchCitizen.data);
        setCount(searchCitizen.count);
      },
    }
  );

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const result = (ctz, load, err) => {
    console.log(err);
    if (err) {
      return (
        <>
          {/* <Typography variant="h2" component="h1" gutterBottom>
            500 | Internal Server Error
          </Typography>

          <Button variant="outlined" color="secondary">
            <Link href="/">
              <a>{t("btn-home")}</a>
            </Link>
          </Button> 
          */}
          <ErrorPage statusCode={500} title="Internal Server Error" />
        </>
      );
    } else {
      if (Array.isArray(ctz) && ctz.length) {
        return (
          <CitizenResults
            citizens={ctz}
            handleLimitChange={handleLimitChange}
            handlePageChange={handlePageChange}
            limit={limit}
            page={page}
            count={count}
            loading={load}
          />
        );
      } else {
        return (
          <Typography variant="h2" component="p">
            {t("record-not-found")}
          </Typography>
        );
      }
    }
  };

  const { data } = router.query;

  useEffect(() => {
    !data &&
      router.push({
        pathname: "/",
      });

    data &&
      (() => {
        execQuery({
          variables: {
            data: data && JSON.parse(data),
            skip: page,
            take: limit,
          },
        });
      })();
  }, [data, limit, page]);

  return (
    <Page className={classes.page} title="Results" title={t("results")}>
      <Container maxWidth="md">
        <Box mt={3}>{() => result(citizens, myLoading, error)}</Box>
      </Container>
    </Page>
  );
};

export default CardResultList;
