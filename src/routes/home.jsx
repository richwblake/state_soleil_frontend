import HomeMainPhotoDT from "../assets/landscapes/home-main-dt.webp";
import HomeMainPhotoMB from "../assets//portraits/home-main-mb.webp";
import AboutPhoto from "../assets/universal/main-about.webp";
import PortfolioPhoto from "../assets/universal/main-portfolio.webp";
import InquirePhoto from "../assets/universal/main-inquire.webp";
import ContactBtn from "../components/contactbtn";
import Logo from "../assets/universal/logo.png";
import HomeNavContainer from "../components/HomeNavContainer";

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
          <div className="home-intro-text-and-contact space-y-8 my-8">
            <p className="cormorant-garamond-regular text-center mx-10 text-3xl md:w-2/3 md:mx-auto">
              From the home base of Tampa Bay to the Blue Ridge Mountains, State
              Soleil will bring ethereal blooms to make your wedding fantasies
              come to life.
            </p>
            <ContactBtn btnText={"GET IN TOUCH"} />
          </div>
        </div>
        <HomeNavContainer
          to={"/about"}
          image={AboutPhoto}
          title={"ABOUT"}
          text={"learn more about our ambitions"}
        />
        <HomeNavContainer
          to={"/portfolio"}
          image={PortfolioPhoto}
          title={"PORTFOLIO"}
          text={"see our work"}
        />
        <HomeNavContainer
          to={"/contact"}
          image={InquirePhoto}
          title={"INQUIRE"}
          text={"transform your event with our arrangements"}
        />
      </div>
    </div>
  );
}
