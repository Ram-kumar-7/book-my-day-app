import { React, useState } from "react";
import { Box, Grid, TextField, Typography } from "@mui/material";
import { makeStyles, useTheme } from "@mui/styles";
import signIn from "../../assets/signIn.svg";
import { getSectionFields } from "./sectionFields";
import { AccountCircle } from "@mui/icons-material";

const commonStyles = {
  displayProperty: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const useStyles = makeStyles(() => ({
  signInMainContainer: {
    backgroundColor: "#1336EF",
    height: "100vh",
    margin: "-8px !important",
    ...commonStyles.displayProperty,
  },
  signInInnerContainer: {
    height: "80%",
    backgroundColor: "white",
    width: "82%",
    borderRadius: "7.9%",
    ...commonStyles.displayProperty,
  },
  signInInnerLeftGrid: {
    height: "80%",
    width: "40%",
    ...commonStyles.displayProperty,
    flexDirection: "column !important",
    flexShrink: "1",
    "@media (max-width: 800px)": {
      display: "none !important",
    },
  },
  signInInnerRightGrid: {
    backgroundColor: "beige",
    height: "80%",
    width: "40%",
    // ...commonStyles.displayProperty,
    "@media (max-width: 800px)": {
      width: "80% !important",
    },
  },
  signInProductName: {
    marginBottom: "1% !important",
    fontWeight: "900 !important",
    fontSize: "150% !important",
  },
}));

function SignIn() {
  const classes = useStyles();
  const [authPage, setAuthPage] = useState("signIn");

  const renderSectionFields = () => {
    const field = getSectionFields(authPage);
    return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">{field.title}</Typography>
        </Grid>
        {field.body?.map((fieldObj) => {
          switch (fieldObj.type) {
            case "textField":
              return (
                <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                  <AccountCircle
                    sx={{ color: "action.active", mr: 1, my: 0.5 }}
                  />
                  <TextField
                    id={fieldObj.id}
                    label={fieldObj.labelName}
                    variant="standard"
                    placeholder={fieldObj.placeholder}
                  />
                </Box>
              );
            case "password":
              return (
                <TextField
                  type="password"
                  id={fieldObj.id}
                  label={fieldObj.labelName}
                  variant="standard"
                  placeholder={fieldObj.placeholder}
                />
              );
          }
        })}
      </Grid>
    );
  };

  return (
    <>
      <div className={classes.signInMainContainer}>
        <Box className={classes.signInInnerContainer}>
          <Grid xs={6} className={classes.signInInnerLeftGrid}>
            <img src={signIn} height="50%" draggable={false} loading={"lazy"} />
            <Typography className={classes.signInProductName}>
              Book My Bill
            </Typography>
            <Typography>Your Billing, Your Way – Streamlined.</Typography>
          </Grid>
          <Grid xs={6} className={classes.signInInnerRightGrid}>
            {renderSectionFields()}
          </Grid>
        </Box>
      </div>
    </>
  );
}

export default SignIn;
