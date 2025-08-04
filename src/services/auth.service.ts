// src/services/authService.ts
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

interface JwtPayload {
  role: string;
  username: string;
  // otros campos si los necesitas
}

export const loginUser = async (username: string, password: string): Promise<JwtPayload> => {
  const response = await axios.post('http://localhost:3300/auth/login', {
    username,
    password,
  });

  const token = response.data.access_token;
  localStorage.setItem('token', token);

  const decoded = jwtDecode<JwtPayload>(token);
  return decoded;
};