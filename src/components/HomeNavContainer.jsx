import { Link } from "react-router-dom";

export default function HomeNavContainer({ to, image, title, text }) {
  return (
    <div className="home-link-container">
      <Link className="" to={to}>
        <img className="" src={image} />
        <div className="">
          <h1 className="cormorant-garamond-regular">{title}</h1>
          <p className="birthstone-regular">{text}</p>
        </div>
      </Link>
    </div>
  );
}
