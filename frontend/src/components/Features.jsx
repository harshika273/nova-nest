import { motion } from "framer-motion";
import {
  Brain,
  HeartPulse,
  NotebookPen,
  LineChart,
  Users,
  Timer,
} from "lucide-react";

const FEATURES = [
  {
    icon: Brain,
    title: "AI Planner",
    desc: "Tell NovaNest your goals — it builds a calm, realistic week and reshuffles when life happens.",
    accent: "from-cyan-400/30 to-cyan-400/0",
  },
  {
    icon: HeartPulse,
    title: "Mood Tracker",
    desc: "30-second daily check-ins, science-backed prompts, and gentle insight on what actually moves your mood.",
    accent: "from-rose-400/30 to-rose-400/0",
  },
  {
    icon: NotebookPen,
    title: "Smart Notes",
    desc: "Notes that summarize themselves, link related ideas, and turn lectures into clean study sets.",
    accent: "from-indigo-400/30 to-indigo-400/0",
  },
  {
    icon: LineChart,
    title: "Habit Analytics",
    desc: "See streaks, energy patterns, and the habits that quietly compound — beautifully visualized.",
    accent: "from-emerald-400/30 to-emerald-400/0",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    desc: "Shared goals and study rooms with realtime presence — perfect for cohorts, labs, and side projects.",
    accent: "from-amber-400/30 to-amber-400/0",
  },
  {
    icon: Timer,
    title: "Focus Timer",
    desc: "Adaptive Pomodoro that reads the room — longer sessions on flow days, lighter on rough mornings.",
    accent: "from-violet-400/30 to-violet-400/0",
  },
];

const FeatureCard = ({ icon: Icon, title, desc, accent, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -4 }}
    data-testid={`feature-card-${title.toLowerCase().replace(/ /g, "-")}`}
    className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-7 transition-colors hover:border-white/20 light:bg-white light:border-black/[0.08] light:hover:border-black/20"
  >
    {/* Hover glow */}
    <div
      className={`pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-gradient-radial ${accent} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
      style={{
        background: `radial-gradient(circle, var(--tw-gradient-stops))`,
      }}
    />

    <div className="relative">
      <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] light:border-black/10 light:bg-black/[0.04]">
        <Icon className="h-5 w-5 text-white light:text-black" strokeWidth={1.75} />
      </div>
      <h3 className="font-heading text-xl font-medium tracking-tight">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
        {desc}
      </p>

      <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors group-hover:text-cyan-400">
        Learn more
        <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </div>
  </motion.div>
);

export const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            What's inside
          </p>
          <h2 className="font-heading text-4xl font-medium tracking-tighter md:text-5xl">
            Everything you need.{" "}
            <span className="text-zinc-500">Nothing you don't.</span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400 light:text-zinc-600">
            Six modules, one quiet workspace. Built for the way modern minds
            actually work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
