import { Link } from "react-router-dom";
import HomeMainPhotoDT from "../assets/landscapes/home-main-dt.webp";
import HomeMainPhotoMB from "../assets//portraits/home-main-mb.webp";
import AboutPhoto from "../assets/universal/main-about.webp";
import PortfolioPhoto from "../assets/universal/main-portfolio.webp";
import InquirePhoto from "../assets/universal/main-inquire.webp";
import ContactBtn from "../components/contactbtn";
import Logo from "../assets/universal/logo.png";

export default function Home() {
  return (
    <div id="home-page">
      <img className="md:hidden" src={HomeMainPhotoMB} />
      <img className="hidden md:block" src={HomeMainPhotoDT} />
      <div className="home-content">
        <div id="home-title-intro">
          <img className="w-full md:w-1/2 mx-auto" src={Logo} />
          <p className="cormorant-garamond-regular text-4xl text-center py-5 border-y mx-7 md:text-8xl">
            EXQUISITE FLORALS{" "}
            <span className="birthstone-regular md:text-5xl">in</span>{" "}
            SPECTACULAR WEDDINGS
          </p>
          <div className="home-intro-text-and-contact">
            <p className="home-about-text cormorant-garamond-regular">
              From the home base of Tampa Bay to the Blue Ridge Mountains, State
              Soleil will bring ethereal blooms to make your wedding fantasies
              come to life.
            </p>
            <ContactBtn btnText={"GET IN TOUCH"} />
          </div>
        </div>
        <div className="home-link-container">
          <Link className="home-link" to="about">
            <img className="home-link-imgs" src={AboutPhoto} />
            <div className="home-link-text">
              <h1 className="home-link-title cormorant-garamond-regular">
                ABOUT
              </h1>
              <p className="birthstone-regular home-link-sub">
                learn more about our ambitions
              </p>
            </div>
          </Link>
        </div>
        <div className="home-link-container">
          <Link className="home-link" to="portfolio">
            <img className="home-link-imgs" src={PortfolioPhoto} />
            <div className="home-link-text">
              <h1 className="home-link-title cormorant-garamond-regular">
                PORTFOLIO
              </h1>
              <p className="birthstone-regular home-link-sub">see our work</p>
            </div>
          </Link>
        </div>
        <div className="home-link-container">
          <Link className="home-link" to="contact">
            <img className="home-link-imgs" src={InquirePhoto} />
            <div className="home-link-text">
              <h1 className="home-link-title cormorant-garamond-regular">
                INQUIRE
              </h1>
              <p className="birthstone-regular home-link-sub">
                transform your event with our arrangements
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
