export default function AuthInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  error,
  disabled = false,
}) {
  const inputId = `auth-${name}`;

  return (
    <label
      htmlFor={inputId}
      className="block"
    >
      <span className="mb-2 block text-sm font-bold text-stone-700">
        {label}
      </span>

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full rounded-2xl border bg-white px-5 py-3 text-[#31282d] outline-none transition placeholder:text-stone-400 disabled:cursor-not-allowed disabled:opacity-60 ${
          error
            ? "border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100"
            : "border-pink-100 focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
        }`}
      />

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