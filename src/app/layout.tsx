import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Auth0RootProvider from "./providers/Auth0Provider";

export const metadata: Metadata = {
  title: "Next + Auth0 Popup",
  description: "Auth0 con login popup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Auth0RootProvider>{children}</Auth0RootProvider>
      </body>
    </html>
  );
}
