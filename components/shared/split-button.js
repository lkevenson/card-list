import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  ClickAwayListener,
  Divider,
  Grid,
  Grow,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  container: {
    flexGrow: 1,
    maxWidth: "330px",
  },
  card: {
    backgroundColor: "#F4F6F8",
  },
  cardheader: {
    backgroundColor: "#ff5722",
    color: "white",
    padding: theme.spacing(1),
  },
  cardcontent: {
    padding: theme.spacing(1),
    "&:last-child": {
      paddingBottom: theme.spacing(1),
    },
  },
}));

export default function SplitButton(props) {
  let { t } = useTranslation("common");
  const lang = t("language.title");

  let router = useRouter();
  const options = router.locales.map((locale) => locale);

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
        style={{ backgroundColor: "#fff" }}
      >
        <Button>
          <Image
            width={25}
            height={26}
            src={`/flag-icons/${router.locale}.png`}
            alt="country flag icon"
          />
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper className={classes.container}>
              <ClickAwayListener onClickAway={handleClose}>
                <Card className={classes.card}>
                  <CardHeader title={lang} className={classes.cardheader} />
                  <Divider />
                  <CardContent>
                    <Grid container spacing={1} id="split-button-menu">
                      {options.map((option, index) => {
                        return (
                          <Grid
                            item
                            lg={6}
                            sm={6}
                            md={6}
                            xl={6}
                            xs={12}
                            key={option}
                            onClick={(event) =>
                              handleMenuItemClick(event, index)
                            }
                          >
                            <Link href={router.asPath} locale={option}>
                              <a>
                                <Card>
                                  <CardContent className={classes.cardcontent}>
                                    <Grid container spacing={1}>
                                      <Grid item md={3}>
                                        <Image
                                          width={25}
                                          height={26}
                                          src={`/flag-icons/${option}.png`}
                                          alt="country flag icon"
                                        />
                                      </Grid>
                                      <Grid item md={9}>
                                        <Typography
                                          color="textSecondary"
                                          gutterBottom
                                          variant="subtitle2"
                                          noWrap
                                        >
                                          {t(`language.${option}`)}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  </CardContent>
                                </Card>
                              </a>
                            </Link>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </CardContent>
                </Card>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
