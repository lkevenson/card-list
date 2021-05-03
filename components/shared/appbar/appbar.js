import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Logo from "components/logo";
import AppLink from "components/shared/app-link/app-link";
import PropTypes from "prop-types";
import SplitButton from "../split-button";

const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    color: "#fff",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar color="primary" position="fixed" elevation={8}>
      <Toolbar>
        <Logo width={60} height={60} url={"/"} />
        <Box flexGrow={1} />
        <AppLink className={classes.link} href={"/"}>
          <Typography component="h2" variant="h5" color="inherit" noWrap>
            <Box fontWeight="fontWeightBold" m={1} letterSpacing={3}>
              {props.title.toUpperCase()}
            </Box>
          </Typography>
          {/* <Typography className={classes.app_name}>
            <Box fontWeight="fontWeightBold" m={1} letterSpacing={6}>
              {t(`app_name`)}
            </Box>
          </Typography> */}
        </AppLink>
        <Box flexGrow={1} />
        <SplitButton />
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
