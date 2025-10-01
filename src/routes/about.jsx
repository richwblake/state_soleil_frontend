import ContactBtn from "../components/contactbtn";
import AboutHeaderMB from "../assets/portraits/about-main-mb.webp";
import AboutHeaderDT from "../assets/landscapes/about-main-dt.webp";
import PersonalImage from "../assets/universal/about1.webp";
import InquireImage from "../assets/universal/about2.webp";

export default function About() {
  return (
    <div id="about-page">
      <img className="md:hidden mb-8" src={AboutHeaderMB} />
      <img className="hidden md:block mb-8" src={AboutHeaderDT} />
      <div className="space-y-8 my-8">
        <div id="company-about" className="about-content space-y-8 my-8 mx-4">
          <h1 className="text-center text-5xl">ABOUT STATE SOLEIL</h1>
          <p className="text-xl leading-relaxed">
            State Soleil’s floral design studio was founded on the principles of
            Timelessness of Romance and Tasteful Traditions. We are true
            romantics here - we want to hear your love story as each is
            exceptionally unique. We are naturally pulled to the Old World
            aesthetic and have deep appreciation for the preservation of
            tradition. We care deeply about the attention to detail of your
            event and do not accept more than one booking per week. This allows
            us to focus solely on you and your needs. Here at State Soleil, we
            prioritize quality over everything.
          </p>
        </div>
        <img className="about-content-img" src={PersonalImage} />
        <div id="owner-about" className="about-content space-y-8 my-8 mx-4">
          <h1 className="text-center text-5xl">ABOUT THE FOUNDER</h1>
          <p className="text-xl leading-relaxed">
            State Soleil was founded by Morgan Rinaldo, a fourth-generation
            Floridian. Her family roots begin in Lake Okeechobee and have since
            spread across the state. Each generation of this family has had a
            love for botany and florals. Morgan graduated from the Dedman School
            of Hospitality from Florida State University. Additionally, she has
            a degree in Building Design and Construction Management which is
            instrumental in building wedding floral installations. On her off
            time, she can be found cooking something spicy or plotting her next
            getaway!
          </p>
        </div>
        <div className="about-contact-btn space-y-8 my-8">
          <img className="about-content-img" src={InquireImage} />
          <ContactBtn btnText={"GET IN TOUCH"} />
        </div>
      </div>
    </div>
  );
}
