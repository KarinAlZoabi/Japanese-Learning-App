import { BrowserRouter, Route, Routes } from "react-router-dom";

import Landing from "./pages/Landing/Landing";
import SignUp from "./pages/Auth/Signup";
import SignIn from "./pages/Auth/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";

import ProtectedRoute from "./components/auth/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public */}
          <Route
            path="/"
            element={<Landing />}
          />

          <Route
            path="/signup"
            element={<SignUp />}
          />

          <Route
            path="/signin"
            element={<SignIn />}
          />
{/* Protected */}
<Route element={<ProtectedRoute />}>
  <Route
    path="/dashboard"
    element={<Dashboard />}
  />
</Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}