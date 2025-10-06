import PortfolioImage from "../components/PortfolioImage";

export default function Portfolio() {
  const images = import.meta.glob("/src/assets/universal/port*.webp", {
    eager: true,
  });

  const imgPaths = Object.values(images).map((mod) => mod.default);

  const renderPortfolioImages = () => {
    return imgPaths.map((ip) => (
      <PortfolioImage key={ip} path={ip} comment={"comment here"} />
    ));
  };

  return (
    <div id="portfolio-page" className="space-y-9">
      {renderPortfolioImages()}
    </div>
  );
}
