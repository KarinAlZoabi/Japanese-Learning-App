import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { BookOpen, ChevronDown, LayoutDashboard, LibraryBig, LogOut, Menu, MessageCircle, UserRound, X } from "lucide-react";
import Brand from "../ui/Brand";
import { useAuth } from "../../context/AuthContext";
import { aiLinks, studyLinks } from "../../data/navigation";

const navClass = ({ isActive }) =>
  `inline-flex items-center rounded-full px-4 py-2.5 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 ${
    isActive ? "bg-pink-50 text-pink-600" : "text-stone-600 hover:bg-pink-50/70 hover:text-pink-600"
  }`;

function DesktopDropdown({ title, items, active }) {
  return (
    <details className="group relative" data-nav-dropdown>
      <summary
        className={`flex cursor-pointer list-none items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-semibold transition hover:bg-pink-50 focus-visible:outline-2 focus-visible:outline-pink-500 [&::-webkit-details-marker]:hidden ${
          active ? "bg-pink-50 text-pink-600" : "text-stone-600 hover:text-pink-600"
        }`}
      >
        {title}
        <ChevronDown size={15} className="transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="absolute left-1/2 top-full z-50 mt-3 w-64 -translate-x-1/2 rounded-[1.3rem] border border-pink-100 bg-white p-2 shadow-xl shadow-pink-100/70">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={(event) => { event.currentTarget.closest("details").open = false; }}
            className={({ isActive }) => `block rounded-xl px-4 py-2.5 text-sm transition hover:bg-pink-50 ${isActive ? "bg-pink-50 font-semibold text-pink-600" : "text-stone-700"}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </details>
  );
}

export default function AppLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoutError, setLogoutError] = useState("");
  const [loggingOut, setLoggingOut] = useState(false);
  const isStudy = pathname.startsWith("/study") || pathname.startsWith("/flashcards") || pathname.startsWith("/quizzes");
  const isAI = pathname.startsWith("/analyzer") || pathname.startsWith("/chat");

  useEffect(() => {
    // Close native desktop dropdowns when clicking outside the header or pressing Escape.
    function onPointerDown(event) {
      if (!event.target.closest("[data-nav-dropdown]")) {
        document.querySelectorAll("[data-nav-dropdown]").forEach((el) => { el.open = false; });
      }
    }
    function onKeyDown(event) {
      if (event.key === "Escape") {
        document.querySelectorAll("[data-nav-dropdown]").forEach((el) => { el.open = false; });
        setMobileOpen(false);
      }
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  async function handleLogout() {
    if (loggingOut) return;
    setLoggingOut(true);
    setLogoutError("");
    try {
      await logout();
      setMobileOpen(false);
      navigate("/signin", { replace: true });
    } catch {
      setLogoutError("Sign out failed. Please check your connection and try again.");
    } finally {
      setLoggingOut(false);
    }
  }

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-xl px-4 py-3 text-sm font-semibold ${isActive ? "bg-pink-50 text-pink-600" : "text-stone-700 hover:bg-pink-50"}`;

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#fff8fb] text-[#31282d]">
      <div className="pointer-events-none absolute left-[-9rem] top-40 h-80 w-80 rounded-full bg-rose-100/70 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[32rem] h-80 w-80 rounded-full bg-purple-100/70 blur-[115px]" />

      <header className="sticky top-0 z-50 border-b border-rose-100/70 bg-[#fff8fb] px-4 py-3 shadow-[0_8px_24px_rgba(251,207,232,0.12)] sm:px-7 sm:py-3.5 lg:px-10">
        <div className="relative mx-auto max-w-7xl rounded-[1.7rem] border border-white/90 bg-white/95 px-4 py-3 shadow-lg shadow-rose-100/60 backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-3">
            <Brand home="/dashboard" />
            <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
              <NavLink className={navClass} to="/dashboard" end><LayoutDashboard size={16} className="mr-2" /> Dashboard</NavLink>
              <DesktopDropdown title="Study" items={studyLinks} active={isStudy} />
              <DesktopDropdown title="AI Tools" items={aiLinks} active={isAI} />
              <NavLink className={navClass} to="/library">Library</NavLink>
              <NavLink className={navClass} to="/profile">Profile</NavLink>
            </nav>
            <div className="hidden items-center gap-2 lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-purple-100 font-black text-rose-600" aria-label={`Signed in as ${user?.username || "a learner"}`}>
                {(user?.username || "M").slice(0, 1).toUpperCase()}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                disabled={loggingOut}
                title="Sign out"
                aria-label="Sign out"
                className="rounded-full p-2.5 text-stone-500 transition hover:bg-rose-50 hover:text-rose-600 focus-visible:outline-2 focus-visible:outline-pink-500 disabled:opacity-50"
              >
                <LogOut size={19} />
              </button>
            </div>
            <button
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="mobile-app-nav"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((value) => !value)}
              className="rounded-xl border border-pink-100 bg-pink-50 p-2.5 text-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500 lg:hidden"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
          {mobileOpen && (
            <nav id="mobile-app-nav" aria-label="Mobile navigation" className="mt-4 max-h-[65vh] space-y-1 overflow-y-auto border-t border-pink-100 pt-3 lg:hidden">
              <NavLink to="/dashboard" end className={mobileLinkClass} onClick={() => setMobileOpen(false)}><LayoutDashboard size={16} className="mr-2 inline" />Dashboard</NavLink>
              <p className="px-4 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.17em] text-pink-500"><BookOpen size={14} className="mr-2 inline" />Study</p>
              {studyLinks.map((item) => <NavLink key={item.to} to={item.to} className={mobileLinkClass} onClick={() => setMobileOpen(false)}>{item.label}</NavLink>)}
              <p className="px-4 pb-1 pt-3 text-[11px] font-bold uppercase tracking-[0.17em] text-pink-500"><MessageCircle size={14} className="mr-2 inline" />AI Tools</p>
              {aiLinks.map((item) => <NavLink key={item.to} to={item.to} className={mobileLinkClass} onClick={() => setMobileOpen(false)}>{item.label}</NavLink>)}
              <NavLink to="/library" className={mobileLinkClass} onClick={() => setMobileOpen(false)}><LibraryBig size={16} className="mr-2 inline" />Library</NavLink>
              <NavLink to="/profile" className={mobileLinkClass} onClick={() => setMobileOpen(false)}><UserRound size={16} className="mr-2 inline" />Profile</NavLink>
              <button type="button" onClick={handleLogout} disabled={loggingOut} className="w-full rounded-xl px-4 py-3 text-left text-sm font-semibold text-rose-600 hover:bg-pink-50 disabled:opacity-50"><LogOut size={16} className="mr-2 inline" />Sign out</button>
            </nav>
          )}
        </div>
      </header>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-10 pt-6 sm:px-7 sm:pt-7 lg:px-10 lg:pt-8">
        {logoutError && <p role="alert" className="mb-4 rounded-xl bg-rose-50 p-3 text-sm text-rose-700">{logoutError}</p>}
        <Outlet />
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-rose-100/80 pt-6 text-xs text-stone-500">
          <p>Monogatari · Every learner has a story.</p>
          <Link to="/dashboard" className="font-semibold text-rose-500 transition hover:text-rose-700">Back to your story ↑</Link>
        </footer>
      </div>
    </div>
  );
}
