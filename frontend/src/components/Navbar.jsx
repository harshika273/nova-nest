import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { useTheme } from "../lib/theme";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Dashboard", href: "#dashboard" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const Navbar = ({ onGetStarted }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      data-testid="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/[0.06] light:bg-white/70 light:border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="#top"
          data-testid="navbar-logo"
          className="group flex items-center gap-2"
        >
          <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-indigo-600 shadow-[0_0_20px_-5px_rgba(0,229,255,0.6)]">
            <Sparkles className="h-4 w-4 text-black" strokeWidth={2.5} />
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight">
            NovaNest
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white light:text-zinc-600 light:hover:text-black"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            data-testid="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            className="hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition-colors hover:bg-white/10 hover:text-white md:inline-flex light:border-black/10 light:bg-black/[0.03] light:text-zinc-700 light:hover:text-black"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            data-testid="navbar-signin"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white md:block light:text-zinc-700 light:hover:text-black"
          >
            Sign in
          </button>

          <button
            data-testid="navbar-get-started"
            onClick={onGetStarted}
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-zinc-200 hover:-translate-y-0.5 md:block"
          >
            Get Started
          </button>

          <button
            data-testid="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] md:hidden light:border-black/10 light:bg-black/[0.03]"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-black/80 backdrop-blur-xl md:hidden light:bg-white/80 light:border-black/5"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.04 * i }}
                  className="rounded-xl px-3 py-3 text-base font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-2 flex gap-2">
                <button
                  onClick={toggle}
                  className="flex-1 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium"
                >
                  {theme === "dark" ? "Light mode" : "Dark mode"}
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    onGetStarted?.();
                  }}
                  className="flex-1 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-black"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
