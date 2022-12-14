export interface UserAuth {
  email: string;
  password: string;
}

export interface User {
  _id?: string;
  name?: string;
  email?: string;
  password?: string;
  avatar?: string;
  dateOfBirth?: any;
  sex?: string;
  addresses?: any;
}