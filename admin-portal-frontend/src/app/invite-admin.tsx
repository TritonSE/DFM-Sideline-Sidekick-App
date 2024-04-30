"use client";

import React, { useState } from 'react';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

const InviteAdmin = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const db = getFirestore();

  const handleInvite = async (e: any) => {
    e.preventDefault();
    const inviteRef = doc(db, 'invitations', email);

    try {
      await setDoc(inviteRef, { invited: true }); 
      setStatus('Invitation sent successfully.');
      setEmail('');
    } catch (error: any) {
      setStatus(`Failed to send invitation: ${error.message}`);
    }
  };



return (
    <div className="flex items-center justify-center">
      <form onSubmit={handleInvite} className="flex flex-col items-center">
        <input
          className="mb-2 p-2 border w-full rounded border-gray-400"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email to invite"
          required
        />
        <button
          type="submit"
          style={{
            backgroundColor: '#00629B', 
            color: 'white',
            border: 'none',
            borderRadius: '4px', 
            padding: '7px 14px',
            cursor: 'pointer',
          }}
          className="hover:bg-blue-700 transition-colors"
        >
          Add Admin
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
  
};

export default InviteAdmin;
