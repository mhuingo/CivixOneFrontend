import { jwtDecode, JwtPayload } from "jwt-decode";

export const getUserFromToken = (): JwtPayload | null => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    return jwtDecode<JwtPayload>(token);
  } catch (err) {
    console.error('Token inválido:', err);
    return null;
  }
};
