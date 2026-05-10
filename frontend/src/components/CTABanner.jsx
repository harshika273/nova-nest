import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const CTABanner = ({ onGetStarted }) => {
  return (
    <section data-testid="cta-banner" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/[0.08] bg-[#0A0A0A] p-12 text-center shadow-2xl light:bg-white light:border-black/[0.08] md:p-20"
        >
          {/* Aurora glow */}
          <div className="pointer-events-none absolute inset-0 bg-aurora opacity-80" />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-1/4 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />

          <div className="relative">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
              Your future self says hi
            </p>
            <h2 className="mx-auto max-w-3xl font-heading text-4xl font-medium leading-[1.05] tracking-tighter md:text-6xl">
              Start building better habits{" "}
              <span className="text-gradient-cyan">today.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-zinc-400 md:text-lg light:text-zinc-600">
              Join 30,000+ students and creators who replaced 5 apps with one
              calm workspace.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onGetStarted}
                data-testid="cta-banner-primary"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-colors hover:bg-zinc-100"
              >
                Get NovaNest free
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </motion.button>
              <a
                href="#pricing"
                data-testid="cta-banner-secondary"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-white/[0.08] light:border-black/10 light:bg-black/[0.03] light:text-black"
              >
                Compare plans
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
