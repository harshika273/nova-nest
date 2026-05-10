import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Twitter, Github, Linkedin, Send, Check } from "lucide-react";

const COLS = [
  {
    title: "Product",
    links: ["Features", "Dashboard", "Pricing", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press kit", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help center", "Community", "Templates", "API", "Status"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Security", "Cookies", "DPA"],
  },
];

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 2400);
  };

  return (
    <footer
      data-testid="footer"
      className="relative border-t border-white/[0.06] light:border-black/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600">
                <Sparkles className="h-4 w-4 text-black" strokeWidth={2.5} />
              </div>
              <span className="font-heading text-lg font-semibold tracking-tight">
                NovaNest
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-zinc-400 light:text-zinc-600">
              The thinking person's productivity OS. Calm, beautiful, and quietly
              ambitious — built for students and creators.
            </p>

            <form
              onSubmit={onSubmit}
              data-testid="newsletter-form"
              className="mt-6 flex max-w-md gap-2"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@inbox.com"
                  data-testid="newsletter-email"
                  className="w-full rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-colors focus:border-cyan-400/50 light:border-black/10 light:bg-black/[0.03] light:text-black light:placeholder:text-zinc-400"
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                data-testid="newsletter-submit"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-100"
              >
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" />
                    Done
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Notify me
                  </>
                )}
              </motion.button>
            </form>
            <p className="mt-2 text-xs text-zinc-600">
              Monthly product letter. No spam, ever.
            </p>

            <div className="mt-8 flex items-center gap-2">
              {[
                { icon: Twitter, label: "twitter" },
                { icon: Github, label: "github" },
                { icon: Linkedin, label: "linkedin" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  data-testid={`social-${label}`}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-colors hover:bg-white/[0.08] hover:text-white light:border-black/10 light:bg-black/[0.03] light:text-zinc-600 light:hover:text-black"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <div className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                  {c.title}
                </div>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        data-testid={`footer-link-${l.toLowerCase().replace(/ /g, "-")}`}
                        className="text-sm text-zinc-400 transition-colors hover:text-white light:text-zinc-600 light:hover:text-black"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center light:border-black/[0.06]">
          <div>© {new Date().getFullYear()} NovaNest Labs, Inc. — Crafted in San Francisco &amp; Lagos.</div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
