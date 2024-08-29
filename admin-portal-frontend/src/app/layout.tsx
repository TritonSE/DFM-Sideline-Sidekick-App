import type { Metadata } from "next";

import "./globals.css";
import HorizontalNavBar from "./components/HorizontalNavbar";
import VerticalNavBar from "./components/VerticalNavBar";
import styles from "./pageStyles";

export const metadata: Metadata = {
  title: "Sideline Sidekick Admin",
  description: "Admin portal for Sideline Sidekick App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>
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
      </body>
    </html>
  );
}
