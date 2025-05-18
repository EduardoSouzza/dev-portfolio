"use client";

import { motion } from "framer-motion";

interface MotionMainProps {
  children: React.ReactNode;
}

export function MotionMain({ children }: MotionMainProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-16 space-y-14 font-sans"
    >
      {children}
    </motion.main>
  );
}
