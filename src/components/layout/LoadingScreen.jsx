import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 18,
            background: "#F6F1E9",
          }}
        >
          <motion.span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              letterSpacing: "0.08em",
              color: "var(--accent-primary)",
            }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          >
            // loading portfolio
          </motion.span>
          <div
            style={{
              width: 160,
              height: 2,
              background: "rgba(31,91,99,0.14)",
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <motion.div
              style={{
                height: "100%",
                background:
                  "linear-gradient(90deg, var(--accent-primary), var(--accent-glow))",
              }}
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
