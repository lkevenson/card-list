// import Logo from "@/component/";
import Logo from "@/components/logo";
import AppLink from "@/components/shared/app-link";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {},
  link: {
    color: "#fff",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <AppBar color="primary" elevation={2}>
      <Toolbar>
        <Logo width={60} height={60} url={"/"} />
        {/* <Link href="/">
          <a className={classes.link}>
            <Typography>{props.title}</Typography>
          </a>
        </Link> */}

        <AppLink className={classes.link} href={"/"}>
          <Typography>{props.title}</Typography>
        </AppLink>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
