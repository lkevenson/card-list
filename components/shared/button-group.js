import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
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
}));

export default function BasicButtonGroup() {
  const classes = useStyles();
  let router = useRouter();

  return (
    <div className={classes.root}>
      <ButtonGroup
        // color="secondary"
        // variant="contained"
        style={{
          backgroundColor: "#fff",
        }}
        aria-label="outlined primary button group"
      >
        {router.locales.map((locale) => (
          <Button key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
