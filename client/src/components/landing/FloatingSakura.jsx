import { motion, useReducedMotion } from "framer-motion";
import { useMemo } from "react";
import petalImage from "../../assets/images/sakura-petal.png";

// PRNG for deterministic, non-clashing renders per session
function mulberry32(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makePetal(id, rng) {
  // Tree canopy spawn origin (Top-Right)
  const startX = 78 + rng() * 20; // 78% to 98%
  const startY = 2 + rng() * 33;   // 2% to 35%

  // Wind midpoint trajectory across center sky
  const midX = 35 + rng() * 30;   // 35% to 65%
  const midY = 30 + rng() * 25;   // 30% to 55%

  // Landing / Exit zone (Left / Water area)
  const endX = -10 + rng() * 30;  // -10% to 20%
  const endY = 55 + rng() * 35;   // 55% to 90%

  const steps = 6;
  const left = Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    // Quadratic bezier curve for natural arc
    const val = (1 - t) * (1 - t) * startX + 2 * (1 - t) * t * midX + t * t * endX;
    return `${val.toFixed(1)}%`;
  });

  const top = Array.from({ length: steps }, (_, i) => {
    const t = i / (steps - 1);
    const val = (1 - t) * (1 - t) * startY + 2 * (1 - t) * t * midY + t * t * endY;
    return `${val.toFixed(1)}%`;
  });

  const duration = 18 + rng() * 22; // 18s - 40s drift time
  const size = 16 + rng() * 28;     // Varied petal scaling
  const depth = rng();
  const maxOpacity = 0.4 + depth * 0.55;
  const blur = (1 - depth) * 2.0;   // Distance blur effect
  const spin = (rng() < 0.5 ? -1 : 1) * (180 + rng() * 300);

  // Micro-sway turbulence offsets
  const sway = 15 + rng() * 25;
  const x = Array.from({ length: steps }, (_, i) => 
    i === 0 || i === steps - 1 ? 0 : Math.round((rng() - 0.5) * sway)
  );
  const y = Array.from({ length: steps }, (_, i) => 
    i === 0 || i === steps - 1 ? 0 : Math.round((rng() - 0.5) * (sway * 0.6))
  );

  const rotate = Array.from({ length: steps }, (_, i) => (spin * i) / (steps - 1));
  const opacity = [0, maxOpacity, maxOpacity, maxOpacity * 0.8, maxOpacity * 0.4, 0];

  return {
    id,
    left,
    top,
    size,
    duration,
    delay: -rng() * duration, // Negative delay to prevent initial cold-start
    blur,
    x,
    y,
    rotate,
    opacity,
  };
}

function buildTreePetals() {
  const rng = mulberry32(20260804);
  const petals = [];
  // 26 petals for dense, ambient drift
  for (let i = 0; i < 26; i++) {
    petals.push(makePetal(i, rng));
  }
  return petals;
}

export default function FloatingSakura() {
  const reduceMotion = useReducedMotion();
  const petals = useMemo(buildTreePetals, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block"
      aria-hidden="true"
    >
      {petals.map((petal) => {
        const mid = Math.floor(petal.left.length / 2);
        const restOpacity = Math.max(...petal.opacity) * 0.7;

        return (
          <motion.img
            key={petal.id}
            src={petalImage}
            alt=""
            className="absolute object-contain drop-shadow-[0_4px_6px_rgba(244,114,182,0.2)]"
            style={{
              width: petal.size,
              height: petal.size,
              filter: petal.blur > 0.2 ? `blur(${petal.blur.toFixed(1)}px)` : undefined,
              willChange: "left, top, transform, opacity",
            }}
            initial={{
              left: petal.left[0],
              top: petal.top[0],
              opacity: 0,
            }}
            animate={
              reduceMotion
                ? {
                    left: petal.left[mid],
                    top: petal.top[mid],
                    opacity: restOpacity,
                  }
                : {
                    left: petal.left,
                    top: petal.top,
                    x: petal.x,
                    y: petal.y,
                    rotate: petal.rotate,
                    opacity: petal.opacity,
                  }
            }
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
}