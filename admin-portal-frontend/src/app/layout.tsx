
"use client";

import './globals.css'
import { Roboto } from 'next/font/google'
// import Navbar from './components/Navbar.js';
// import Footer from './components/Footer.js';
import React, { ReactNode } from 'react';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
})




export default function RootLayout({ children }: { children: ReactNode }) {
  return (
 
    <html lang="en">
      <body className={roboto.className} >
        {/* <Navbar /> */}
        <main className="mt-16 flex min-h-screen flex-col antialiased">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
