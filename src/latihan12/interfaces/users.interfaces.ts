export interface UsersAndCount {
  data: Users[];
  count: number;
}

export interface Users {
  name: string;
  username: string;
  emailAddress: string;
  password: string;
  updatedAt: Date;
  createdAt: Date;
  isActive: boolean;
}
