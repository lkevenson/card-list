import GlobalStyles from "@/components/GlobalStyles";
import AppBar from "@/components/shared/appbar";
import "@/public/react-date-picker.css";
import { ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import useStyles from "./app.style";
import theme from "./theme";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
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
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
