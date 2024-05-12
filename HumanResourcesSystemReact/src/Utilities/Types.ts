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
  result: boolean;
  email: string;
  username: string;
  token: string;
  refreshToken: string;
  message: string;
};

export type UserInformationsProps = {
  name: string;
  lastName: string;
  userCode: string;
  email: string;
  phone: string;
  departmentName: string;
};

export type ErrorResponse = {
  Title: string;
  Type: string;
  Status: number;
  Detail: string;
};

export type GetAttendanceDtoType = {
  id: string;
  userId: string;
  arrival: string;
  createDay: string;
  isCompleted: boolean;
};

export type ErrorCodeTypes = {
  BadRequest: boolean;
  Forbidden: boolean;
  Unauthorized: boolean;
  NotFound: boolean;
};
