import { React, useEffect, useState } from "react";
import { Box, Checkbox, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import signIn from "../../assets/signIn.svg";
import { getSectionFields } from "./sectionFields";
import CustomButton from "../common/inputs/button";
import { iconBank } from "../../assets/icons";
import OtpButton from "../common/inputs/otpButton";
import CustomTextField from "../common/inputs/textField";

const commonStyles = {
    displayProperty: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    authTitle: {
        paddingBottom: '10px',
        fontWeight: '600',
        fontSize: '24px',
        color: 'rgb(246 103 1 / 89%)'
    },
    boxStyle: {
        margin: '10px',
        display: "flex",
        alignItems: "flex-end",
    },
    buttonStyle: {
        background: "rgb(246 103 1 / 89%)",
        width: '100%',
        color: '#fff',
        fontSize: '16px',
        fontWeight: 'bold',
        borderRadius: '7px',
        marginTop: '20px',
        opacity: '0.5 !important'

    }
}

const useStyles = makeStyles(() => ({
    signInMainContainer: {
        position: 'relative',
        backgroundColor: "#1336EF",
        height: "100vh",
        margin: "-8px !important",
        ...commonStyles.displayProperty,
    },
    signInInnerContainer: {
        position: 'relative',
        height: "80%",
        backgroundColor: "white",
        width: "72%",
        borderRadius: "1.9%",
        borderTopLeftRadius: "20%",
        borderBottomRightRadius: "20%",
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
        height: "80%",
        width: "40%",
        boxSizing: "border-box",
        padding: "100px 50px !important",
        "@media (max-width: 800px)": {
            width: "80% !important",
        },
    },
    signInProductName: {
        marginBottom: "1% !important",
        fontWeight: "900 !important",
        fontSize: "150% !important",
    },
}))

function AuthPage() {
    const classes = useStyles()
    const [authPage, setAuthPage] = useState("updatePwd")
    const [field, setField] = useState(getSectionFields(authPage))
    const [buttonOnClicked, setButtonOnClicked] = useState(false)
    const [reSendOtp, setReSendOtp] = useState(false)
    const [reSendOtpLoading, setReSendOtpLoading] = useState(false)


    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        setField(getSectionFields(authPage))
        setButtonOnClicked(false)
        setReSendOtp(false)
        setReSendOtpLoading(false)
    }, [authPage])

    const handleCheckboxChange = (event) => {
        setShowPassword(event.target.checked)
    }


    const handleReSendOtp = () => {
        setReSendOtpLoading(true)
    }

    const handleOnClick = () => {
        setButtonOnClicked(true)
        setReSendOtp(true)
    }

    return (
        <>
            <div className={classes.signInMainContainer}>
                <Box className={classes.signInInnerContainer}>
                    <Grid xs={6} className={classes.signInInnerLeftGrid}>
                        <img src={signIn} height="70%" draggable={false} loading={"lazy"} />
                        <Typography className={classes.signInProductName}>Book My Bill</Typography>
                        <Typography>Your Billing, Your Way – Streamlined.</Typography>
                    </Grid>
                    <Box className={classes.signInInnerRightGrid}>
                        <Typography style={{ ...commonStyles.authTitle }}>{field.title}</Typography>
                        <Grid style={{ ...commonStyles.displayProperty, flexDirection: "column", }}>
                            {field.body?.map((fieldObj, index) => (
                                <>
                                    {(() => {
                                        switch (fieldObj.type) {
                                            case "textField":
                                                return (
                                                    <Box sx={{ width: fieldObj.width, ...commonStyles.boxStyle }}>
                                                        {iconBank.emailIcon({ color: "orange !important", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                                        <CustomTextField
                                                            id={fieldObj.id}
                                                            label={fieldObj.labelName}
                                                            inputProps={reSendOtp ? { ...fieldObj.inputProps, onClick: handleReSendOtp } : ''}
                                                            loading={reSendOtpLoading}
                                                        />
                                                    </Box>
                                                );
                                            case "password":
                                                return (
                                                    <Box sx={{ width: fieldObj.width, ...commonStyles.boxStyle }}>
                                                        {iconBank.lockIcon({ color: "orange", mr: 1, my: 0.5 }, { width: '24px', height: '24px' })}
                                                        <CustomTextField
                                                            type={showPassword ? "text" : "password"}
                                                            id={fieldObj.id}
                                                            label={fieldObj.labelName}
                                                        />
                                                    </Box>
                                                );
                                            case "optButton":
                                                return (
                                                    <OtpButton boxCount={4} />
                                                )
                                            case 'multiField':
                                                return (
                                                    <Grid container key={index} style={{ boxSizing: 'border-box' }}>
                                                        {fieldObj.input.map((fieldObjInput, subIndex) => {
                                                            switch (fieldObjInput.type) {
                                                                case 'checkbox':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ display: "flex", alignItems: "center", width: fieldObjInput.width, padding: '5px 0' }}>
                                                                            <Checkbox
                                                                                style={{ transform: "scale(0.8)", padding: '5px !important' }}
                                                                                checked={showPassword}
                                                                                onChange={handleCheckboxChange}
                                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                                            />
                                                                            <Typography style={{ width: fieldObjInput.width, fontSize: '14px', paddingLeft: '-10px !important' }}>{fieldObjInput.name}</Typography>
                                                                        </Box>
                                                                    );
                                                                case 'textButton':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ display: "flex", alignItems: "center", width: fieldObjInput.width }}>
                                                                            <Typography onClick={() => setAuthPage(fieldObjInput.onClickStateValue)} style={{ textDecoration: 'underline', cursor: 'pointer', color: 'rgb(246 103 1 / 89%)', fontSize: '14px', justifyContent: 'end' }} >{fieldObjInput.name}</Typography>
                                                                        </Box>
                                                                    )
                                                                case 'empty':
                                                                    return (
                                                                        <Box key={subIndex} sx={{ width: fieldObjInput.width }} />
                                                                    )
                                                                default:
                                                                    return null
                                                            }
                                                        })}
                                                    </Grid>
                                                );
                                            default:
                                                return null;
                                        }
                                    })()}
                                </>
                            ))}
                        </Grid>
                        <CustomButton
                            style={{ ...commonStyles.buttonStyle }}
                            text={field.button.value}
                            endIcon={buttonOnClicked ? field.button.onClickIcon : field.button.defaultIcon}
                            value={field.button.value}
                            onClick={handleOnClick}
                            disabled={buttonOnClicked}
                        />
                    </Box>

                </Box>
            </div>
        </>
    );
}

export default AuthPage
