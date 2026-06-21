import PageWrapper from "../components/PageWrapper";
import PortfolioCard from "../components/PortfolioCard";

export default function Portfolio() {
  const images = import.meta.glob("/src/assets/universal/port*.webp", {
    eager: true,
  });

  const imgPaths = Object.values(images).map((mod) => mod.default);

  return (
    <PageWrapper>
      <section className="py-12 px-6">
        {/* Header */}
        <div className="reveal text-center mb-10">
          <h1
            className="cormorant-garamond-semibold text-4xl md:text-5xl tracking-[0.1em] mb-2"
            style={{ color: "var(--color-charcoal)" }}
          >
            PORTFOLIO
          </h1>
          <p
            className="birthstone-regular text-3xl"
            style={{ color: "var(--color-gold)" }}
          >
            our work
          </p>
        </div>

        {/* Unified responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {imgPaths.map((src) => (
            <div key={src} className="reveal">
              <PortfolioCard
                src={src}
                alt="State Soleil floral arrangement"
                location="Tampa, FL"
                credits="@statesoleilfloristry"
              />
            </div>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
