import PortfolioThumb from "../assets/universal/portfolio-pic-thumb.webp";

export default function PortfolioImage({ path, credits, comment }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3 px-2">
        <img
          src={PortfolioThumb}
          className="h-10 w-10 rounded-full object-cover"
          alt=""
        />
        <div className="flex flex-col">
          <p>statesoleilfloristry</p>
        </div>
      </div>
      <img className="" src={path} alt="porfolio picture" />
      <p className="px-2">
        <b>statesoleilfloristry</b> {comment}
      </p>
    </div>
  );
}
