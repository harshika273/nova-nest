import { motion } from "framer-motion";
import { Check, Flame, Target } from "lucide-react";

const BARS = [42, 68, 55, 80, 64, 92, 76];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

export const MiniDashboard = () => {
  return (
    <div data-testid="mini-dashboard" className="relative">
      {/* Glow */}
      <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-cyan-500/20 via-indigo-500/10 to-transparent blur-2xl" />

      <motion.div
        initial={{ rotate: -1 }}
        animate={{ rotate: 0 }}
        whileHover={{ rotate: 0, y: -4 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl border border-white/10 bg-[#0A0A0A] p-5 shadow-2xl light:bg-white light:border-black/10"
      >
        {/* Header */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="font-heading text-xs font-medium tracking-wide text-zinc-500">
            novanest.app/today
          </div>
          <div className="text-xs text-zinc-600">⌘K</div>
        </div>

        {/* Greeting */}
        <div className="mb-5">
          <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Tuesday · Feb 11
          </div>
          <div className="mt-1 font-heading text-2xl font-medium tracking-tight">
            Good morning, Maya
          </div>
        </div>

        {/* Streak chart card */}
        <div className="mb-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4 light:bg-black/[0.02] light:border-black/[0.06]">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Flame className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium">12-day streak</span>
            </div>
            <span className="text-xs text-zinc-500">This week</span>
          </div>
          <div className="flex h-24 items-end gap-2">
            {BARS.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-md ${
                  i === 5
                    ? "bg-gradient-to-t from-cyan-500 to-cyan-300"
                    : "bg-white/10 light:bg-black/15"
                }`}
              />
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            {DAYS.map((d, i) => (
              <span
                key={i}
                className="flex-1 text-center text-[10px] text-zinc-500"
              >
                {d}
              </span>
            ))}
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-2">
          {[
            { text: "Finish thesis chapter 3", done: true },
            { text: "Run 5km · log mood", done: true },
            { text: "Review calculus deck", done: false },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 light:bg-black/[0.02] light:border-black/[0.06]"
            >
              <div
                className={`flex h-5 w-5 items-center justify-center rounded-md border ${
                  t.done
                    ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-300"
                    : "border-white/15 light:border-black/20"
                }`}
              >
                {t.done && <Check className="h-3 w-3" strokeWidth={3} />}
              </div>
              <span
                className={`text-sm ${
                  t.done ? "text-zinc-500 line-through" : "text-zinc-200 light:text-zinc-800"
                }`}
              >
                {t.text}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Floating mood card */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute -right-4 -top-4 hidden rounded-2xl border border-white/10 bg-[#0A0A0A]/80 p-3 shadow-xl backdrop-blur-md sm:block float-slow light:bg-white/80 light:border-black/10"
      >
        <div className="flex items-center gap-2">
          <div className="font-heading text-2xl">😌</div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">
              Mood
            </div>
            <div className="text-sm font-medium">Calm · 8.2</div>
          </div>
        </div>
      </motion.div>

      {/* Floating focus card */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.05, duration: 0.6 }}
        className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-cyan-400/20 bg-[#0A0A0A]/80 p-3 shadow-xl backdrop-blur-md sm:flex float-slower light:bg-white/80"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-500">
            <Target className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-wider text-zinc-500">
              Focus
            </div>
            <div className="text-sm font-medium">2h 14m today</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MiniDashboard;
