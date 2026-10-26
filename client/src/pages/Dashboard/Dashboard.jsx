import { Link, useLocation } from "react-router-dom";
import { ArrowRight, BookOpen, BookText, Clock3, Flame, Flower2, History, MessageCircle, Search, Sparkles } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import heroArt from "../../assets/images/v2.png";
import { getDashboardWelcome } from "../../utils/dashboardWelcome";

// All four tools have destinations, but the actual learning features belong to later phases.
const shortcuts = [
  {
    label: "Kana charts",
    description: "Start with hiragana and katakana.",
    to: "/study/hiragana",
    icon: BookOpen,
    colors: "bg-rose-50 text-rose-500",
  },
  {
    label: "Vocabulary",
    description: "Explore words for everyday life.",
    to: "/study/vocabulary",
    icon: BookText,
    colors: "bg-amber-50 text-amber-600",
  },
  {
    label: "Sentence analyzer",
    description: "Understand Japanese piece by piece.",
    to: "/analyzer",
    icon: Search,
    colors: "bg-violet-50 text-violet-500",
  },
  {
    label: "AI conversation",
    description: "Practice speaking through chat.",
    to: "/chat",
    icon: MessageCircle,
    colors: "bg-sky-50 text-sky-600",
  },
];

export default function Dashboard() {
  const { user } = useAuth();
  const { state } = useLocation();
  // Only the initial signup redirect carries this flag. Logging in later does not.
  const { heading, displayName, description } = getDashboardWelcome(
    user?.username,
    state?.justRegistered === true,
  );

  return (
    <main className="space-y-7 sm:space-y-9">
      <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/90 bg-white shadow-xl shadow-rose-100/55 sm:rounded-[2.5rem]">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-rose-50/75 via-white to-fuchsia-50/20" />
        <img
          src={heroArt}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[72%_47%] opacity-25 sm:w-[75%] sm:opacity-55 lg:w-[55%] lg:opacity-85"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/15 sm:via-white/90 lg:via-white/85" />
        <div className="relative z-10 max-w-2xl px-6 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-100 bg-white/75 px-4 py-2 text-xs font-bold tracking-wide text-pink-600 shadow-sm">
            <Flower2 size={15} aria-hidden="true" /> Your learning space · 物語
          </div>
          <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-[#31282d] sm:text-5xl lg:text-[3rem]">
            {heading}<br />
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              {displayName}!
            </span>
          </h1>
         <p className="mt-4 max-w-[25rem] text-sm leading-7 text-stone-600 sm:text-base sm:leading-7">
            {description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="/study"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-200/80 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
            >
              Explore study tools <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>
        <span aria-hidden="true" className="pointer-events-none absolute bottom-5 right-6 hidden rounded-full border border-white/55 bg-white/40 px-3 py-1 text-[11px] font-semibold tracking-[0.2em] text-rose-800/70 backdrop-blur-sm lg:block">少しずつ · Little by little</span>
      </section>

      <section aria-labelledby="shortcuts-heading">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-pink-500"><Sparkles size={15} /> Your next chapter</p>
            <h2 id="shortcuts-heading" className="text-2xl font-black tracking-tight sm:text-3xl">What would you like to learn?</h2>
          </div>
          <span className="rounded-full border border-rose-100 bg-white/80 px-3 py-1.5 text-xs font-semibold text-stone-500">Tools in development</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {shortcuts.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="group flex min-h-48 flex-col rounded-[1.7rem] border border-rose-50 bg-white/95 p-5 shadow-sm shadow-rose-100/50 transition duration-200 hover:-translate-y-1 hover:border-rose-200 hover:shadow-lg hover:shadow-rose-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.colors}`}>
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <h3 className="text-base font-extrabold tracking-tight text-[#31282d]">{item.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-stone-500">{item.description}</p>
                <div className="mt-4 flex items-center justify-between border-t border-rose-50 pt-3 text-xs font-bold text-pink-500">
                  <span>View preview</span>
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr]">
        <section aria-labelledby="progress-heading" className="rounded-[1.85rem] border border-white bg-white/90 p-6 shadow-sm shadow-rose-100/50 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-pink-500">One step at a time</p>
              <h2 id="progress-heading" className="text-xl font-extrabold tracking-tight sm:text-2xl">Learning progress</h2>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-rose-50 text-pink-500"><Flame size={23} aria-hidden="true" /></span>
          </div>
          <p className="mt-3 text-sm leading-6 text-stone-500">Your study stats will appear once tracking is ready.</p>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-[#fff8fb] px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-semibold text-stone-500"><Flame size={15} className="text-pink-500" /> Study streak</span>
              <p className="mt-2 text-xl font-black text-stone-400" aria-label="Not available yet">—</p>
            </div>
            <div className="rounded-2xl bg-[#fff8fb] px-4 py-3">
              <span className="flex items-center gap-2 text-xs font-semibold text-stone-500"><Clock3 size={15} className="text-pink-500" /> Study time</span>
              <p className="mt-2 text-xl font-black text-stone-400" aria-label="Not available yet">—</p>
            </div>
          </div>
          <p className="mt-3 text-xs font-medium text-stone-400">Only real activity will be shown here.</p>
        </section>

        <section aria-labelledby="activity-heading" className="rounded-[1.85rem] border border-white bg-white/90 p-6 shadow-sm shadow-rose-100/50 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.17em] text-pink-500">Your journey so far</p>
              <h2 id="activity-heading" className="text-xl font-extrabold tracking-tight sm:text-2xl">Recent activity</h2>
            </div>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-500"><History size={23} aria-hidden="true" /></span>
          </div>
          <div className="mt-4 flex min-h-35 flex-col items-center justify-center rounded-2xl border border-dashed border-pink-200 bg-gradient-to-br from-[#fffafc] to-white px-5 py-4 text-center">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-pink-500"><Flower2 size={24} aria-hidden="true" /></span>
            <h3 className="mt-2 text-sm font-bold text-[#31282d]">Your story is just beginning</h3>
            <p className="mt-1 max-w-sm text-sm leading-6 text-stone-500">Your completed activities and saved items will appear here.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
