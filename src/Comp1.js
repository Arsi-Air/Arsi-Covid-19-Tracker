import React from "react";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  testButtonStyle: {
    color: "orange",
    backgroundColor: "blue",
    '&:hover': {
      backgroundColor: blue[500],

      color: "yellow"
    }

  }
});

export const Comp1 = () => {
  const classes = useStyles();
  return (
    <>
      <Button className= {classes.testButtonStyle} fullWidth>
        Test Button
      </Button>
      <Typography variant ="h2" color="secondary">
        Hello World
      </Typography>
    </>
  );
};
