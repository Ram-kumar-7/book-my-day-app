export const signIn = {
  title: "Sign in to your account",
  body: [
    {
      labelName : "Email Id",
      placeholder: "Enter email Id",
      id: "userId",
      type: "textField",
      width: "100%",
    },
    {
      labelName : "Password",
      placeholder: "Enter Password",
      id: "password",
      type: "password",
      width: "100%",
    },
    {
      id: "multiField",
      name: "multiField",
      input: [
        {
          name: "Show Password",
          id: "password",
          type: "checkbox",
          width: "40%",
        },
        {
          id: "",
          width: "20%",
        },
        {
          name: "Forgot Password",
          id: "password",
          type: "textButton",
          width: "40%",
        },
      ],
    },
  ],
  button: "Sign In",
};
