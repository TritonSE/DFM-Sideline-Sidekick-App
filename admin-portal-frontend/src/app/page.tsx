"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Image from 'next/image'
import { auth } from './firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import search from './symbols/search.png'

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
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); 
    } catch (err: any) {
      setError(err.message); 
    }
  };
  
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const formFilled = loginForm.email.trim() !== '' && loginForm.password.trim() !== '';
    setIsFormFilled(formFilled);
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [loginForm.email, loginForm.password]);

  return (
    <div className="flex items-center justify-center">
      <div className="w-2/6 bg-white shadow-xl rounded-lg p-10 pt-8 flex flex-col items-center mt-24">
        <Image src={search} alt="" width={60} height={60}/> 
        <h2 className="text-blue-950 text-xl font-bold my-4">Sideline Sidekick Admin Mode</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-2">
            <label htmlFor="email" className="block text-sm font-medium mb-1">Username</label>
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
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
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
            <label htmlFor="remember-me" className="text-sm">
              Remember me
            </label>
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
        <div className="mt-1 self-start text-sm">
          <span>Don't have an account?</span>
          <a className="text-sky-700" href="/signup"> Create a new account.</a>
        </div>
      </div>
    </div>

  );
}
