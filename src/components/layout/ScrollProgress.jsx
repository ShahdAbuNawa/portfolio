import { useScrollProgress } from "../../hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: 3,
        width: `${progress}%`,
        background:
          "linear-gradient(90deg, var(--accent-primary), var(--accent-glow))",
        zIndex: 200,
        transition: "width 0.1s linear",
        boxShadow: "0 0 8px rgba(31,91,99,0.28)",
      }}
    />
  );
}
