import { Link } from "react-router-dom";
import { MailQuestion } from "lucide-react";
export default function ForgotPasswordInfo() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#fff8fb] px-5">
      <section className="w-full max-w-lg rounded-[2rem] border border-white bg-white p-9 text-center shadow-xl shadow-rose-100">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-50 text-pink-500"><MailQuestion size={30}/></span>
        <h1 className="mt-6 text-2xl font-black">Password reset is coming soon</h1>
        <p className="mt-3 text-sm leading-7 text-stone-600">Self-service password recovery hasn’t been implemented yet. We don’t want to promise an email that won’t be sent.</p>
        <Link to="/signin" className="mt-7 inline-flex rounded-full bg-pink-500 px-6 py-3 text-sm font-bold text-white">Back to sign in</Link>
      </section>
    </main>
  );
}
