import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const recentActivities = [
  {
    type: "analyzer",
    text: 'Analyzed: “...”',
    time: "2 minutes ago",
  },
  {
    type: "chat",
    text: "Chat Level: Beginner",
    time: "30 minutes ago",
  },
  {
    type: "flashcards",
    text: "Reviewed Flashcards",
    time: "2 hours ago",
  },
];

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-6 w-6"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M20 11.5c0 4.1-4 7.5-9 7.5-1.1 0-2.2-.2-3.2-.5L4 20l1.1-3.1C3.8 15.6 3 13.7 3 11.5 3 7.4 7 4 12 4s8 3.4 8 7.5Z" />
      <path d="M15.5 15.5c.5 2.8 3.2 4.9 6.5 4.9.3 0 .7 0 1-.1L22 18c.7-.8 1-1.8 1-2.9 0-2.2-1.5-4.1-3.7-4.8" />
    </svg>
  );
}

function KanaIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      className="h-6 w-6"
    >
      <path d="M6 5h12" />
      <path d="M6 10h8" />
      <path d="M6 15h12" />
      <path d="M6 20h8" />
    </svg>
  );
}

function VocabIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
    >
      <path d="M5 19.5h14" />
      <path d="M8 17 12 5l4 12" />
      <path d="M9.5 13h5" />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-10 w-10"
    >
      <path d="M12.5 22c4.1 0 7.5-2.8 7.5-7.1 0-3.2-1.8-5.5-4.5-7.9.1 2.1-.6 3.5-1.9 4.4.1-4.2-2.2-7.6-5.2-9.4.2 3.8-1.9 5.9-3.2 8.2C4.4 11.8 4 13.3 4 14.9 4 19.2 7.5 22 12.5 22Z" />
    </svg>
  );
}

function GraduationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="m12 3 10 5-10 5L2 8l10-5Z" />
      <path d="M6 11v5.2c0 1.7 2.7 3.8 6 3.8s6-2.1 6-3.8V11l-6 3-6-3Z" />
      <path d="M22 8v6" />
    </svg>
  );
}

function SakuraIcon() {
  return <span className="text-3xl leading-none">🌸</span>;
}

const quickActions = [
  {
    label: "Sentence Analyzer",
    to: "/analyzer",
    icon: <SearchIcon />,
  },
  {
    label: "AI Chat Partner",
    to: "/chat",
    icon: <ChatIcon />,
  },
  {
    label: "Kana Charts",
    to: "/study/kana",
    icon: <KanaIcon />,
  },
  {
    label: "Vocab List",
    to: "/study/vocabulary",
    icon: <VocabIcon />,
  },
];

export default function Dashboard() {
  const { user } = useAuth();

  const username = user?.username || "John Doe";

  return (
    <main className="min-h-screen bg-[#faf7f8] px-4 py-5 text-[#333033] sm:px-6 lg:px-9">
      <div className="mx-auto flex min-h-[calc(100vh-2.5rem)] max-w-[1440px] flex-col gap-4">
        {/* Navbar */}
        <nav className="flex min-h-[69px] items-center justify-between rounded-2xl border-2 border-pink-200 bg-[#fdf9fb]/95 px-6 shadow-sm backdrop-blur-md sm:px-9">
          <Link
            to="/dashboard"
            className="text-2xl font-medium tracking-tight text-[#333033]"
          >
            Logo
          </Link>

          <div className="hidden items-center gap-12 md:flex">
            <Link
              to="/dashboard"
              className="text-lg font-medium transition hover:text-pink-500"
            >
              Dashboard
            </Link>

            <Link
              to="/analyzer"
              className="text-lg font-medium transition hover:text-pink-500"
            >
              Analyzer
            </Link>

            <Link
              to="/chat"
              className="text-lg font-medium transition hover:text-pink-500"
            >
              Chat
            </Link>

            <Link
              to="/study"
              className="flex items-center gap-1 text-lg font-medium transition hover:text-pink-500"
            >
              Study
              <svg
                viewBox="0 0 12 8"
                className="h-3 w-3 fill-current"
              >
                <path d="M1 1.5 6 6.5l5-5" />
              </svg>
            </Link>

            <Link
              to="/profile"
              className="text-lg font-medium transition hover:text-pink-500"
            >
              Profile
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-full p-2 text-stone-700 md:hidden"
            aria-label="Open menu"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </nav>

        {/* Dashboard */}
        <section className="grid min-h-0 flex-1 grid-cols-1 gap-2 lg:grid-cols-[418px_minmax(0,1fr)]">
          {/* Left panel */}
          <aside className="flex flex-col rounded-2xl border-2 border-pink-200 bg-[#fdf9fb]/95 px-6 py-8 sm:px-8 lg:py-40">
            <div>
              <h2 className="flex items-center gap-2 text-3xl font-bold tracking-tight">
                <SakuraIcon />
                Hello, {username}!
              </h2>

              <h3 className="mt-10 text-2xl font-medium">
                Quick Actions:
              </h3>

              <div className="mt-8 space-y-4">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    to={action.to}
                    className="flex h-[70px] items-center gap-3 rounded-full border-2 border-pink-200 bg-white px-6 text-xl font-medium shadow-[0_3px_3px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-pink-300 hover:shadow-md"
                  >
                    <span className="text-[#303034]">
                      {action.icon}
                    </span>

                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          {/* Main panel */}
          <section className="relative min-h-[650px] overflow-hidden rounded-2xl border-2 border-pink-200 bg-[#fdf9fb]">
            {/* Sakura decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 top-14 h-[420px] w-[420px] rounded-full bg-pink-100/40 blur-3xl" />

              <div className="absolute bottom-[-120px] right-[-70px] text-[210px] opacity-[0.12]">
                🌸
              </div>

              <div className="absolute bottom-[-70px] left-1/3 h-40 w-[600px] rounded-full bg-purple-100/40 blur-3xl" />
            </div>

            <div className="relative z-10 px-7 py-9 sm:px-9 lg:px-9 lg:py-10">
              <h1 className="text-center text-4xl font-bold tracking-tight">
                Dashboard
              </h1>

              {/* Stats */}
              <div className="mt-20">
                <div className="flex items-center gap-3">
                  <span className="text-pink-300">
                    <FlameIcon />
                  </span>

                  <p className="text-4xl font-medium">
                    Streak: 3 days
                  </p>
                </div>

                <p className="mt-5 text-2xl">
                  You’ve studied 15 minutes today.
                </p>

                <Link
                  to="/study"
                  className="mt-7 inline-flex rounded-full bg-gradient-to-r from-purple-200 to-blue-200 px-5 py-2.5 text-xl font-medium transition hover:brightness-105"
                >
                  Resume Last Activity
                </Link>
              </div>

              {/* Divider */}
              <div className="mt-3 border-b-8 border-pink-100/90" />

              {/* Recent Activity */}
              <div className="mt-8">
                <h2 className="text-2xl font-medium">
                  Recent Activity
                </h2>

                <div className="mt-7 space-y-3">
                  {recentActivities.map((activity) => {
                    const isChat = activity.type === "chat";
                    const isFlashcards =
                      activity.type === "flashcards";

                    return (
                      <div
                        key={activity.text}
                        className="flex min-h-[77px] items-center justify-between gap-4 rounded-full border-2 border-pink-200 bg-white px-6"
                      >
                        <div className="flex min-w-0 items-center gap-4">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${
                              isChat
                                ? "bg-blue-100"
                                : "bg-pink-100"
                            }`}
                          >
                            {isChat ? (
                              <ChatIcon />
                            ) : isFlashcards ? (
                              <GraduationIcon />
                            ) : (
                              <SearchIcon />
                            )}
                          </div>

                          <span className="truncate text-xl">
                            {activity.text}
                          </span>
                        </div>

                        <span className="shrink-0 text-base text-stone-400">
                          {activity.time}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}