export type VerifyUserResponse = {
  respCode: number;
  token?: string;
};

export type RegisterUserResponse = {
  respCode: number;
  userId?: string;
};

export type RegisterUserRequest = {
  emailId: string;
  password: string;
  fullName: string;
};
