import Hamburger from "hamburger-react";
import { useLocation, Link } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Inquire" },
];

export default function Navbar({ isOpen, setIsOpen }) {
  const { pathname } = useLocation();

  return (
    <nav
      className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* Logo */}
      <Link to="/" className="flex flex-col no-underline">
        <span
          className="cormorant-garamond-semibold text-2xl tracking-[0.15em]"
          style={{ color: "var(--color-charcoal)" }}
        >
          STATE SOLEIL
        </span>
        <span
          className="birthstone-regular text-xl -mt-1"
          style={{ color: "var(--color-gold)" }}
        >
          floristry
        </span>
      </Link>

      {/* Desktop nav links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map(({ to, label }) => {
          const isActive =
            to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className="cormorant-garamond-regular text-lg tracking-[0.1em] no-underline transition-colors duration-200"
              style={{
                color: isActive
                  ? "var(--color-gold)"
                  : "var(--color-charcoal-light)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--color-gold)")
              }
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = "var(--color-charcoal-light)";
                }
              }}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* Mobile hamburger */}
      <div className="md:hidden">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          color="var(--color-charcoal)"
        />
      </div>
    </nav>
  );
}
