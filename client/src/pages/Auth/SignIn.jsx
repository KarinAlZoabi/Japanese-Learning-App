import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const initialForm = {
  email: "",
  password: "",
};

export default function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { login } = useAuth();
  
  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((current) => ({
        ...current,
        [name]: "",
      }));
    }

    if (serverError) {
      setServerError("");
    }
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Please enter your password.";
    }

    return nextErrors;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setServerError("");
    setIsSubmitting(true);

   try {
  await login(
    form.email.trim().toLowerCase(),
    form.password,
    rememberMe
  );

  const destination =
    location.state?.from?.pathname || "/dashboard";

  navigate(destination, {
    replace: true,
  });
} catch (error) {
  const message =
    error.response?.data?.message ||
    "The email or password you entered is incorrect.";

  setServerError(message);
} finally {
  setIsSubmitting(false);
}
  }

  return (
    <AuthLayout
      title="Welcome back."
      description="Continue your Japanese learning story from where you left off."
      footerText="New to Monogatari?"
      footerLinkText="Create an account"
      footerLinkTo="/signup"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-5"
        noValidate
      >
        {serverError && (
          <div
            role="alert"
            className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium leading-6 text-red-600"
          >
            {serverError}
          </div>
        )}

        <AuthInput
          label="Email address"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          autoComplete="email"
          error={errors.email}
          disabled={isSubmitting}
        />

        <PasswordInput
          label="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Enter your password"
          autoComplete="current-password"
          error={errors.password}
          disabled={isSubmitting}
        />

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-stone-600">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(event) => setRememberMe(event.target.checked)}
              disabled={isSubmitting}
              className="h-4 w-4 rounded border-pink-200 accent-pink-500"
            />

            <span>Remember me</span>
          </label>

          <Link
            to="/forgot-password"
            className="font-bold text-pink-500 transition hover:text-pink-600"
          >
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-4 font-bold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-3">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Signing in...
            </span>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
    </AuthLayout>
  );
}