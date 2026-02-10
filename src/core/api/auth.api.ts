import { BASE_URL } from './api.constants';
import { AuthCredentials, AuthResponse } from './auth.types';

export const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) throw new Error('Login failed');

  return res.json();
};
