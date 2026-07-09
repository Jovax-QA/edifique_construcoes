import { useState, useEffect } from "react";
import blueprint1 from "@/assets/hero-architecture (1).jpg";
import blueprint2 from "@/assets/hero-architecture (2).jpg";

export function BlueprintTransition() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[500px] h-[500px]">
      <img
        src={blueprint1}
        alt="Planta arquitetônica 1"
        className={`absolute inset-0 w-full h-full object-contain translate-x-70 transition-opacity duration-1000 ${
          showFirst ? 'opacity-50' : 'opacity-0'
        }`}
      />
      <img
        src={blueprint2}
        alt="Planta arquitetônica 2"
        className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
          showFirst ? 'opacity-0' : 'opacity-80'
        }`}
      />
    </div>
  );
}
