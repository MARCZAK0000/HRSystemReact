export type registerInputProps = {
  id: number;
  name: string;
  fullname: string;
  type: string;
};

export const registerInput: registerInputProps[] = [
  {
    id: 1,
    name: "Email",
    fullname: "Email Address",
    type: "email",
  },
  {
    id: 2,
    name: "Password",
    fullname: "Password",
    type: "password",
  },
  {
    id: 3,
    name: "ConfirmPassword",
    fullname: "Confirm Password",
    type: "password",
  },
  {
    id: 4,
    name: "PhoneNumber",
    fullname: "Phone Number",
    type: "text",
  },
];

type loginInputProps = {
  id: number;
  name: string;
  fullname: string;
  type: string;
};

export const loginInput: loginInputProps[] = [
  {
    id: 1,
    name: "Email",
    fullname: "Email",
    type: "text",
  },
  {
    id: 2,
    name: "Password",
    fullname: "Password",
    type: "password",
  },
];
