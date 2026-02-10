'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { Button } from '@/core/ui/button';
import { Input } from '@/core/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/core/ui/form';
import { loginSchema, LoginSchemaType } from '../constants/auth.schemas';

interface LoginFormProps {
  onSubmit: (data: LoginSchemaType) => Promise<void>;
  isLoading: boolean;
  loginError: string;
}

// username: 'emilys',
// password: 'emilyspass',

export const LoginForm = ({ onSubmit, isLoading, loginError }: LoginFormProps) => {
  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { username: '', password: '' },
  });

  return (
    <div className="w-full max-w-100 mx-auto">
      <h1 className="text-4xl font-black uppercase tracking-tighter mb-8">Log In</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-black text-[10px] uppercase text-slate-400 tracking-widest">
                  Username
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your username"
                    className="rounded-2xl bg-slate-100 border-none h-14 px-5 focus-visible:ring-2 focus-visible:ring-black transition-all"
                  />
                </FormControl>
                <FormMessage className="text-[11px] font-bold uppercase italic" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-black text-[10px] uppercase text-slate-400 tracking-widest">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="••••••••"
                    {...field}
                    className="rounded-2xl bg-slate-100 border-none h-14 px-5 focus-visible:ring-2 focus-visible:ring-black transition-all"
                  />
                </FormControl>
                <FormMessage className="text-[11px] font-bold uppercase italic" />
              </FormItem>
            )}
          />

          {loginError && (
            <div className="bg-red-50  p-4 rounded-xl">
              <p className="text-red-600 text-xs font-black uppercase">{loginError}</p>
            </div>
          )}

          <div className="flex justify-end px-1">
            <Link
              href="/forgotpassword"
              className="text-[11px] font-black uppercase text-black hover:opacity-70 transition-opacity">
              Recovery Password?
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full cursor-pointer py-8 rounded-[24px] bg-black text-white hover:bg-slate-800 text-sm font-black uppercase tracking-[0.2em] transition-all active:scale-95 disabled:opacity-50 shadow-xl shadow-black/10">
            {isLoading ? 'Processing...' : 'Login Now'}
          </Button>
        </form>
      </Form>

      <div className="mt-10 pt-10 border-t border-slate-100 text-center">
        <p className="text-slate-400 text-[11px] font-bold uppercase tracking-widest">
          Not a member?{' '}
          <Link href="/signup" className="text-black hover:opacity-70 transition-opacity">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};
