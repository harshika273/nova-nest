import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const FAQS = [
  {
    q: "Is NovaNest free to start?",
    a: "Yes. Our Free plan covers the essentials forever — AI Planner with monthly limits, Smart Notes, mood tracker, and the focus timer. Upgrade only when you outgrow it.",
  },
  {
    q: "How does the AI Planner actually work?",
    a: "Drop your goals, deadlines, and constraints. NovaNest generates a realistic week using calendar gaps, your historical focus patterns, and energy data — and reshuffles in real time when life happens.",
  },
  {
    q: "Is my mood and habit data private?",
    a: "Always. Mood entries are end-to-end encrypted on Pro & Enterprise. We never sell data, never train external models on it, and you can export or wipe everything in one click.",
  },
  {
    q: "Does it sync with my existing tools?",
    a: "Pro plans sync with Google Calendar, Apple Calendar, Notion, Spotify, and Apple Health. Enterprise adds SSO, SCIM, and webhooks.",
  },
  {
    q: "Can I use NovaNest as a student team?",
    a: "Absolutely. Enterprise gives shared workspaces, group goals, and study rooms. We offer 50% off for verified .edu cohorts of 10+.",
  },
  {
    q: "What if I don't love it?",
    a: "Cancel any time, no friction. The Pro 14-day trial doesn't ask for a card. If you've paid and it's not working, email us — we'll refund within 30 days, no questions.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            FAQ
          </p>
          <h2 className="font-heading text-4xl font-medium tracking-tighter md:text-5xl">
            Frequently asked,{" "}
            <span className="text-zinc-500">honestly answered.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-2 light:bg-white light:border-black/[0.08]"
        >
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                data-testid={`faq-item-${i}`}
                className="border-white/[0.06] last:border-b-0 light:border-black/[0.06]"
              >
                <AccordionTrigger className="px-5 py-5 text-left font-heading text-base font-medium hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-zinc-400 md:text-base light:text-zinc-600">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
