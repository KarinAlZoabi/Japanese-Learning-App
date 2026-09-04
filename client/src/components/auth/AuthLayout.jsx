import { Link } from "react-router-dom";
import background from "../../assets/images/v2.png";

function MonogatariLogo({ light = false }) {
  return (
    <Link
      to="/"
      aria-label="Monogatari home"
      className="group inline-flex w-fit items-center gap-3"
    >
      <span
        className={`relative flex h-11 w-11 items-center justify-center rounded-2xl border shadow-lg backdrop-blur-md transition duration-300 group-hover:-rotate-6 group-hover:scale-105 ${
          light
            ? "border-white/40 bg-white/20 shadow-black/10"
            : "border-pink-100 bg-white/80 shadow-pink-100"
        }`}
      >
        <span
          className={`text-xl font-black ${
            light ? "text-white" : "text-pink-500"
          }`}
        >
          物
        </span>

        <span className="absolute -right-1 -top-1 text-sm">🌸</span>
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

export default function AuthLayout({
  children,
  title,
  description,
  footerText,
  footerLinkText,
  footerLinkTo,
}) {
  return (
    <main className="h-screen overflow-hidden bg-[#fff8fb] text-[#31282d]">
      <div className="grid h-full lg:grid-cols-[1.05fr_0.95fr]">
        {/* Artwork side */}
        <section
          className="relative hidden h-screen overflow-hidden bg-cover bg-center lg:flex"
          style={{
            backgroundImage: `url(${background})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-[#fff8fb]/20" />

          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-[#302329]/80 via-[#302329]/30 to-transparent" />

          <div className="relative z-10 flex h-full w-full flex-col justify-between p-10 xl:p-14">
            <MonogatariLogo light />

            <div className="max-w-xl pb-2 text-white">
             <p className="mb-4 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur-md">
  物語 • Monogatari
</p>

              <h2 className="text-4xl font-black leading-[1.05] tracking-tight xl:text-5xl 2xl:text-6xl">
                Every learner has a story.
              </h2>

              <p className="mt-4 max-w-lg text-base leading-7 text-white/80 xl:text-lg xl:leading-8">
                Build your Japanese skills one lesson, conversation, and
                milestone at a time.
              </p>
            </div>
          </div>
        </section>

        {/* Form side */}
        <section className="relative h-screen overflow-y-auto">
          <div className="pointer-events-none fixed right-0 top-0 h-72 w-72 rounded-full bg-pink-200/35 blur-[120px]" />

          <div className="pointer-events-none fixed bottom-0 right-0 h-72 w-72 rounded-full bg-purple-200/30 blur-[120px]" />

          <div className="relative z-10 flex min-h-full items-center justify-center px-5 py-5 sm:px-8 lg:px-10">
            <div className="w-full max-w-md">
              {/* Mobile header */}
              <div className="mb-5 flex items-center justify-between lg:hidden">
                <MonogatariLogo />

                <Link
                  to="/"
                  className="text-sm font-semibold text-stone-500 transition hover:text-pink-500"
                >
                  Back home
                </Link>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-2xl shadow-pink-100/70 backdrop-blur-xl sm:p-7">
                <div className="mb-6">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-pink-500">
                    Your story starts here
                  </p>

                  <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                    {title}
                  </h1>

                  <p className="mt-2 text-sm leading-6 text-stone-600 sm:text-base">
                    {description}
                  </p>
                </div>

                {children}

                <p className="mt-5 text-center text-sm text-stone-600">
                  {footerText}{" "}
                  <Link
                    to={footerLinkTo}
                    className="font-bold text-pink-500 transition hover:text-pink-600"
                  >
                    {footerLinkText}
                  </Link>
                </p>
              </div>

              <p className="mt-3 text-center text-[11px] leading-5 text-stone-500">
                By continuing, you agree to Monogatari&apos;s Terms of Service
                and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}