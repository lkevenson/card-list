import { ApolloProvider } from "@apollo/client";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import GlobalStyles from "components/GlobalStyles";
import { useApollo } from "lib/apollo.client";
import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import PropTypes from "prop-types";
import React, { Fragment } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Provider } from "react-redux";
import store, { wrapper } from "redux/store";
import "styles/nprogress.css";
import "styles/react-date-picker.css";
import theme from "theme";

Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
  NProgress.configure({ showSpinner: false });
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

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
          <CssBaseline />
          <GlobalStyles />
          <Fragment>
            <Component {...pageProps} />
          </Fragment>
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
