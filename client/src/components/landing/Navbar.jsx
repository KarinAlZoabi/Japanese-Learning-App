import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-6 py-4 transition-all duration-500 sm:px-10 ${
          scrolled
            ? "border-white/40 bg-white/35 shadow-xl shadow-stone-900/10 backdrop-blur-2xl"
            : "border-white/80 bg-white/90 shadow-lg shadow-stone-900/10 backdrop-blur-xl"
        }`}
      >
        <a
          href="#home"
          className="text-2xl font-black tracking-tight text-rose-900 sm:text-3xl"
        >
          Monogatari
        </a>

        <div className="flex items-center gap-4 sm:gap-8">
          <div className="hidden items-center gap-7 text-base font-medium text-stone-700 md:flex">
            <a
              href="#features"
              className="transition hover:text-pink-500"
            >
              Features
            </a>

            <span className="h-1 w-1 rounded-full bg-pink-400" />

            <a
              href="#about"
              className="transition hover:text-pink-500"
            >
              About
            </a>

            <span className="h-1 w-1 rounded-full bg-pink-400" />

            <a
              href="#contact"
              className="transition hover:text-pink-500"
            >
              Contact
            </a>
          </div>

          <a
            href="/signin"
            className="rounded-full border border-pink-300 bg-white/60 px-5 py-2.5 font-semibold text-pink-500 transition duration-300 hover:-translate-y-0.5 hover:bg-pink-50 hover:shadow-md sm:px-7"
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
}