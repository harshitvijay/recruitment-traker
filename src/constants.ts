export const RegistrationFormInputData = [
  {
    label: "Name",
    type: "text",
    placeHolder: "Enter Name",
    name: "name",
  },
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
  {
    label: "Confirm Password",
    type: "password",
    placeHolder: "Enter Confirm Password",
    name: "confirmPassword",
  },
];

export const LoginFormInputData = [
  {
    label: "Email Address",
    type: "email",
    placeHolder: "Enter Email",
    name: "email",
  },
  {
    label: "Password",
    type: "password",
    placeHolder: "Enter Password",
    name: "password",
  },
];
export const initialFields = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const loginUrl = "https://rms-01.herokuapp.com/api/login";
export const signupUrl = "https://rms-01.herokuapp.com/api/register";
