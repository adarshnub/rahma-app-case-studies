import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahma Case Studies",
  description:
    "Two emergency-response case studies showing how Rahma app data can support floods and Middle East crisis preparedness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
