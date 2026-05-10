import { useState } from "react";
import { motion } from "framer-motion";
import { Toaster, toast } from "sonner";
import { Navbar } from "../components/Navbar";
import { ScrollProgress } from "../components/ScrollProgress";
import { CursorGlow } from "../components/CursorGlow";
import { Hero } from "../components/Hero";
import { TrustedBy } from "../components/TrustedBy";
import { Features } from "../components/Features";
import { DashboardPreview } from "../components/DashboardPreview";
import { Testimonials } from "../components/Testimonials";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";
import { CTABanner } from "../components/CTABanner";
import { Footer } from "../components/Footer";
import { DemoModal } from "../components/DemoModal";

export default function Landing() {
  const [demoOpen, setDemoOpen] = useState(false);

  const handleGetStarted = () => {
    toast.success("Welcome to NovaNest", {
      description: "We'll email you when onboarding opens. ✨",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative min-h-screen overflow-x-hidden"
    >
      <ScrollProgress />
      <CursorGlow />
      <Toaster theme="dark" position="bottom-right" />

      <Navbar onGetStarted={handleGetStarted} />

      <main>
        <Hero
          onGetStarted={handleGetStarted}
          onWatchDemo={() => setDemoOpen(true)}
        />
        <TrustedBy />
        <Features />
        <DashboardPreview />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTABanner onGetStarted={handleGetStarted} />
      </main>

      <Footer />

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </motion.div>
  );
}
