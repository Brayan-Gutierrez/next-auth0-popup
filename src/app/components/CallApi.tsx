"use client";

import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function CallApi() {
  const { getAccessTokenSilently } = useAuth0();
  const [message, setMessage] = useState<string | null>(null);

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);
      const res = await fetch("http:/localhost:4000/protegido", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setMessage(JSON.stringify(data));
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="m-[20px]">
      <button onClick={callApi}>Llamar API protegida</button>
      {message && <pre>{message}</pre>}
    </div>
  );
}
