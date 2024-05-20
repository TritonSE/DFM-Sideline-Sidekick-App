"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { auth } from '../firebase-config'; 
import { useRouter } from 'next/navigation';

interface SignUpForm {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
}

const formatFirebaseError = (error: any): string => {
  if (error && typeof error.code === 'string') {
    const errorCode = error.code.split('/')[1];
    return errorCode
      .split('-')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  return 'An unexpected error occurred';
};

export default function SignUp() {
  const db = getFirestore();
  const [signUpForm, setSignUpForm] = useState<SignUpForm>({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
  });

  const buttonStyle = signUpForm.email && signUpForm.password && signUpForm.firstName && signUpForm.lastName && signUpForm.username
    ? { backgroundColor: '#00629B' } 
    : { backgroundColor: '#6C6C6C', cursor: 'not-allowed' };

  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignUpForm({ ...signUpForm, [name]: value });
  };

  const checkInvitation = async (email: string) => {
    const inviteRef = doc(db, 'invitations', email);
    const inviteSnap = await getDoc(inviteRef);
    return inviteSnap.exists();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = signUpForm;
    
    try {
      const invited = await checkInvitation(email);
      if (!invited) {
        setError("You must be invited to create an account.");
        return;
      }
  
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/home');
    } catch (err: any) {
      console.error("Firebase Error:", err); 
      const friendlyError = formatFirebaseError(err);
      setError(friendlyError);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-16 flex flex-col items-center">
        <div className="text-2xl font-bold text-blue-950 my-4">Create an Admin Mode Account</div>
        <form onSubmit={handleSubmit} className="w-5/6">
          <div className="flex gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium mb-1">First Name</label>
              <input
                className="p-2 border w-full rounded border-black border-opacity-40"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium mb-1">Last Name</label>
              <input
                className="p-2 border w-full rounded border-black border-opacity-40"
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Enter your email</label>
          <input
            className="p-2 border w-full rounded mb-4 border-black border-opacity-40"
            type="email"
            name="email"
            placeholder="Enter your UCSD affiliated email"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="username" className="block text-sm font-medium mb-1">Create a Username</label>
          <input
            className="p-2 border w-full rounded mb-4 border-black border-opacity-40"
            type="text"
            name="username"
            placeholder="Type in a username"
            onChange={handleInputChange}
            required
          />
          <label htmlFor="password" className="block text-sm font-medium mb-1">Create a Password</label>
          <input
            className="mb-4 p-2 border w-full rounded border-black border-opacity-40"
            type="password"
            name="password"
            placeholder="Create a Password"
            onChange={handleInputChange}
            required
          />
          <button 
            type="submit"
            style={buttonStyle}
            className={`p-2 w-full text-white font-bold rounded ${signUpForm.email && signUpForm.password && signUpForm.firstName && signUpForm.lastName && signUpForm.username ? 'hover:bg-blue-700' : ''}`}
            disabled={!signUpForm.email || !signUpForm.password || !signUpForm.firstName || !signUpForm.lastName || !signUpForm.username}>
            Create
          </button>
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
        <div className="text-sm mt-4">
          Reach out to William Andrew if you have trouble with making an account.
        </div>
      </div>
    </div>
  );
}
