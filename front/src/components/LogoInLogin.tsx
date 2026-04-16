import { motion } from "motion/react";

export default function LogoInLogin() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div className="flex p-4 gap-4 w-full items-center justify-center">
      <motion.h1
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-mauve-600 text-5xl font-black"
      >
        {"PKMN".split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.img
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        src="/logo.png"
        alt="pokeballs"
        className="w-16 h-16"
      />
    </motion.div>
  );
}
