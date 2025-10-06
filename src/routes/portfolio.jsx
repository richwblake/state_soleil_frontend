import PortfolioImage from "../components/PortfolioImage";

export default function Portfolio() {
  const images = import.meta.glob("/src/assets/universal/port*.webp", {
    eager: true,
  });

  const imgPaths = Object.values(images).map((mod) => mod.default);

  const renderPortfolioImages = () => {
    return imgPaths.map((ip) => <PortfolioImage key={ip} path={ip} />);
  };

  return <div id="portfolio-page">{renderPortfolioImages()}</div>;
}
