"use client";

import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { auth } from "../firebase-config";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset email sent. Please check your inbox.");
      setError("");
    } catch (err) {
      setError(
        "Failed to send password reset email. Please check the email address and try again.",
      );
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 flex flex-col items-center mx-4">
        <h2 className="text-blue-950 text-lg sm:text-xl font-bold my-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm sm:text-base font-medium mb-1">
              Email
            </label>
            <input
              className="mb-4 p-2 border w-full rounded border-black border-opacity-40"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="p-2 w-full text-white font-bold rounded bg-dfm-blue">
            Send Reset Email
          </button>
          {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
        <a className="text-sm self-start text-sky-700 mt-4" href="/">
          Back to Login
        </a>
      </div>
    </div>
  );
}
