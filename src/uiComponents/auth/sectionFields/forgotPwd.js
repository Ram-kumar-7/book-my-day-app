export const forgotPwd = {
    title: "Sign in to your account",
    body: [
        {
            labelName: "Email Id",
            placeholder: "Enter email Id",
            id: "userId",
            type: "textField",
            width: "100%",
        },
        {
            id: "multiField",
            type: "multiField",
            input: [
                {
                    name: "Re-type E-mail Id",
                    id: "password",
                    type: "checkbox",
                    width: "80%",
                },
                {
                    name: "Back",
                    id: "password",
                    type: "textButton",
                    width: "10%",
                },
            ],
        },
        {
            id: "multiField",
            type: "optButton",
            // input: [
            //   {
            //     name: "Show Password",
            //     id: "opt1",
            //     type: "textField",
            //     width: "15%",
            //   },
            //   {
            //     name: "Show Password",
            //     id: "opt2",
            //     type: "textField",
            //     width: "15%",
            //   },
            //   {
            //     name: "Show Password",
            //     id: "opt3",
            //     type: "textField",
            //     width: "15%",
            //   },
            //   {
            //     name: "Show Password",
            //     id: "opt4",
            //     type: "textField",
            //     width: "15%",
            //   },
            // ],
        },
    ],
    button: "Login",
};
