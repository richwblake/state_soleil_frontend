import PortfolioThumb from "../assets/universal/insta-pic.webp";

export default function PortfolioImage({ path, credits, comment, location }) {
  return (
    <div className="space-y-2 md:hidden">
      <div className="flex items-center gap-3 px-2">
        <img
          src={PortfolioThumb}
          className="h-10 w-10 rounded-full object-cover"
          alt="insta-image"
        />
        <div className="flex flex-col">
          <p>statesoleilfloristry</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>

            <p>{location}</p>
          </div>
        </div>
      </div>
      <img className="" src={path} alt="porfolio picture" />
      <div className="px-2">
        <p>
          <b>statesoleilfloristry</b> {comment}
        </p>
        <p>
          <i>{credits}</i>
        </p>
      </div>
    </div>
  );
}
