"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

interface LoginForm {
  email: string;
  password: string;
}

export default function Home() {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });
  const [error, setError] = useState<string>('');
  const router = useRouter();


  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginForm;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); 
    } catch (err: any) {
      setError(err.message); 
    }
  };
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="w-2/6 bg-white shadow-xl rounded-lg p-14 flex flex-col items-center mt-24">
        <h2 className="text-blue-950 text-xl font-bold mb-6">Sideline Sidekick Admin Mode</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
            <input
              className="mb-4 p-2 border w-full rounded border-black border-opacity-40 text-zinc-400"
              type="text"
              name="email"
              id="email"
              placeholder="Enter username or email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              className="mb-4 p-2 border w-full rounded border-black border-opacity-40 text-zinc-400"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input id="remember-me" type="checkbox" className="mr-2 h-4 w-4 accent-blue border-2 border-blue-900" name="rememberMe" />
            <label htmlFor="remember-me" className="text-sm">
              Remember me
            </label>
          </div>
          <div className="mb-4">
            <button type="submit" className="p-2 bg-neutral-500 rounded text-white w-full">Log in</button>
            {error && <p className="error">{error}</p>}
          </div>
        </form>
        <a className="text-sm self-start text-sky-700" href="/forgot-password">I forgot my username or password</a>
        <div className="mt-1 self-start text-sm">
          <span>Don't have an account?</span>
          <a className="text-sky-700" href="/signup"> Create a new account.</a>
        </div>
      </div>
    </div>

  );
}
