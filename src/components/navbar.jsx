import Hamburger from "hamburger-react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div id="navbar" className="flex items-center justify-between p-6">
      <div
        className={`${isOpen ? "invisible" : "visible"} flex flex-col`}
        id="nav-text"
      >
        <Link to={"/"}>
          {" "}
          <span id="logo" className="text-2xl">
            STATE SOLEIL
          </span>
        </Link>
        <p id="path-title" className="birthstone-regular text-3xl">
          {pathname.substring(1)}
        </p>
      </div>
      <Hamburger id="navmenu-btn" toggled={isOpen} toggle={setIsOpen} />
    </div>
  );
}
