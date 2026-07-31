import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.15,
        staggerChildren: 0.16,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-24 pt-36 sm:px-10 lg:pt-32">
      <div className="pointer-events-none absolute right-[5%] top-[24%] h-96 w-96 rounded-full bg-pink-300/20 blur-[150px]" />

      <div className="pointer-events-none absolute left-0 top-[35%] h-72 w-72 rounded-full bg-white/50 blur-[120px]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-20 max-w-2xl"
      >
        <motion.p
          variants={item}
          className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-2 text-pink-600"
        >
          🌸 Every learner has a story.
        </motion.p>

        

        <motion.h1
          variants={item}
          className="mt-7 text-6xl font-black leading-[0.95] tracking-tight text-[#292329] sm:text-7xl lg:text-8xl"
        >
          Start{" "}
          <span className="bg-gradient-to-r from-pink-500 to-rose-300 bg-clip-text text-transparent">
            yours.
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-8 text-stone-600 sm:text-xl sm:leading-9"
        >
          Learn Japanese through immersive lessons, AI-powered conversations,
          interactive practice, and personalized learning.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="/signup"
            className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-300/40 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-pink-300/50"
          >
            Start Learning
          </a>

          <a
            href="#features"
            className="rounded-full border border-pink-300 bg-white/75 px-8 py-4 font-semibold text-pink-500 shadow-sm backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-pink-50 hover:shadow-lg"
          >
            Explore
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}