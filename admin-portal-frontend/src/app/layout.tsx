import "./globals.css";
import ClientLayoutWrapper from "./components/ClientLayoutWrapper";
import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import { AuthProvider } from "./context/AuthContext";
import styles from "./pageStyles";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sideline Sidekick Admin",
  description: "Admin portal for Sideline Sidekick App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const layout = (
    <html lang="en">
      <head></head>
      <body>
        <AuthProvider>
          <div>
            <div style={styles.horizontalNavBar}>
              <HorizontalNavBar />
            </div>
            <div className="flex flex-row inline-block">
              <div style={styles.verticalNavBar}>
                <VerticalNavBar />
              </div>
              {children}
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
  return <ClientLayoutWrapper layout={layout}>{children}</ClientLayoutWrapper>;
}
