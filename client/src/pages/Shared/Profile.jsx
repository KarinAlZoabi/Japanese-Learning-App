import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, UserRound } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const username = user?.username || "Learner";

  async function handleSignOut() {
    if (busy) return;
    setBusy(true);
    setError("");
    try {
      await logout();
      navigate("/signin", { replace: true });
    } catch {
      setError("Sign out failed. Please check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="mx-auto max-w-3xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.19em] text-pink-500">Your account</p>
      <h1 className="text-4xl font-black tracking-tight">Profile</h1>
      <p className="mt-3 text-sm leading-7 text-stone-600">Your account details are available now. Profile editing and learning preferences will be added in a later phase.</p>
      <section className="mt-8 rounded-[2rem] border border-white bg-white p-6 shadow-xl shadow-rose-100/60 sm:p-9">
        <div className="flex items-center gap-4 border-b border-rose-100 pb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-rose-100 to-purple-100 text-pink-600"><UserRound size={29} /></div>
          <div><h2 className="text-xl font-black">{username}</h2><p className="text-sm text-stone-500">Monogatari learner</p></div>
        </div>
        <dl className="mt-7 grid gap-6 sm:grid-cols-2">
          <div><dt className="text-xs font-bold uppercase tracking-widest text-stone-500">Username</dt><dd className="mt-2 break-words text-base font-semibold">{username}</dd></div>
          <div><dt className="text-xs font-bold uppercase tracking-widest text-stone-500">Email</dt><dd className="mt-2 break-all text-base font-semibold">{user?.email || "Not available"}</dd></div>
          <div><dt className="text-xs font-bold uppercase tracking-widest text-stone-500">Learning level</dt><dd className="mt-2 text-base font-semibold capitalize">{user?.japaneseLevel || "Beginner"}</dd></div>
        </dl>
        {error && <p className="mt-5 text-sm text-rose-600" role="alert">{error}</p>}
        <button type="button" disabled={busy} onClick={handleSignOut} className="mt-9 inline-flex items-center gap-2 rounded-full border border-rose-200 px-6 py-3 text-sm font-bold text-rose-600 transition hover:bg-rose-50 focus-visible:outline-2 focus-visible:outline-pink-500 disabled:opacity-50"><LogOut size={17} /> Sign out</button>
      </section>
    </main>
  );
}
