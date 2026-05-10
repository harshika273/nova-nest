import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

const PLANS = [
  {
    name: "Free",
    priceMonthly: 0,
    priceYearly: 0,
    blurb: "All the essentials for getting unstuck.",
    cta: "Get started",
    features: [
      "AI Planner — 30 prompts / month",
      "Smart Notes (1 workspace)",
      "Basic mood tracking",
      "Focus timer",
      "Mobile + web",
    ],
  },
  {
    name: "Pro",
    priceMonthly: 12,
    priceYearly: 9,
    blurb: "For students & creators ready to compound.",
    cta: "Start 14-day trial",
    highlight: true,
    features: [
      "Unlimited AI Planner & Smart Notes",
      "Advanced mood + habit analytics",
      "Custom focus rituals",
      "Calendar + Notion + Spotify sync",
      "Priority email support",
    ],
  },
  {
    name: "Enterprise",
    priceMonthly: 28,
    priceYearly: 22,
    blurb: "For cohorts, labs, and modern teams.",
    cta: "Talk to us",
    features: [
      "Everything in Pro",
      "Team workspaces & shared goals",
      "SSO + SCIM provisioning",
      "Admin analytics & audit log",
      "Dedicated success manager",
    ],
  },
];

export const Pricing = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section
      id="pricing"
      data-testid="pricing-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Pricing
          </p>
          <h2 className="font-heading text-4xl font-medium tracking-tighter md:text-5xl">
            Simple plans.{" "}
            <span className="text-zinc-500">Honest pricing.</span>
          </h2>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 light:border-black/10 light:bg-black/[0.03]">
            <button
              data-testid="billing-monthly"
              onClick={() => setYearly(false)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !yearly
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white light:text-zinc-600"
              }`}
            >
              Monthly
            </button>
            <button
              data-testid="billing-yearly"
              onClick={() => setYearly(true)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                yearly
                  ? "bg-white text-black"
                  : "text-zinc-400 hover:text-white light:text-zinc-600"
              }`}
            >
              Yearly
              <span className="ml-1.5 rounded-full bg-cyan-400/15 px-1.5 py-0.5 text-[10px] font-bold text-cyan-300">
                -25%
              </span>
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {PLANS.map((p, i) => {
            const price = yearly ? p.priceYearly : p.priceMonthly;
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`pricing-${p.name.toLowerCase()}`}
                className={`relative rounded-3xl border p-7 transition-all ${
                  p.highlight
                    ? "border-cyan-400/30 bg-gradient-to-b from-cyan-500/[0.06] to-transparent glow-pro"
                    : "border-white/[0.08] bg-[#0A0A0A] hover:border-white/20 light:bg-white light:border-black/[0.08] light:hover:border-black/20"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-1 text-xs font-bold text-black">
                      <Sparkles className="h-3 w-3" /> Most popular
                    </span>
                  </div>
                )}

                <div className="mb-1 font-heading text-lg font-medium">
                  {p.name}
                </div>
                <p className="text-sm text-zinc-500 light:text-zinc-600">
                  {p.blurb}
                </p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-heading text-5xl font-medium tracking-tighter">
                    ${price}
                  </span>
                  <span className="text-sm text-zinc-500">
                    {price === 0 ? " forever" : `/mo${yearly ? ", billed yearly" : ""}`}
                  </span>
                </div>

                <button
                  data-testid={`pricing-cta-${p.name.toLowerCase()}`}
                  className={`mt-6 w-full rounded-full px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 ${
                    p.highlight
                      ? "bg-white text-black hover:bg-zinc-100"
                      : "border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08] light:border-black/15 light:bg-black/[0.03] light:text-black light:hover:bg-black/[0.06]"
                  }`}
                >
                  {p.cta}
                </button>

                <ul className="mt-7 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          p.highlight ? "text-cyan-400" : "text-zinc-400"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span className="text-zinc-300 light:text-zinc-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
