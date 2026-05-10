import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Zap } from "lucide-react";
import { MiniDashboard } from "./MiniDashboard";

const HERO_BG =
  "https://static.prod-images.emergentagent.com/jobs/6c3ca1fd-7885-4bce-9fb9-61d5425ba3cc/images/95231653ab20171c000ed6b500c8a4a601a0e5b190ef79e39381416fd42a45c1.png";

export const Hero = ({ onGetStarted, onWatchDemo }) => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-screen"
        />
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
      </div>

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl float-slower" />
      <div className="pointer-events-none absolute -right-20 top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl float-slow" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md light:border-black/10 light:bg-black/[0.03]"
              data-testid="hero-badge"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300 light:text-zinc-700">
                Now with focus mode v2 — built on GPT-5.2
              </span>
            </motion.div>

            <h1
              data-testid="hero-headline"
              className="font-heading text-5xl font-medium leading-[1.02] tracking-tighter md:text-6xl lg:text-7xl"
            >
              Organize your life{" "}
              <span className="text-gradient-cyan">with AI</span>
            </h1>

            <p
              data-testid="hero-subheadline"
              className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400 md:text-xl light:text-zinc-600"
            >
              The thinking person's productivity OS. NovaNest blends a smart
              planner, mood tracker, and habit analytics into one calm,
              beautiful workspace built for students and ambitious creators.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onGetStarted}
                data-testid="hero-cta-get-started"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-100"
              >
                Get Started
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onWatchDemo}
                data-testid="hero-cta-watch-demo"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/[0.08] light:border-black/10 light:bg-black/[0.03] light:text-black"
              >
                <PlayCircle className="h-4 w-4" />
                Watch Demo
              </motion.button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-cyan-400" />
                <span>Free 14-day trial</span>
              </div>
              <div className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span>No credit card required</span>
              <div className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span>Cancel anytime</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <MiniDashboard />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
