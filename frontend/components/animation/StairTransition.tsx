"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import React from "react";
import Stairs from "./Stairs";

const StairTransition = () => {
  const pathname = usePathname();

  return (
    <div>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 right-0 left-0 pointer-events-none z-40 flex">
            <Stairs />
          </div>
          <motion.div
            className="-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex "
            initial={{ opacity: 1 }}
            animate={{
              opacity: 0,
              transition: {delay: 0,duration: 0.1,ease:"easeInOut"},
            }}
          />
        </div>
      </AnimatePresence>
    </div>
  );
};

export default StairTransition;
