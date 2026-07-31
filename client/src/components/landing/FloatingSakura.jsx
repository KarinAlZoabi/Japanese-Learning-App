import { motion, useReducedMotion } from "framer-motion";
import petalImage from "../../assets/images/sakura-petal.png";

/*
  15 petals with staggered negative delays distributed evenly across slow durations (35s - 48s).
  This ensures an endless, seamless stream with no starting/stopping gaps.
*/
const streamPetals = [
  // TOP CLUSTER — Starting near top-right nav area
  { id: 1, size: 52, duration: 36, delay: -2, offset: 0, rotate: 280 },
  { id: 2, size: 38, duration: 42, delay: -8, offset: -2, rotate: -240 },
  { id: 3, size: 68, duration: 38, delay: -14, offset: 2, rotate: 320 },
  { id: 4, size: 44, duration: 44, delay: -20, offset: -3, rotate: -280 },
  { id: 5, size: 58, duration: 35, delay: -26, offset: 3, rotate: 220 },
  { id: 6, size: 32, duration: 40, delay: -32, offset: -2, rotate: -320 },
  { id: 7, size: 74, duration: 46, delay: -38, offset: 2, rotate: 360 },

  // MIDDLE CLUSTER — Smooth mid-stream drift
  { id: 8, size: 46, duration: 39, delay: -5, offset: 1, rotate: -260 },
  { id: 9, size: 60, duration: 43, delay: -11, offset: -2, rotate: 300 },
  { id: 10, size: 36, duration: 37, delay: -17, offset: 3, rotate: -220 },
  { id: 11, size: 54, duration: 41, delay: -23, offset: -3, rotate: 340 },
  { id: 12, size: 42, duration: 47, delay: -29, offset: 2, rotate: -300 },

  // LOWER CLUSTER — Gentle lower exit stream
  { id: 13, size: 50, duration: 45, delay: -10, offset: -2, rotate: 250 },
  { id: 14, size: 34, duration: 38, delay: -22, offset: 3, rotate: -340 },
  { id: 15, size: 44, duration: 48, delay: -34, offset: -2, rotate: 290 },
];

/*
  Flight keyframes matching the red path in edited-image_3.jpg:
*/
const path = {
  left: [
    "72%", // 1. High top-right near navbar
    "65%", // 2. Between "About" and "Contact"
    "52%", // 3. Dips down into sky under "About"
    "38%", // 4. Flattening out under pink pill badge
    "28%", // 5. Directly above "Start yours."
    "21%", // 6. Dives between "Start" and "yours."
    "16%", // 7. Down through description text
    "12%", // 8. Approaching CTA button
    "8%",  // 9. Directly over "Start Learning" button
    "2%",  // 10. Exiting bottom-left corner
  ],

  top: [
    "2%",  // 1. Top navbar boundary
    "12%", // 2. Passing nav pill
    "26%", // 3. Low dip under "About"
    "31%", // 4. Leveling out under badge
    "32%", // 5. Plateau above heading
    "42%", // 6. Cutting through main heading
    "55%", // 7. Cutting through description text
    "68%", // 8. Heading to button
    "82%", // 9. Passing over pink button
    "98%", // 10. Exit bottom-left
  ],
};

export default function FloatingSakura() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        z-10
        hidden
        overflow-hidden
        md:block
      "
      aria-hidden="true"
    >
      {streamPetals.map((petal) => (
        <motion.img
          key={petal.id}
          src={petalImage}
          alt=""
          className="
            absolute
            object-contain
            drop-shadow-[0_5px_8px_rgba(244,114,182,0.18)]
          "
          style={{
            width: petal.size,
            height: petal.size,
          }}
          initial={{
            left: path.left[0],
            top: path.top[0],
            opacity: 0,
          }}
          animate={
            reduceMotion
              ? {
                  left: path.left[4],
                  top: path.top[4],
                  opacity: 0.6,
                }
              : {
                  /* MAIN WIND PATH */
                  left: path.left,
                  top: path.top,

                  /* Gentle micro-fluttering */
                  x: [
                    0,
                    petal.offset * 4,
                    petal.offset * -5,
                    petal.offset * 6,
                    petal.offset * -4,
                    petal.offset * 5,
                    0,
                  ],

                  y: [0, -8, 5, -6, 7, -4, 0],

                  /* Continuous rotation */
                  rotate: [
                    0,
                    petal.rotate * 0.2,
                    petal.rotate * 0.45,
                    petal.rotate * 0.7,
                    petal.rotate,
                  ],

                  /* Natural fluttering scale */
                  scale: [0.75, 0.95, 1.08, 0.95, 1.02, 0.82],

                  /* Seamless fade in & fade out */
                  opacity: [0, 0.9, 0.9, 0.9, 0.9, 0.9, 0.9, 0.85, 0.4, 0],
                }
          }
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "linear", // Ensures continuous, smooth velocity without stopping/restarting
          }}
        />
      ))}
    </div>
  );
}