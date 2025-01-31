import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Cursor = () => {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>(Array(8).fill({ x: 0, y: 0 }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = Math.max(10, Math.min(window.innerWidth - 10, e.clientX));
      const y = Math.max(10, Math.min(window.innerHeight - 10, e.clientY));

      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions.unshift({ x, y });
        newPositions.pop();
        return newPositions;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {positions.map((pos, index) => (
        <motion.div
          key={index}
          className="fixed w-5 h-5 rounded-full bg-blue-500 opacity-80 pointer-events-none max-[768px]:hidden"
          animate={{ x: pos.x - 10, y: pos.y - 10, scale: (8 - index) / 8 }}
          transition={{ duration: 0.08, ease: "linear" }}
          style={{
            willChange: "transform",
            zIndex: 9999,
          }}
        ></motion.div>
      ))}
    </>
  );
};
