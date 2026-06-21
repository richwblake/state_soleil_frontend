import PageWrapper from "../components/PageWrapper";
import HeroSection from "../components/HeroSection";
import ContactButton from "../components/ContactButton";
import GoldDivider from "../components/GoldDivider";
import AboutHeaderMB from "../assets/portraits/about-main-mb.webp";
import AboutHeaderDT from "../assets/landscapes/about-main-dt.webp";
import PersonalImage from "../assets/universal/about1.webp";
import InquireImage from "../assets/universal/about2.webp";

export default function About() {
  return (
    <PageWrapper>
      <HeroSection
        mobileImg={AboutHeaderMB}
        desktopImg={AboutHeaderDT}
        alt="About State Soleil"
      />

      <section className="py-12 px-6 max-w-4xl mx-auto">
        {/* Company section: text left, champagne image right */}
        <div className="reveal flex flex-col md:flex-row gap-8 items-center mb-12">
          <div className="space-y-6 md:w-1/2">
            <h1
              className="cormorant-garamond-semibold text-center md:text-left text-4xl md:text-5xl tracking-[0.1em]"
              style={{ color: "var(--color-charcoal)" }}
            >
              ABOUT STATE SOLEIL
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-charcoal)" }}
            >
              State Soleil's floral design studio was founded on the principles of
              Timelessness of Romance and Tasteful Traditions. We are true
              romantics here - we want to hear your love story as each is
              exceptionally unique. We are naturally pulled to the Old World
              aesthetic and have deep appreciation for the preservation of
              tradition. We care deeply about the attention to detail of your
              event and do not accept more than one booking per week. This allows
              us to focus solely on you and your needs. Here at State Soleil, we
              prioritize quality over everything.
            </p>
          </div>
          <img
            className="w-full md:w-1/2 object-cover rounded"
            src={InquireImage}
            alt="Champagne glasses floral arrangement"
            style={{
              border: "1px solid var(--color-gold-light)",
              padding: "4px",
            }}
          />
        </div>

        {/* Founder section: image left, text right on desktop; text then image on mobile */}
        <div className="reveal flex flex-col md:flex-row gap-8 items-center mb-12">
          <img
            className="w-full md:w-1/2 object-cover rounded order-2 md:order-1"
            src={PersonalImage}
            alt="Morgan Rinaldo, founder"
            style={{
              border: "1px solid var(--color-gold-light)",
              padding: "4px",
            }}
          />
          <div className="space-y-6 md:w-1/2 order-1 md:order-2">
            <h1
              className="cormorant-garamond-semibold text-center md:text-left text-4xl md:text-5xl tracking-[0.1em]"
              style={{ color: "var(--color-charcoal)" }}
            >
              ABOUT THE FOUNDER
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-charcoal)" }}
            >
              State Soleil was founded by Morgan Rinaldo, a fourth-generation
              Floridian. Her family roots begin in Lake Okeechobee and have since
              spread across the state. Each generation of this family has had a
              love for botany and florals. Morgan graduated from the Dedman School
              of Hospitality from Florida State University. Additionally, she has
              a degree in Building Design and Construction Management which is
              instrumental in building wedding floral installations. On her off
              time, she can be found cooking something spicy or plotting her next
              getaway!
            </p>
          </div>
        </div>

        <GoldDivider />

        {/* CTA */}
        <div className="reveal space-y-8 mt-12 text-center">
          <ContactButton btnText="GET IN TOUCH" />
        </div>
      </section>
    </PageWrapper>
  );
}
