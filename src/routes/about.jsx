import ContactBtn from '../components/contactbtn';
import AboutHeaderMB from '../assets/about-main-mb.jpg';
import AboutHeaderDT from '../assets/about-main-dt.jpg';
import PersonalImage from '../assets/about1.jpg';
import InquireImage from '../assets/about2.jpg';
import './about.css';

export default function About() {
    return (
        <div id='about-page'>
            <img className='about-header-mb' src={AboutHeaderMB} />
            <img className='about-header-dt' src={AboutHeaderDT} />
            <div className='about-container'>
                <div id="company-about" className="about-content">
                    <h1>ABOUT STATE SOLEIL</h1>
                    <p>State Soleil’s floral design studio was founded on the principles of Timelessness of Romance and Tasteful Traditions. We are true romantics here - we want to hear your love story as each is exceptionally unique. We are naturally pulled to the Old World aesthetic and have deep appreciation for the preservation of tradition. We care deeply about the attention to detail of your event and do not accept more than one booking per week. This allows us to focus solely on you and your needs. Here at State Soleil, we prioritize quality over everything.</p>
                </div>
                <img className='about-content-img' src={PersonalImage} />
                <div id="owner-about" className="about-content">
                    <h1>ABOUT THE FOUNDER</h1> 
                    <p>State Soleil was founded by Morgan Rinaldo, a fourth-generation Floridian. Her family roots begin in Lake Okeechobee and have since spread across the state. Each generation of this family has had a love for botany and florals. Morgan graduated from the Dedman School of Hospitality from Florida State University. Additionally, she has a degree in Construction Management which is instrumental in building wedding floral installations. On her off time, she can be found cooking something spicy or plotting her next getaway!</p>
                </div>
                <img className='about-content-img' src={InquireImage} />
                <div className="about-contact-btn">
                    <ContactBtn btnText={"GET IN TOUCH"} />
                </div>
            </div>
        </div>
    );
}
