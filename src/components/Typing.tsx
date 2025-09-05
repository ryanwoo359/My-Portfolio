import * as React from "react";
import { motion, useInView } from "framer-motion";

export default function Typing({ text = "Typing Effect" }: { text: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <p
      ref={ref}
      className="text-xl text-center sm:text-4xl font-bold md:text-6xl md:leading-[4rem]"
    >
      {text.split("").map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.1, delay: index * 0.03 }}
        >
          {letter}
        </motion.span>
      ))}
    </p>
  );
}
