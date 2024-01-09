export type registerStateProps = {
  Email: string;
  Password: string;
  Confirmpassword: string;
  PhoneNumber: string;
};

export type loginStateProps = {
  Email: string;
  Password: string;
  IsRemember: boolean;
};

export type useApiCallProps = {
  apiCall: () => Promise<Response>;
};

export type loginUserResponseProps = {
  Result: boolean;
  Email: string;
  Username: string;
  Token: string;
  Message: string;
};

export type ErrorResponse = {
  Title: string;
  Type: string;
  Status: number;
  Detail: string;
};
