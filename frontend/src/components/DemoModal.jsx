import { AnimatePresence, motion } from "framer-motion";
import { X, PlayCircle } from "lucide-react";

export const DemoModal = ({ open, onClose }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          data-testid="demo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] shadow-2xl"
          >
            <button
              data-testid="demo-modal-close"
              onClick={onClose}
              aria-label="Close demo"
              className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur transition-colors hover:bg-black/60"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-cyan-500/20 via-indigo-500/15 to-black">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="relative mx-auto mb-5 inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
                    <span className="absolute inset-0 rounded-full bg-cyan-400/30 pulse-ring" />
                    <PlayCircle className="relative h-9 w-9 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="font-heading text-2xl font-medium">
                    Product tour · 2 min
                  </div>
                  <p className="mt-2 max-w-md text-sm text-zinc-400">
                    A quick walkthrough of the AI Planner, Smart Notes, and
                    mood + habit analytics.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-white/[0.06] p-5">
              <div className="text-sm text-zinc-400">
                Prefer reading? Check the{" "}
                <a href="#features" className="text-cyan-400 hover:underline">
                  feature deep-dive
                </a>
                .
              </div>
              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/[0.08]"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
