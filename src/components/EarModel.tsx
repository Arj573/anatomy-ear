import React, { useState, useEffect } from "react";
import { useEar } from "../context/EarContext";
import { getEarPartsBySection } from "../data/earData";
import { EarPart } from "../types";

// Hook to detect current screen size breakpoint
const useBreakpoint = (): "default" | "sm" | "md" | "lg" => {
  const [breakpoint, setBreakpoint] = useState<"default" | "sm" | "md" | "lg">("default");

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280) setBreakpoint("lg");
      else if (width >= 768) setBreakpoint("md");
      else if (width >= 320) setBreakpoint("sm");
      else setBreakpoint("default");
    };

    updateBreakpoint(); // initialize
    window.addEventListener("resize", updateBreakpoint);
    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};

// Get responsive position from EarPart
const getResponsivePosition = (
  position: EarPart["position"],
  breakpoint: "default" | "sm" | "md" | "lg"
): [number, number] => {
  if (Array.isArray(position)) return position;

  return position[breakpoint] || position.default;
};

export const EarModel: React.FC = () => {
  const { activeSection, selectedPart, selectPartById } = useEar();
  const [loading, setLoading] = useState(true);
  const breakpoint = useBreakpoint();

  const handleImageLoad = () => {
    setLoading(false);
  };

  const activeParts = getEarPartsBySection(activeSection);

  const getImageUrl = () => {
    switch (activeSection) {
      case "outer":
        return "/outer_ear.jpg";
      case "middle":
      case "inner":
        return "/anatomy_ear.jpg";
      default:
        return "";
    }
  };

  return (
    <div className="h-full relative bg-white rounded-lg overflow-hidden">
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <div className="inline-block w-8 h-8 border-4 border-accent-400 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-gray-500">
              Loading {activeSection} ear anatomy...
            </p>
          </div>
        </div>
      )}

      <img
        src={getImageUrl()}
        alt={`${activeSection} ear anatomy`}
        className="w-full h-full object-contain"
        onLoad={handleImageLoad}
      />

      {!loading && (
        <>
          <div className="absolute inset-0">
            {activeParts.map((part) => {
              const [left, top] = getResponsivePosition(part.position, breakpoint);
              return (
                <button
                  key={part.id}
                  className={`absolute rounded-full w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 transition-all
                    ${
                      selectedPart?.id === part.id
                        ? "bg-accent-500 ring-4 ring-accent-200"
                        : "bg-accent-400 hover:bg-accent-500"
                    }`}
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    opacity: 0.8,
                  }}
                  onClick={() => selectPartById(part.id)}
                  title={part.name}
                >
                  <span className="sr-only">{part.name}</span>
                </button>
              );
            })}
          </div>

          <a
            href="https://linktr.ee/AnatomiTelingaPBL2024?utm_source=linktree_profile_share&ltsid=c740682d-ddeb-477f-b481-0bbcc5f6fe60"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 bg-white bg-opacity-90 rounded-md p-2 text-xs text-gray-600 hover:text-blue-500 hover:underline cursor-pointer"
          >
            Kelompok 21 Responsi Anatomi 2025
          </a>
        </>
      )}
    </div>
  );
};
