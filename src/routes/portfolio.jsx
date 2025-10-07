import PortfolioImage from "../components/PortfolioImage";

export default function Portfolio() {
  const images = import.meta.glob("/src/assets/universal/port*.webp", {
    eager: true,
  });

  const imgPaths = Object.values(images).map((mod) => mod.default);

  const renderPortfolioImages = () => {
    return imgPaths.map((ip) => (
      <PortfolioImage
        key={ip}
        path={ip}
        comment={"comment here"}
        location={"Tampa, Fl"}
        credits={"@photographer"}
      />
    ));
  };

  const renderRawImages = () => {
    return imgPaths.map((ip) => (
      <img className="h-full rounded-md" key={ip} src={ip} alt={ip} />
    ));
  };

  return (
    <div>
      <div id="portfolio-page" className="space-y-9">
        {renderPortfolioImages()}
      </div>
      <div className="hidden md:block md:grid md:grid-cols-3 md:mx-auto md:my-12 md:gap-6 md:w-[90%]">
        {renderRawImages()}
      </div>
    </div>
  );
}
