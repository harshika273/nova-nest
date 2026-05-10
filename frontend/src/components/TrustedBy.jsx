import { motion } from "framer-motion";

const BRANDS = [
  "Lumen",
  "Northwind",
  "Helios",
  "Quantra",
  "Forma",
  "Zephyr",
  "Vela",
  "Atlas",
  "Aperture",
  "Nimbus",
];

const Logo = ({ name }) => (
  <div
    data-testid={`brand-logo-${name.toLowerCase()}`}
    className="flex shrink-0 items-center gap-2 px-8 text-zinc-500 transition-colors hover:text-white light:hover:text-black"
  >
    <div className="h-2.5 w-2.5 rounded-sm bg-current opacity-80" />
    <span className="font-heading text-xl font-semibold tracking-tight">
      {name}
    </span>
  </div>
);

export const TrustedBy = () => {
  return (
    <section
      data-testid="trusted-by"
      className="relative border-y border-white/[0.06] py-14 light:border-black/[0.06]"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-xs font-bold uppercase tracking-[0.25em] text-zinc-500"
        >
          Trusted by ambitious teams &amp; campuses worldwide
        </motion.p>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max marquee">
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <Logo key={`${b}-${i}`} name={b} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
