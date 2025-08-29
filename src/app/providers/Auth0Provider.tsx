"use client";

import { ReactNode } from "react";
import { Auth0Provider } from "@auth0/auth0-react";

export default function Auth0RootProvider({
  children,
}: {
  children: ReactNode;
}) {
  const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN!;
  const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID!;

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: "https://api.example.com", // opcional si usarás APIs
      }}
      cacheLocation="memory" // por defecto para pruebas locales es suficiente
      useRefreshTokens={true} //mejora sesión, opcional
    >
      {children}
    </Auth0Provider>
  );
}
