import { useLazyQuery } from "@apollo/client";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { SEARCH_CITIZEN_QUERY } from "components/graphql/citizen.operation";
import NoResultPage from "components/info/no-result";
import SearchPage from "components/info/search";
import { MainLayout } from "components/layout";
import Page from "components/page";
import CitizenResults from "components/partial/citizenTable";
import useTranslation from "next-translate/useTranslation";
import ErrorPage from "next/error";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCitizens } from "redux/actions/citizen.action";

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

  const [execQuery, { loading, error }] = useLazyQuery(SEARCH_CITIZEN_QUERY, {
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
  });

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const { data } = router.query;

  useEffect(() => {
    !data &&
      router.replace({
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

  // let response = null;

  // if (loading) {
  //   response = <SearchPage loading={loading} />;
  // }

  // if (error) {
  //   response = <ErrorPage statusCode={500} title="Internal Server Error" />;
  // }

  // if (Array.isArray(citizens) && citizens.length) {
  //   response = (
  //     <CitizenResults
  //       citizens={citizens}
  //       handleLimitChange={handleLimitChange}
  //       handlePageChange={handlePageChange}
  //       limit={limit}
  //       page={page}
  //       count={count}
  //       loading={load}
  //     />
  //   );
  // } else {
  //   response = <NoResultPage />;
  // }

  const result = (ctz, load, err) => {
    if (err) {
      return <ErrorPage statusCode={500} title="Internal Server Error" />;
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
        if (load) {
          return <SearchPage loading={load} />;
        } else {
          return <NoResultPage />;
        }
      }
    }
  };

  return (
    <MainLayout>
      <Page className={classes.page} title="Results" title={t("results")}>
        <Container maxWidth="md">
          <Box mt={3}>
            {/* {response} */}
            {() => result(citizens, loading, error)}
          </Box>
        </Container>
      </Page>
    </MainLayout>
  );
};

export default CardResultList;
