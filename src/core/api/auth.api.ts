import { BASE_URL } from './api.constants';
import { AuthCredentials, AuthResponse } from './auth.types';

export const login = async (credentials: AuthCredentials): Promise<AuthResponse> => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || 'Login failed');
  }

  return res.json();
};
