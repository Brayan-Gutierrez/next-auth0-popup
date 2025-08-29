"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated, isLoading, loginWithPopup } = useAuth0();

  if (isLoading) return <p>cargando...</p>;

  if (!isAuthenticated) {
    return (
      <div>
        <p>Necesitas iniciarsesión para acceder.</p>
        <button onClick={() => loginWithPopup()}>Ingresa con Popup</button>
      </div>
    );
  }

  return <>{children}</>;
}
