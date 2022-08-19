export interface UsersResponse {
  statusCode: number;
  message: string;
  data: User[];
  count: number;
}

export interface IGetUserAll {
  users: User[];
  count: number;
}

export interface User {
  name: string;
  username: string;
  emailAddress: string;
  updatedAt: Date;
  createdAt: Date;
}
