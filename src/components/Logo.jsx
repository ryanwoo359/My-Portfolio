import { motion } from "framer-motion";

export default function Logo({ src, name }) {
  const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div variants={logoVariants} className="flex items-center">
      <img
        src={src}
        className="h-[35px] w-[35px] md:h-[60px] md:w-[60px] mr-1"
        draggable="false"
      />
      <p className="font-sans text-center font-bold text-2xl">{name}</p>
    </motion.div>
  );
}
