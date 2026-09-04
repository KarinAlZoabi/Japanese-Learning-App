import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordInput from "../../components/auth/PasswordInput";
import { useAuth } from "../../context/AuthContext";

const initialForm = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function SignUp() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    if (!form.username.trim()) {
      nextErrors.username = "Please enter your name.";
    } else if (form.username.trim().length < 2) {
      nextErrors.username = "Your username must contain at least 2 characters.";
    }

    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!form.password) {
      nextErrors.password = "Please create a password.";
    } else if (form.password.length < 8) {
      nextErrors.password = "Your password must contain at least 8 characters.";
    }

    if (!form.confirmPassword) {
      nextErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      nextErrors.confirmPassword = "The passwords do not match.";
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
    await register({
      username: form.username.trim(),
      email: form.email.trim().toLowerCase(),
      password: form.password,
    });

    navigate("/dashboard", {
      replace: true,
    });
  } catch (error) {
    const message =
      error.response?.data?.message ||
      "We could not create your account. Please try again.";

    setServerError(message);
  } finally {
    setIsSubmitting(false);
  }
}
  return (
    <AuthLayout
      title="Begin your story."
      description="Create your account and start building your Japanese learning journey."
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkTo="/signin"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4"
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
          label="Username"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Choose a username"
          autoComplete="username"
          error={errors.username}
          disabled={isSubmitting}
        />

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
          placeholder="At least 8 characters"
          autoComplete="new-password"
          error={errors.password}
          disabled={isSubmitting}
        />

        <PasswordInput
          label="Confirm password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Enter your password again"
          autoComplete="new-password"
          error={errors.confirmPassword}
          disabled={isSubmitting}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-3.5 font-bold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-65 disabled:hover:translate-y-0"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-3">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
              Creating account...
            </span>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
    </AuthLayout>
  );
}