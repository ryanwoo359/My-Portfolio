import { motion } from "framer-motion";

export default function Logo({ src, name }) {
  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div variants={logoVariants} className="flex items-center">
      <img src={src} className="h-[50px] w-[50px] mr-1" draggable="false" />
      <p className="text-center font-bold text-2xl">{name}</p>
    </motion.div>
  );
}
