'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { login } from '@/core/api/auth.api';
import { AuthCredentials } from '@/core/api/auth.types';
import { LoginForm } from '../components/LoginForm';

export const LoginView = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (data: AuthCredentials) => {
    try {
      setIsLoading(true);
      setLoginError('');

      const response = await login(data);

      if (response.accessToken) {
        Cookies.set('token', response.accessToken, { expires: 7 });
        router.push('/account');
        router.refresh();
      }
    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message);
      } else {
        setLoginError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} loginError={loginError} />
    </div>
  );
};
