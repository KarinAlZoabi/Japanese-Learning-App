import { Link } from "react-router-dom";

/** The same wordmark can be used on auth pages and inside the app. */
export default function Brand({ light = false, home = "/" }) {
  return (
    <Link
      to={home}
      aria-label="Monogatari home"
      className="group inline-flex w-fit shrink-0 items-center gap-3"
    >
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md transition duration-300 group-hover:-rotate-6 group-hover:scale-105 ${
          light
            ? "border-white/40 bg-white/20 shadow-black/10"
            : "border-pink-100 bg-white/80 shadow-pink-100"
        }`}
      >
        <span className={`text-xl font-black ${light ? "text-white" : "text-pink-500"}`}>
          物
        </span>
        <span className="absolute -right-1 -top-1 text-sm" aria-hidden="true">
          🌸
        </span>
      </span>
      <span>
        <span
          className={`block text-lg font-black tracking-tight ${
            light ? "text-white" : "text-[#31282d]"
          }`}
        >
          Monogatari
        </span>
        <span
          className={`block text-[10px] font-bold uppercase tracking-[0.18em] ${
            light ? "text-white/65" : "text-pink-400"
          }`}
        >
          Your Japanese story
        </span>
      </span>
    </Link>
  );
}
