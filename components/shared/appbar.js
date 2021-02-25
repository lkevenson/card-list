import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Logo from "../../components/logo";
import AppLink from "../../components/shared/app-link";
import SplitButton from "./split-button";

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
          <Typography variant="h3" component="p">
            {props.title}
          </Typography>
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
