import PageWrapper from "../components/PageWrapper";
import HeroSection from "../components/HeroSection";
import InquiryForm from "../components/InquiryForm";
import InquiryHeaderDT from "../assets/landscapes/inquiry-header-dt.webp";
import InquiryHeaderMB from "../assets/portraits/inquiry-header-mb.webp";

export default function Contact() {
  return (
    <PageWrapper>
      <HeroSection
        mobileImg={InquiryHeaderMB}
        desktopImg={InquiryHeaderDT}
        alt="State Soleil inquiry"
      />

      <section className="py-12 px-6">
        <div className="reveal max-w-xl mx-auto text-center mb-10">
          <h1
            className="cormorant-garamond-regular text-4xl md:text-5xl tracking-wide"
            style={{
              color: "var(--color-charcoal)",
              borderBottom: "1px solid var(--color-gold-light)",
              paddingBottom: "1.5rem",
            }}
          >
            Let's plan something <em>beautiful</em> together
          </h1>
        </div>

        <div className="reveal">
          <InquiryForm />
        </div>
      </section>
    </PageWrapper>
  );
}
