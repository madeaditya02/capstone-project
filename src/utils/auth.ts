import api from "./api";

export type AuthUser = {
  id: number;
  name: string;
  emailAddress: string;
  birthDate: string | null;
  gender: string | null;
  job: string | null;
  workLocation: string | null;
  hobby: string | null;
  createdAt: string;
  updatedAt: string;
};

type ApiResponse<T> = {
  message: string;
  data: T;
};

type LoginPayload = {
  emailAddress: string;
  password: string;
};

type LoginResult = {
  user: AuthUser;
  token: string;
};

const TOKEN_KEY = "token";
const USER_KEY = "user";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function getStoredUser() {
  const user = localStorage.getItem(USER_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user) as AuthUser;
  } catch {
    clearAuthSession();
    return null;
  }
}

export function setAuthSession({ token, user }: LoginResult) {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuthSession() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export async function login(payload: LoginPayload) {
  const response = await api.post<ApiResponse<LoginResult>>("/auth/login", payload);
  const auth = response.data.data;

  setAuthSession(auth);

  return auth;
}

export async function getCurrentUser() {
  const response = await api.get<ApiResponse<AuthUser>>("/users/me");
  const user = response.data.data;
  const token = getToken();

  if (token) {
    setAuthSession({ token, user });
  }

  return user;
}