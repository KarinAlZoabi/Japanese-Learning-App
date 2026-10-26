import { Link } from "react-router-dom";
import { ArrowRight, BookOpenText, Flower2 } from "lucide-react";
import { studyLinks } from "../../data/navigation";

export default function StudyHome() {
  return (
    <main>
      <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.19em] text-pink-500"><Flower2 size={15} /> Your learning library</p>
      <h1 className="text-4xl font-black tracking-tight">Explore study tools</h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-stone-600">Find the right place to begin. These learning tools are planned for the next development phase.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {studyLinks.filter((item) => item.to !== "/study").map((item) => (
          <Link key={item.to} to={item.to} className="group rounded-[1.7rem] border border-white bg-white/90 p-6 shadow-md shadow-rose-100/50 transition hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-pink-500">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-50 text-pink-500"><BookOpenText size={23} /></div>
            <h2 className="text-lg font-extrabold">{item.label}</h2>
            <p className="mt-2 min-h-12 text-sm leading-6 text-stone-500">{item.description}</p>
            <span className="mt-6 flex items-center justify-between border-t border-rose-50 pt-4 text-xs font-bold text-pink-500">Coming soon <ArrowRight size={17} className="transition group-hover:translate-x-1" /></span>
          </Link>
        ))}
      </div>
    </main>
  );
}
