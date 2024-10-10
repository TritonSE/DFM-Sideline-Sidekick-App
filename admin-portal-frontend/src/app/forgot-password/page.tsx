"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { sendPasswordResetEmail } from "firebase/auth";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { auth } from "../firebase-config";

export default function ForgotPassword() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string>("");

  const buttonStyle = email
    ? { backgroundColor: "#00629B" }
    : { backgroundColor: "#6C6C6C", cursor: "not-allowed" };

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
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg p-8 flex flex-col mx-4">
        <a className="text-sm self-start text-sky-700 mt-4" href="/">
          <FontAwesomeIcon className=" mr-2" icon={faArrowLeft} /> Back to Sign In
        </a>
        <h2 className="text-blue-950 text-lg sm:text-xl font-bold mt-4">Reset Your Password</h2>
        <div className="block text-sm sm:text-base font-medium my-2">
          Enter the email associated with your account and we&apos;ll send you a link to reset your
          password.
        </div>
        <form onSubmit={void handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm sm:text-base font-medium my-2">
              Email
            </label>
            <input
              className="mb-2 p-2 border w-full rounded border-black border-opacity-40"
              type="email"
              name="email"
              id="email"
              placeholder="Enter an email"
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            style={buttonStyle}
            className={`mb-2 p-2 w-full text-white font-medium rounded ${email ? "hover:bg-blue-700" : ""}`}
            disabled={!email}
          >
            Continue
          </button>
          {message && <p className="text-green-600 text-sm mt-2">{message}</p>}
          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        </form>
        <div className="mt-1 self-start text-sm">
          <span>Don&apos;t have an account?</span>
          <a className="text-sky-700" href="/signup">
            {" "}
            Create a new account.
          </a>
        </div>
      </div>
    </div>
  );
}
