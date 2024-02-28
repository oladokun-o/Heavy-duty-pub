export interface LoggedInUser {
  user: User;
  message: string;
  status: number;
}

export interface User {
  id: number
  username: string
  password: string
  email: string
  level: string
  status: string
  token: string
  login_time: string
  created_at: string
  updated_at: string
}
