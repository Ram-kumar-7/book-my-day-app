import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import signIn from "../../assets/signIn.svg"

const commonStyles = {
  displayProperty: {
    display : "flex",
    justifyContent : "center",
    alignItems:"center"
  }
}

const useStyles = makeStyles(() => ({
  signInMainContainer: {
    backgroundColor : "#1336EF",
    height: "100vh",
    margin: "-8px !important",
    ...commonStyles.displayProperty
  },
  signInInnerContainer: {
    height: "80%",
    backgroundColor: "white",
    width: "82%",
    borderRadius: "7.9%",
    ...commonStyles.displayProperty
  },
  signInInnerLeftGrid : {
    height: "80%",
    width: "40%",
    ...commonStyles.displayProperty,
    flexDirection: "column !important",
    flexShrink: "1",
    "@media (max-width: 600px)": {
      display : "none !important"
     },
  },
  signInInnerRightGrid: {
    backgroundColor: "beige",
    height: "80%",
    width: "40%",
    "@media (max-width: 600px)": {
      width : "80% !important"
    },
  },
  signInProductName: {
    fontWeight: "700"
  }

}));

function SignIn() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.signInMainContainer }>
        <Box className={classes.signInInnerContainer}>
          <Grid xs={6} className={classes.signInInnerLeftGrid}>
              <img src={signIn} height="50%" draggable={false} loading={"lazy"}/>
              <Typography className={classes.signInProductName}>Book My Bill</Typography>
              <Typography>Your Billing, Your Way – Streamlined.</Typography>
          </Grid>
          <Grid xs={6} className={classes.signInInnerRightGrid}>

          </Grid>
        </Box>
      </div>
    </>
  );
}

export default SignIn;
