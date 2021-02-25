// import { Container, Grid, makeStyles } from "@material-ui/core";
// import { request } from "graphql-request";
// import useTranslation from "next-translate/useTranslation";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import {
//   ALL_CITIZEN_QUERY,
//   CITIZEN_BY_ID_QUERY,
// } from "../../components/graphql/citizen.operation";
// import Page from "../../components/page";
// import CardHistory from "../../components/partial/cardHistory";
// import CitizenData from "../../components/partial/citizenProfile";

// const endpoint = "http://localhost:4000/graphql";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: theme.palette.background.dark,
//     minHeight: "100%",
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3),
//   },
// }));

// const Account = ({ person }) => {

//   const classes = useStyles();
//   const [citizen, setCitizen] = useState({});
//   const [data, setData] = useState({});
//   const { t } = useTranslation("common");

//   useEffect(() => {
//     const {
//       last_name,
//       first_name,
//       middle_name,
//       dob,
//       reg_place,
//       pob,
//       reg_date,
//       delivery_place,
//       box,
//       packs,
//     } = person;

//     setCitizen({
//       last_name,
//       first_name,
//       middle_name,
//       dob,
//       pob,
//       reg_place,
//     });

//     setData({
//       reg_date,
//       delivery_place,
//       box,
//       packs,
//     });
//   }, [person]);

//   return (
//     <Page className={classes.root} title={t("citizen-details")}>
//       <Container maxWidth="md">
//         <Grid container spacing={1}>
//           <Grid item lg={5} md={6} xs={12}>
//             <CitizenData citizen={citizen} />
//           </Grid>
//           <Grid item lg={7} md={6} xs={12}>
//             <CardHistory data={data} />
//           </Grid>
//         </Grid>
//       </Container>
//     </Page>
//   );
// };

// export async function getStaticPaths({ locales }) {
//   const data = await request(endpoint, ALL_CITIZEN_QUERY);

//   const { inventories } = data;
//   const paths = [];

//   locales.forEach((locale, i) => {
//     inventories.forEach((inventory, i) => {
//       paths.push({ params: { id: inventory.id }, locale });
//     });
//   });

//   return { paths, fallback: true };

// }

// export async function getStaticProps({ params }) {
//   const variables = {
//     id: params.id,
//   };
//   const { searchCitizenID: person } = await request(
//     endpoint,
//     CITIZEN_BY_ID_QUERY,
//     variables
//   );
//   return { props: { person } };

// }

// export default Account;

const AccountTest = () => {
  return "Hello Friend";
};

export default AccountTest;
