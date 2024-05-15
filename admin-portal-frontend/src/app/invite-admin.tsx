"use client";

import React, { useState } from 'react';
import { doc, setDoc, getFirestore } from 'firebase/firestore';

const InviteAdmin = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('');
  const [showModal, setShowModal] = useState(false);
  const db = getFirestore();

  const handleInvite = async (e: any) => {
    e.preventDefault();
    const inviteRef = doc(db, 'invitations', email);

    try {
      await setDoc(inviteRef, { firstName, lastName, title, email, phone, invited: true }); 
      setStatus('Invitation sent successfully.');
      setFirstName('');
      setLastName('');
      setTitle('');
      setEmail('');
      setPhone('');
      setShowModal(false);
    } catch (error: any) {
      setStatus(`Failed to send invitation: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <button
        onClick={() => setShowModal(true)}
        style={{
          backgroundColor: '#00629B', 
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Add Admin
      </button>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            background: 'white',
            padding: '20px',
            borderRadius: '10px',
            width: '500px'
          }}>
            <h2>Add a new Admin</h2>
            <p>Register a physician to your admin directory below.</p>
            <form onSubmit={handleInvite} className="flex flex-col">
              <label>
                First Name*
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </label>
              <label>
                Last Name*
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </label>
              <label>
                Title (ex. HS Clinical Professor)
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                Email*
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>
              <label>
                Phone Number (format: xxx-xxx-xxxx)
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </label>
              <button type="submit" style={{ backgroundColor: '#00629B', color: 'white' }}>Save</button>
              <button type="button" onClick={() => setShowModal(false)} style={{ backgroundColor: 'gray', color: 'white' }}>Cancel</button>
            </form>
            {status && <p>{status}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default InviteAdmin;

