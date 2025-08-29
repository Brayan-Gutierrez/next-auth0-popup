import CallApi from "../components/CallApi";
import ProtectedRoute from "../components/ProtectedRoute";

export default function SecurePage() {
  return (
    <ProtectedRoute>
      <main className="p-[24px]">
        <h1>Zona segura</h1>
        <p>Solo ves esto si estás logueado.</p>
        <CallApi />
      </main>
    </ProtectedRoute>
  );
}
