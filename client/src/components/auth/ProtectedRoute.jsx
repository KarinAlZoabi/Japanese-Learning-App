import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function ProtectedRoute() {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Wait until AuthContext finishes checking the session.
  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff8fb]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-pink-100 border-t-pink-500" />

          <p className="text-sm font-semibold text-stone-500">
            Loading your story...
          </p>
        </div>
      </main>
    );
  }

  // Not logged in → send them to Sign In.
  if (!user) {
    return (
      <Navigate
        to="/signin"
        replace
        state={{ from: location }}
      />
    );
  }

  // Logged in → allow access to the protected route.
  return <Outlet />;
}