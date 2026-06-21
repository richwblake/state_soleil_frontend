import { Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Inquire" },
];

export default function MobileNavOverlay({ setIsOpen }) {
  return (
    <div
      className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {navLinks.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          onClick={() => setIsOpen(false)}
          className="cormorant-garamond-regular text-4xl tracking-[0.15em] no-underline transition-colors duration-200"
          style={{ color: "var(--color-charcoal)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-gold)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-charcoal)")
          }
        >
          {label}
        </Link>
      ))}
      <span
        className="birthstone-regular text-3xl mt-4"
        style={{ color: "var(--color-gold)" }}
      >
        State Soleil
      </span>
    </div>
  );
}
