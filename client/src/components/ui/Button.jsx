export default function Button({
  children,
  variant = "primary",
}) {
  const styles = {
    // Upgraded primary button from[cite: 4]
    primary:
      "rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-300/40 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl hover:shadow-pink-300/60",
    
    // Upgraded secondary button from[cite: 4]
    secondary:
      "rounded-full border border-pink-300 bg-white/70 px-8 py-4 font-semibold text-pink-500 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-pink-50 hover:shadow-lg hover:shadow-pink-200/50",
  };

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}