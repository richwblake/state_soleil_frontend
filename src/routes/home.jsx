import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import HeroSection from "../components/HeroSection";
import ContactButton from "../components/ContactButton";
import GoldDivider from "../components/GoldDivider";
import HomeMainDT from "../assets/landscapes/home-main-dt.webp";
import HomeMainMB from "../assets/portraits/home-main-mb.webp";
import Logo from "../assets/universal/logo.png";
import AboutPhoto from "../assets/universal/main-about.webp";
import PortfolioPhoto from "../assets/universal/main-portfolio.webp";
import InquirePhoto from "../assets/universal/main-inquire.webp";

const navCards = [
  {
    to: "/about",
    image: AboutPhoto,
    title: "ABOUT",
    text: "learn more about our ambitions",
  },
  {
    to: "/portfolio",
    image: PortfolioPhoto,
    title: "PORTFOLIO",
    text: "see our work",
  },
  {
    to: "/contact",
    image: InquirePhoto,
    title: "INQUIRE",
    text: "transform your event with our arrangements",
  },
];

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection
        mobileImg={HomeMainMB}
        desktopImg={HomeMainDT}
        alt="State Soleil floral arrangement"
      />

      {/* Intro */}
      <section className="py-12 px-6 text-center">
        <div className="reveal max-w-2xl mx-auto">
          <img
            className="w-48 md:w-64 mx-auto mb-6"
            src={Logo}
            alt="State Soleil logo"
          />
          <p
            className="cormorant-garamond-regular text-3xl md:text-5xl py-5 mx-4 tracking-wide"
            style={{
              borderTop: "1px solid var(--color-gold-light)",
              borderBottom: "1px solid var(--color-gold-light)",
            }}
          >
            EXQUISITE FLORALS{" "}
            <span className="birthstone-regular text-2xl md:text-4xl">in</span>{" "}
            SPECTACULAR WEDDINGS
          </p>
        </div>

        <div className="reveal max-w-2xl mx-auto mt-8 space-y-8">
          <p
            className="cormorant-garamond-regular text-xl md:text-2xl leading-relaxed mx-4"
            style={{ color: "var(--color-charcoal)" }}
          >
            From the home base of Tampa Bay to the Blue Ridge Mountains, State
            Soleil will bring ethereal blooms to make your wedding fantasies
            come to life.
          </p>
          <ContactButton btnText="GET IN TOUCH" />
        </div>
      </section>

      {/* Nav card grid */}
      <section className="py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {navCards.map(({ to, image, title, text }) => (
            <Link
              key={to}
              to={to}
              className="reveal group block text-center space-y-4 no-underline"
            >
              <div className="overflow-hidden rounded h-96 md:h-[28rem]">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{
                    border: "1px solid var(--color-gold-light)",
                    padding: "4px",
                  }}
                />
              </div>
              <h2
                className="cormorant-garamond-semibold text-xl tracking-[0.15em] transition-colors duration-200"
                style={{ color: "var(--color-charcoal)" }}
              >
                {title}
              </h2>
              <p
                className="birthstone-regular text-2xl"
                style={{ color: "var(--color-gold)" }}
              >
                {text}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
