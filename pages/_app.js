import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PropTypes from "prop-types";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import GlobalStyles from "../components/GlobalStyles";
import AppBar from "../components/shared/appbar";
import { useApollo } from "../lib/apolloClient";
import "../public/nprogress.css";
import "../public/react-date-picker.css";
import store, { wrapper } from "../redux/store";
import theme from "../theme";
import useStyles from "./app.style";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
  NProgress.configure({ showSpinner: false });
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const apolloClient = useApollo(pageProps.initialApolloState);
  const classes = useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider store={store}>
      <ApolloProvider client={apolloClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <div className={classes.root}>
            <AppBar title="Office Nationale Identification" />
            <div className={classes.wrapper}>
              <div className={classes.contentContainer}>
                <div className={classes.content}>
                  <Component {...pageProps} />
                </div>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </ApolloProvider>
    </Provider>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default wrapper.withRedux(MyApp);
