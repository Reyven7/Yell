export interface LoginCredential {
  email: string;
  password: string;
}

export interface RegisterCredential {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponce {
  accessToken: string;
  refreshToken: string;
}
