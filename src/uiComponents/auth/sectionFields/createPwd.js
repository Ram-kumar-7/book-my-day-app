
export const updatePassword = {
    title: "Sign in to your account",
    body: [
        {
            labelName: "New Password",
            placeholder: "New Password",
            id: "newPassword",
            type: "password",
            width: "100%",
        },
        {
            labelName: "Confirm Password",
            placeholder: "Confirm Password",
            id: "confirmPassword",
            type: "password",
            width: "100%",
        },
        {
            id: "multiField",
            type: "multiField",
            input: [
                {
                    name: "Show Password",
                    id: "password",
                    type: "checkbox",
                    width: "85%",
                },
                {
                    name: "Back",
                    id: "password",
                    type: "textButton",
                    width: "10%",
                    onClickStateValue: 'forgotPwd'
                },
            ],
        },
    ],
    button: {
        value: 'Update password',
        width: '100%',
        defaultIcon: '',
        onClickIcon: 'loadingIcon'
    },
};

