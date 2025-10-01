import { Link } from "react-router-dom";

export default function HomeNavContainer({ to, image, title, text }) {
  return (
    <div className="my-4 md:w-1/2 md:mx-auto">
      <Link className="space-y-4" to={to}>
        <img className="md:border md:p-3" src={image} />
        <h1 className="cormorant-garamond-regular text-xl border rounded w-fit mx-auto p-2">
          {title}
        </h1>
        <p className="birthstone-regular text-2xl">{text}</p>
      </Link>
    </div>
  );
}
