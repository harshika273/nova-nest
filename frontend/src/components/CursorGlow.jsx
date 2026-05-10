import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window !== "undefined" && window.matchMedia) {
      const mq = window.matchMedia("(pointer: coarse)");
      if (mq.matches) setEnabled(false);
    }
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      data-testid="cursor-glow"
      aria-hidden="true"
      className="pointer-events-none fixed z-[1] h-[400px] w-[400px] rounded-full"
      style={{
        left: pos.x - 200,
        top: pos.y - 200,
        background:
          "radial-gradient(circle, rgba(0,229,255,0.18) 0%, rgba(79,70,229,0.10) 40%, rgba(0,0,0,0) 70%)",
        filter: "blur(40px)",
        mixBlendMode: "screen",
      }}
      animate={{ x: 0, y: 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
};

export default CursorGlow;
