"use client"; // Mark this as a client component

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type ClientLayoutWrapperProps = {
  children: ReactNode;
  layout: ReactNode;
};

export default function ClientLayoutWrapper({ children, layout }: ClientLayoutWrapperProps) {
  const pathname = usePathname();

  // Define the paths where the layout should not be applied
  const noLayoutNeeded = ["/", "/signup/", "/forgot-password/"];

  if (noLayoutNeeded.includes(pathname)) {
    return (
      <html lang="en">
        <head></head>
        <body>{children}</body>
      </html>
    ); // Return only the page content without the layout
  }

  return <>{layout}</>; // Return layout with content
}
