export const forgotPwd = {
    title: "Sign in to your account",
    body: [
        {
            labelName: "Email Id",
            placeholder: "Enter email Id",
            id: "userId",
            type: "textField",
            width: "100%",
            inputProps: {
                propsName: 'endAdornment',
                value: 'Re-send Otp',
            }
        },
        {
            id: "multiField",
            type: "multiField",
            input: [
                {
                    type: 'empty',
                    width: "80%",
                },
                {
                    name: "Back",
                    id: "password",
                    type: "textButton",
                    width: "10%",
                    onClickStateValue: 'signIn'
                },
            ],
        },
        {
            type: 'optButton'
        }
    ],
    button: {
        value: 'Send Otp',
        width: '100%',
        defaultIcon: 'sendIcon',
        onClickIcon: 'loadingIcon'
    },
};
