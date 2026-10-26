import { Link } from "react-router-dom";
import { ArrowLeft, Flower2, Sparkles } from "lucide-react";

/** A real route with truthful status until the feature's implementation phase. */
export default function FeaturePlaceholder({ title, description, section = "Learning feature" }) {
  return (
    <main className="flex min-h-[55vh] items-center justify-center">
      <section className="relative isolate w-full max-w-3xl overflow-hidden rounded-[2.25rem] border border-white bg-white px-6 py-12 text-center shadow-xl shadow-rose-100/60 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-purple-100/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-rose-100 blur-3xl" />
        <div className="relative">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-pink-100 to-purple-100 text-pink-500"><Flower2 size={30} strokeWidth={1.7} /></span>
          <p className="mt-6 text-xs font-extrabold uppercase tracking-[0.2em] text-pink-500">{section} · In development</p>
          <h1 className="mt-3 text-3xl font-black tracking-tight text-[#31282d] sm:text-4xl">{title}</h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-8 text-stone-600">{description}</p>
          <div className="mx-auto mt-7 max-w-sm rounded-2xl border border-pink-100 bg-[#fff8fb] px-5 py-4 text-sm leading-6 text-stone-600"><Sparkles size={16} className="mr-2 inline text-pink-500" />This feature is planned, but isn’t ready to use yet.</div>
          <Link to="/dashboard" className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-rose-200 transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"><ArrowLeft size={17} /> Back to dashboard</Link>
        </div>
      </section>
    </main>
  );
}
