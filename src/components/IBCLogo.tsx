import { motion } from "framer-motion";
import ibcLogo from "@/assets/ibc-logo-new.png";

interface IBCLogoProps {
  variant?: "full" | "compact";
  className?: string;
}

const IBCLogo = ({ variant = "full", className = "" }: IBCLogoProps) => {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 ${className}`}
      >
        <img 
          src={ibcLogo} 
          alt="IBC Dubai Logo" 
          className="h-14 md:h-16 w-auto object-contain"
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`text-center ${className}`}
    >
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        src={ibcLogo}
        alt="IBC Dubai - Indian Business Circle"
        className="h-48 sm:h-64 md:h-80 lg:h-96 w-auto mx-auto object-contain"
      />
    </motion.div>
  );
};

export default IBCLogo;
