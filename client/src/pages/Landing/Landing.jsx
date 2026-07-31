import background from "../../assets/images/v2.png";
import Navbar from "../../components/landing/Navbar";
import Hero from "../../components/landing/Hero";
import FloatingSakura from "../../components/landing/FloatingSakura";

const features = [
  {
    symbol: "会",
    title: "AI Conversation",
    description:
      "Practice natural Japanese conversations with guidance adapted to your level.",
    layout: "lg:col-span-7",
    background:
      "from-pink-100/90 via-white to-rose-50",
  },
  {
    symbol: "かな",
    title: "Kana Practice",
    description:
      "Master hiragana and katakana through focused, interactive exercises.",
    layout: "lg:col-span-5",
    background:
      "from-purple-100/80 via-white to-pink-50",
  },
  {
    symbol: "語",
    title: "Vocabulary",
    description:
      "Build useful vocabulary with contextual examples and smart review.",
    layout: "lg:col-span-4",
    background:
      "from-orange-50 via-white to-pink-50",
  },
  {
    symbol: "文",
    title: "Grammar",
    description:
      "Understand Japanese grammar through clear explanations and examples.",
    layout: "lg:col-span-4",
    background:
      "from-rose-50 via-white to-purple-50",
  },
  {
    symbol: "進",
    title: "Progress Tracking",
    description:
      "See your consistency, completed lessons, and learning milestones.",
    layout: "lg:col-span-4",
    background:
      "from-pink-50 via-white to-orange-50",
  },
];

export default function Landing() {
  return (
    <main className="overflow-x-hidden bg-[#fff8fb] text-stone-800">
      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-white via-white/80 to-white/5" />

        <FloatingSakura />

        <Navbar />

        <Hero />

        <div className="absolute bottom-0 z-20 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[80px] w-[calc(100%+1.3px)] lg:h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.42,152,118.42,214.34,95.8,252.3,82.07,288.58,66,321.39,56.44Z"
              className="fill-[#fff8fb]"
            />
          </svg>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="scroll-mt-28 px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-pink-500">
              Built for real progress
            </p>

            <h2 className="text-4xl font-black tracking-tight text-[#31282d] sm:text-5xl">
              Everything your Japanese journey needs.
            </h2>

            <p className="mt-6 text-lg leading-8 text-stone-600">
              Learn, practice, and grow through tools designed to work together.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            {features.map((feature) => (
              <article
                key={feature.title}
                className={`group relative min-h-72 overflow-hidden rounded-[2rem] border border-white bg-gradient-to-br ${feature.background} p-8 shadow-lg shadow-pink-100/50 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-200/50 ${feature.layout}`}
              >
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/60 blur-2xl transition-transform duration-500 group-hover:scale-125" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/80 bg-white/80 text-xl font-black text-pink-500 shadow-sm backdrop-blur">
                    {feature.symbol}
                  </div>

                  <div className="mt-12">
                    <h3 className="text-2xl font-black text-[#352b30]">
                      {feature.title}
                    </h3>

                    <p className="mt-3 max-w-md leading-7 text-stone-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-28 bg-white px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-pink-500">
              About Monogatari
            </p>

            <h2 className="text-4xl font-black leading-tight tracking-tight text-[#31282d] sm:text-5xl">
              Learning a language should feel like building a story.
            </h2>

            <p className="mt-7 text-lg leading-8 text-stone-600">
              Monogatari brings lessons, conversation practice, vocabulary,
              grammar, and progress tracking into one calm learning experience.
            </p>

            <p className="mt-5 text-lg leading-8 text-stone-600">
              Instead of memorizing disconnected information, you build skills
              gradually and use them in meaningful contexts.
            </p>
          </div>

          <div className="relative rounded-[2.5rem] border border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-50 p-8 shadow-xl shadow-pink-100/60 sm:p-10">
            <div className="absolute right-8 top-8 text-7xl font-black text-pink-100">
              物語
            </div>

            <div className="relative space-y-8">
              {[
                {
                  number: "01",
                  title: "Learn",
                  text: "Discover useful concepts through focused lessons.",
                },
                {
                  number: "02",
                  title: "Practice",
                  text: "Use what you learned through interactive activities.",
                },
                {
                  number: "03",
                  title: "Grow",
                  text: "Track your progress and build lasting confidence.",
                },
              ].map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-500 font-bold text-white shadow-lg shadow-pink-200">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-[#352b30]">
                      {step.title}
                    </h3>

                    <p className="mt-1 leading-7 text-stone-600">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-28 bg-[#3a2931] px-6 py-24 sm:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#fff8fb] shadow-2xl lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-pink-500 to-rose-400 p-10 text-white sm:p-14">
            <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/75">
                Contact
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight sm:text-5xl">
                Have something to tell us?
              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-white/85">
                Questions, feedback, and ideas are always welcome. Send us a
                message and help shape the Monogatari experience.
              </p>
            </div>
          </div>

          <form
            className="space-y-6 p-8 sm:p-12"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-stone-700">
                  Name
                </span>

                <input
                  type="text"
                  name="name"
                  className="w-full rounded-2xl border border-pink-100 bg-white px-5 py-4 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  placeholder="Your name"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-bold text-stone-700">
                  Email
                </span>

                <input
                  type="email"
                  name="email"
                  className="w-full rounded-2xl border border-pink-100 bg-white px-5 py-4 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                  placeholder="you@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-bold text-stone-700">
                Message
              </span>

              <textarea
                name="message"
                rows="5"
                className="w-full resize-none rounded-2xl border border-pink-100 bg-white px-5 py-4 outline-none transition focus:border-pink-300 focus:ring-4 focus:ring-pink-100"
                placeholder="Write your message..."
              />
            </label>

            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-200 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#3a2931] px-6 pb-10 text-center text-sm text-white/55">
        © 2026 Monogatari. Every learner has a story.
      </footer>
    </main>
  );
}