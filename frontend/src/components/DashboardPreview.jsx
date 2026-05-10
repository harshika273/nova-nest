import { motion } from "framer-motion";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  Calendar as CalendarIcon,
  Flame,
  Sparkles,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const focusData = [
  { d: "M", v: 2.1 }, { d: "T", v: 3.4 }, { d: "W", v: 2.8 },
  { d: "T", v: 4.2 }, { d: "F", v: 3.6 }, { d: "S", v: 1.8 }, { d: "S", v: 2.4 },
];
const habitData = [
  { d: "M", v: 60 }, { d: "T", v: 80 }, { d: "W", v: 72 },
  { d: "T", v: 90 }, { d: "F", v: 85 }, { d: "S", v: 50 }, { d: "S", v: 70 },
];
const moodSplit = [
  { name: "Calm", value: 42, color: "#00E5FF" },
  { name: "Focused", value: 30, color: "#4F46E5" },
  { name: "Tired", value: 18, color: "#A855F7" },
  { name: "Anxious", value: 10, color: "#F472B6" },
];

const TASKS = [
  { t: "Standup w/ research group", time: "9:30", done: true },
  { t: "Draft chapter 3 outline", time: "10:15", done: true },
  { t: "Calc problem set #4", time: "13:00", done: false },
  { t: "Yoga · 20 min", time: "18:00", done: false },
];

const CAL_DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const ACTIVE_DAYS = [3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25];
const TODAY = 25;

export const DashboardPreview = () => {
  return (
    <section
      id="dashboard"
      data-testid="dashboard-preview-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Your command center
          </p>
          <h2 className="font-heading text-4xl font-medium tracking-tighter md:text-5xl">
            One view of <span className="text-gradient-cyan">everything you're becoming.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* outer glow */}
          <div className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-cyan-500/15 via-indigo-500/10 to-transparent blur-3xl" />

          <div className="relative rounded-[28px] border border-white/[0.08] bg-[#0A0A0A] p-4 shadow-2xl light:bg-white light:border-black/[0.08] md:p-6">
            {/* Window chrome */}
            <div className="mb-5 flex items-center justify-between border-b border-white/[0.06] pb-4 light:border-black/[0.06]">
              <div className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-3 font-heading text-sm font-medium tracking-tight">
                  Today · Tuesday Feb 11
                </span>
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400 sm:flex light:border-black/10 light:bg-black/[0.03]">
                <Sparkles className="h-3 w-3 text-cyan-400" />
                Ask NovaNest anything
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
              {/* Focus area chart */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 light:bg-black/[0.02] light:border-black/[0.06] lg:col-span-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500">
                      <TrendingUp className="h-3.5 w-3.5" /> Focus this week
                    </div>
                    <div className="mt-1 font-heading text-2xl font-medium">
                      19h 23m
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-400">
                    +14% vs last
                  </span>
                </div>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={focusData}>
                      <defs>
                        <linearGradient id="cyan" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#00E5FF" stopOpacity={0.6} />
                          <stop offset="100%" stopColor="#00E5FF" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="d" hide />
                      <Tooltip
                        contentStyle={{
                          background: "#0A0A0A",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                        cursor={{ stroke: "rgba(255,255,255,0.1)" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="v"
                        stroke="#00E5FF"
                        strokeWidth={2}
                        fill="url(#cyan)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Habit bar chart */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 light:bg-black/[0.02] light:border-black/[0.06] lg:col-span-4"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500">
                      <Flame className="h-3.5 w-3.5" /> Habit consistency
                    </div>
                    <div className="mt-1 font-heading text-2xl font-medium">
                      87%
                    </div>
                  </div>
                </div>
                <div className="h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={habitData}>
                      <XAxis dataKey="d" axisLine={false} tickLine={false} tick={{ fill: "#71717a", fontSize: 11 }} />
                      <Tooltip
                        contentStyle={{
                          background: "#0A0A0A",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: 12,
                          fontSize: 12,
                        }}
                        cursor={{ fill: "rgba(255,255,255,0.04)" }}
                      />
                      <Bar dataKey="v" radius={[6, 6, 0, 0]}>
                        {habitData.map((_, i) => (
                          <Cell
                            key={i}
                            fill={i === 3 ? "#00E5FF" : "rgba(255,255,255,0.18)"}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Mood pie */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 light:bg-black/[0.02] light:border-black/[0.06] lg:col-span-3"
              >
                <div className="text-xs uppercase tracking-wider text-zinc-500">
                  Mood mix · 30d
                </div>
                <div className="relative h-32">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={moodSplit}
                        innerRadius={32}
                        outerRadius={50}
                        paddingAngle={3}
                        dataKey="value"
                        stroke="none"
                      >
                        {moodSplit.map((entry, i) => (
                          <Cell key={i} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-2xl">😌</div>
                    <div className="text-[10px] text-zinc-500">8.2 avg</div>
                  </div>
                </div>
              </motion.div>

              {/* Tasks */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 light:bg-black/[0.02] light:border-black/[0.06] lg:col-span-7"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="font-heading text-base font-medium">
                    Today's plan
                  </div>
                  <span className="text-xs text-zinc-500">2 of 4 done</span>
                </div>
                <ul className="space-y-2">
                  {TASKS.map((t, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 transition-colors hover:border-white/15 light:bg-black/[0.02] light:border-black/[0.06] light:hover:border-black/15"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2
                          className={`h-4 w-4 ${
                            t.done ? "text-cyan-400" : "text-zinc-600"
                          }`}
                        />
                        <span
                          className={`text-sm ${
                            t.done
                              ? "text-zinc-500 line-through"
                              : "text-zinc-200 light:text-zinc-800"
                          }`}
                        >
                          {t.t}
                        </span>
                      </div>
                      <span className="text-xs text-zinc-500">{t.time}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Calendar / streak grid */}
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 light:bg-black/[0.02] light:border-black/[0.06] lg:col-span-5"
              >
                <div className="mb-4 flex items-center gap-2">
                  <CalendarIcon className="h-4 w-4 text-zinc-400" />
                  <span className="font-heading text-base font-medium">
                    February
                  </span>
                  <span className="ml-auto rounded-full bg-orange-500/10 px-2 py-0.5 text-xs text-orange-400">
                    🔥 12-day streak
                  </span>
                </div>
                <div className="grid grid-cols-10 gap-1.5">
                  {CAL_DAYS.map((d) => {
                    const active = ACTIVE_DAYS.includes(d);
                    const today = d === TODAY;
                    return (
                      <div
                        key={d}
                        className={`aspect-square rounded-md text-[10px] font-medium flex items-center justify-center ${
                          today
                            ? "bg-cyan-400 text-black"
                            : active
                              ? "bg-cyan-400/20 text-cyan-300"
                              : "bg-white/[0.04] text-zinc-600 light:bg-black/[0.05]"
                        }`}
                      >
                        {d}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
