interface IUser {
  id: number;
  username: string;
  password?: string;
  roles: string;
  status: UserStatus;
}
