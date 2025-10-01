import { Link } from "react-router-dom";

export default function NavMenu({ setIsOpen }) {
  return (
    <div id="navmenu" className="flex flex-col mx-4 my-6 text-4xl space-y-9">
      <Link onClick={() => setIsOpen((prev) => !prev)} to="/">
        Home
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to="about">
        About
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to="contact">
        Inquire
      </Link>
      <Link onClick={() => setIsOpen((prev) => !prev)} to="portfolio">
        Portfolio
      </Link>
    </div>
  );
}
