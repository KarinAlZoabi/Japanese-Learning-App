import { useState } from "react";

function EyeIcon({ hidden }) {
  return hidden ? (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M3 3l18 18M10.6 10.7a2 2 0 002.7 2.7M9.9 4.2A10.8 10.8 0 0112 4c5.2 0 8.7 4.7 9.6 6.1a3.4 3.4 0 010 3.8 14.6 14.6 0 01-2.2 2.7M6.2 6.2A15.7 15.7 0 002.4 10a3.4 3.4 0 000 3.8C3.3 15.3 6.8 20 12 20a10.9 10.9 0 004.1-.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path
        d="M2.4 10.1a3.4 3.4 0 000 3.8C3.3 15.3 6.8 20 12 20s8.7-4.7 9.6-6.1a3.4 3.4 0 000-3.8C20.7 8.7 17.2 4 12 4S3.3 8.7 2.4 10.1z"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="12"
        cy="12"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function PasswordInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  disabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputId = `auth-${name}`;

  return (
    <label
      htmlFor={inputId}
      className="block"
    >
      <span className="mb-2 block text-sm font-bold text-stone-700">
        {label}
      </span>

      <div className="relative">
        <input
          id={inputId}
          name={name}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          disabled={disabled}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${inputId}-error` : undefined}
          className={`w-full rounded-2xl border bg-white px-5 py-3 pr-14 text-[#31282d] outline-none transition placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-60 ${
            error
              ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
              : "border-pink-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          disabled={disabled}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 transition hover:text-pink-500 disabled:cursor-not-allowed"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          <EyeIcon hidden={showPassword} />
        </button>
      </div>

      {error && (
        <span
          id={`${inputId}-error`}
          className="mt-2 block text-sm font-medium text-red-500"
        >
          {error}
        </span>
      )}
    </label>
  );
}