import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "NovaNest replaced four apps for me. The AI planner alone saves me an hour a day — I've never been this consistent.",
    name: "Maya Chen",
    role: "PhD Candidate, MIT",
    avatar:
      "https://images.unsplash.com/photo-1769636929388-99eff95d3bf1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwyfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc3ODQxMTkyOXww&ixlib=rb-4.1.0&q=85",
    rating: 5,
  },
  {
    quote:
      "The mood tracker feels like therapy you actually do. My anxiety scores dropped 40% in two months.",
    name: "Jordan Patel",
    role: "Product Designer, Helios",
    avatar:
      "https://images.unsplash.com/photo-1762522926157-bcc04bf0b10a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDB8fHx8MTc3ODQxMTkyOXww&ixlib=rb-4.1.0&q=85",
    rating: 5,
  },
  {
    quote:
      "Our entire cohort moved from Notion. Smart Notes turned my lectures into clean study guides — automatically.",
    name: "Sofía Aguilar",
    role: "CS Senior, Stanford",
    avatar:
      "https://images.pexels.com/photos/14589344/pexels-photo-14589344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
  },
  {
    quote:
      "Beautiful, fast, and weirdly calming. NovaNest is the rare productivity tool that doesn't make me anxious.",
    name: "David Okafor",
    role: "Founder, Quantra Labs",
    avatar:
      "https://images.pexels.com/photos/14585727/pexels-photo-14585727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    rating: 5,
  },
];

const Card = ({ t, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.07 }}
    whileHover={{ y: -4 }}
    data-testid={`testimonial-${index}`}
    className="break-inside-avoid rounded-3xl border border-white/[0.08] bg-[#0A0A0A] p-7 transition-colors hover:border-white/20 light:bg-white light:border-black/[0.08] light:hover:border-black/20"
  >
    <div className="mb-3 flex gap-0.5">
      {Array.from({ length: t.rating }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-cyan-400 text-cyan-400" />
      ))}
    </div>
    <p className="font-heading text-base font-normal leading-relaxed text-zinc-200 md:text-lg light:text-zinc-800">
      "{t.quote}"
    </p>
    <div className="mt-6 flex items-center gap-3">
      <img
        src={t.avatar}
        alt={t.name}
        className="h-10 w-10 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <div className="text-sm font-medium">{t.name}</div>
        <div className="text-xs text-zinc-500">{t.role}</div>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
            Loved by humans
          </p>
          <h2 className="font-heading text-4xl font-medium tracking-tighter md:text-5xl">
            What our early flock is saying
          </h2>
        </motion.div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>div]:mb-5">
          {TESTIMONIALS.map((t, i) => (
            <Card key={i} t={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
