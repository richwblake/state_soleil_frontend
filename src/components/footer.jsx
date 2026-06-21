import { Link } from "react-router-dom";
import GoldDivider from "./GoldDivider";
import SocialIcon from "./SocialIcon";

const footerLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Inquire" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="py-12 px-6 text-center"
      style={{ backgroundColor: "var(--color-cream-dark)" }}
    >
      {/* Brand */}
      <div className="mb-6">
        <span
          className="cormorant-garamond-semibold text-2xl tracking-[0.15em] block"
          style={{ color: "var(--color-charcoal)" }}
        >
          STATE SOLEIL
        </span>
        <span
          className="birthstone-regular text-2xl"
          style={{ color: "var(--color-gold)" }}
        >
          floristry
        </span>
      </div>

      <GoldDivider />

      {/* Nav links */}
      <nav className="flex justify-center gap-6 mb-6">
        {footerLinks.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="cormorant-garamond-regular text-sm tracking-[0.1em] no-underline transition-colors duration-200"
            style={{ color: "var(--color-charcoal-light)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--color-gold)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--color-charcoal-light)")
            }
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Social icons */}
      <div className="flex justify-center gap-4 mb-6">
        <SocialIcon
          name="instagram"
          href="https://www.instagram.com/statesoleilfloristry"
        />
        <SocialIcon
          name="pinterest"
          href="https://www.pinterest.com/statesoleil"
        />
      </div>

      {/* Copyright */}
      <p
        className="text-xs tracking-wide"
        style={{ color: "var(--color-charcoal-light)" }}
      >
        &copy; {new Date().getFullYear()} State Soleil Floristry. All rights reserved.
      </p>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg transition-colors duration-200 cursor-pointer z-30"
        style={{
          backgroundColor: "var(--color-gold)",
          color: "white",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--color-gold-dark)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = "var(--color-gold)")
        }
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </footer>
  );
}
