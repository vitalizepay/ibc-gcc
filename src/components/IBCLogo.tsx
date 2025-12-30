import { motion } from "framer-motion";

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
        <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-heading text-xl font-semibold">
            IBC
          </span>
        </div>
        <div className="hidden sm:block">
          <p className="text-foreground font-heading text-lg font-medium leading-tight">
            Indian Business Circle
          </p>
          <p className="text-muted-foreground text-sm">Dubai</p>
        </div>
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
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-primary-foreground font-heading text-8xl sm:text-9xl font-semibold tracking-wide mb-4"
      >
        IBC
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-primary-foreground/90 text-xl sm:text-2xl tracking-widest mb-8"
      >
        Meet. Connect. Grow.
      </motion.p>
      
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="w-48 h-px bg-primary-foreground/40 mx-auto mb-8"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2 className="text-primary-foreground font-heading text-3xl sm:text-4xl font-medium tracking-wide mb-3">
          Indian Business Circle
        </h2>
        <p className="text-primary-foreground/80 font-heading text-2xl tracking-widest">
          Dubai
        </p>
      </motion.div>
    </motion.div>
  );
};

export default IBCLogo;