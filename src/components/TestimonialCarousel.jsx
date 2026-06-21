import { useState, useEffect } from "react";
import testimonials from "../data/testimonialData";

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState("idle"); // "idle" | "exit" | "enter"
  const [direction, setDirection] = useState("right");

  const goTo = (index, dir) => {
    if (phase !== "idle") return;
    let next;
    if (index < 0) next = testimonials.length - 1;
    else if (index >= testimonials.length) next = 0;
    else next = index;

    setDirection(dir);
    setCurrentIndex(next);
    setPhase("exit");
  };

  useEffect(() => {
    if (phase === "exit") {
      const timer = setTimeout(() => {
        setDisplayIndex(currentIndex);
        setPhase("enter");
      }, 350);
      return () => clearTimeout(timer);
    }
    if (phase === "enter") {
      // Force a reflow so the "enter-start" position applies before transitioning
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setPhase("idle");
        });
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [phase, currentIndex]);

  const current = testimonials[displayIndex];

  // Exit: text slides out in the arrow direction (right arrow = text goes right)
  // Enter: new text starts from the opposite side and slides to center
  let transform = "translateX(0)";
  let opacity = 1;
  let transition = "transform 0.35s ease, opacity 0.35s ease";

  if (phase === "exit") {
    transform = direction === "right" ? "translateX(100%)" : "translateX(-100%)";
    opacity = 0;
  } else if (phase === "enter") {
    // Start position: come from the opposite side, no transition yet
    transform = direction === "right" ? "translateX(-100%)" : "translateX(100%)";
    opacity = 0;
    transition = "none";
  }

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image with scrim */}
      <div
        className="relative flex flex-col items-center justify-center px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage: `url("${current.imgUrl}")`,
          height: "350px",
          transition: "background-image 0.35s ease",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <div
          className="relative z-10 max-w-2xl mx-auto"
          style={{ transition, transform, opacity }}
        >
          <p className="cormorant-garamond-regular text-white text-xl md:text-2xl leading-relaxed italic">
            &ldquo;{current.content}&rdquo;
          </p>
          <span
            className="birthstone-regular text-2xl mt-4 block"
            style={{ color: "var(--color-gold-light)" }}
          >
            &mdash; {current.author}
          </span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 py-4"
        style={{ backgroundColor: "var(--color-cream-dark)" }}
      >
        {/* Left arrow */}
        <button
          onClick={() => goTo(currentIndex - 1, "left")}
          className="p-1 transition-colors duration-200 cursor-pointer"
          style={{ color: "var(--color-charcoal-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal-light)")}
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentIndex ? "right" : "left")}
              className="w-2 h-2 rounded-full transition-colors duration-200 cursor-pointer"
              style={{
                backgroundColor:
                  i === currentIndex
                    ? "var(--color-gold)"
                    : "var(--color-charcoal-light)",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => goTo(currentIndex + 1, "right")}
          className="p-1 transition-colors duration-200 cursor-pointer"
          style={{ color: "var(--color-charcoal-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-gold)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-charcoal-light)")}
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </section>
  );
}
