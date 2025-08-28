"use client";

import { useAuth0 } from "@auth0/auth0-react";

export default function AuthButtons() {
  const { isAuthenticated, user, loginWithPopup, logout, isLoading, error } =
    useAuth0();

  if (isLoading) return <button disabled> Cargando...</button>;

  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="grid gap-12">
      {!isAuthenticated ? (
        <button onClick={() => loginWithPopup()}>Ingresar con Popup</button>
      ) : (
        <>
          <div>Hola, {user?.name ?? user?.email}</div>
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Cerrar sesión
          </button>
        </>
      )}
    </div>
  );
}
