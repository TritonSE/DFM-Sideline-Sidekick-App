"use client"

import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { auth } from './firebase-config';
import { setPersistence, signInWithEmailAndPassword, onAuthStateChanged, browserLocalPersistence } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import search from './symbols/search.png';

interface LoginForm {
  email: string;
  password: string;
}

export default function Home() {
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const buttonStyle = loginForm.email && loginForm.password
    ? { backgroundColor: '#00629B' }
    : { backgroundColor: '#6C6C6C', cursor: 'not-allowed' };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginForm;

    try {
      //set auth persistence to local, allowing sessions to persist across browser tabs
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (err: any) {
      setError('The email or password is incorrect.');
    }
  };

  useEffect(() => {
    // listen to auth state changes and automatically navigate if authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/home');
      }
    });

    document.body.style.overflow = 'hidden';
    const formFilled = loginForm.email.trim() !== '' && loginForm.password.trim() !== '';
    setIsFormFilled(formFilled);

    return () => {
      document.body.style.overflow = 'visible';
      unsubscribe(); // detach listener to prevent memory leaks
    };
  }, [loginForm.email, loginForm.password, router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 flex flex-col items-center mx-4">
        <Image src={search} alt="Search Icon" width={60} height={60} />
        <h2 className="text-blue-950 text-lg sm:text-xl font-bold my-4">Sideline Sidekick Admin Mode</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">Username</label>
            <input
              className="mb-4 p-2 border w-full rounded border-black border-opacity-40"
              type="text"
              name="email"
              id="email"
              placeholder="Enter username or email"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm sm:text-base font-medium mb-1">Password</label>
            <input
              className="mb-4 p-2 border w-full rounded border-black border-opacity-40"
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-6 flex items-center">
            <input id="remember-me" type="checkbox" className="mr-2 h-4 w-4 accent-blue border-2 border-blue-900" name="rememberMe" />
            <label htmlFor="remember-me" className="text-sm sm:text-base">Remember me</label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              style={buttonStyle}
              className={`p-2 w-full text-white font-bold rounded ${loginForm.email && loginForm.password ? 'hover:bg-blue-700' : ''}`}
              disabled={!loginForm.email || !loginForm.password}>
              Log in
            </button>
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>
        </form>
        <a className="text-sm self-start text-sky-700" href="/forgot-password">I forgot my username or password</a>
        <div className="mt-1 self-start text-sm sm:text-base">
          <span>Don't have an account?</span>
          <a className="text-sky-700" href="/signup"> Create a new account.</a>
        </div>
      </div>
    </div>
  );
}
