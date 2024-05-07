
"use client";

import './globals.css'
import { Roboto } from 'next/font/google'
import { usePathname } from 'next/navigation';
import HorizontalNavBar from './components/HorizontalNavbar'
import VerticalNavBar from './components/VerticalNavBar';
import React, { ReactNode } from 'react';
import styles from './pageStyles';

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  const location = usePathname();
  const showNavbar = location !== '/' && location !== '/signup';

  return (
 
    <html lang="en">
      <body className={roboto.className} >
        {showNavbar && (
          <>
            <div style={styles.verticalNavBar}>
              <VerticalNavBar />
            </div>
            <div style={styles.horizontalNavBar}>
              <HorizontalNavBar />
            </div>
          </>
        )}
        <main className="flex min-h-screen flex-col antialiased">
          {children}
        </main>
      </body>
    </html>
  )
}
