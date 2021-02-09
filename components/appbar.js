import {
  AppBar,
  Toolbar,
  Box,
  makeStyles,
  Typography,
} from "@material-ui/core";
import PropTypes from "prop-types";
import Logo from "./logo";

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    width: 60,
    height: 60,
  },
}));

const Header = (props) => {
  return (
    <AppBar color="primary">
      <Toolbar>
        {/* <Logo width={60} height={60} /> */}
        {/* <Box flexGrow={1} /> */}
        <Typography>{props.title}</Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
