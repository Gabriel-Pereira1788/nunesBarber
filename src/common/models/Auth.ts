export enum RoleUser {
  Admin = 1,
  Client = 2,
}

export interface AuthDTO {
  name?: string;
  role_id?: RoleUser;
  email: string;
  password: string;
}

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string | null;
  role_id?: RoleUser;
  createdAt?: string;
}
