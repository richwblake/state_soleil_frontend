import './home.css';
import { Link } from 'react-router-dom';
import HomeMainPhoto from '../assets/home-main.jpg';
import AboutPhoto from '../assets/main-about-photo.jpg';
import PortfolioPhoto from '../assets/main-portfolio.jpg';
import InquirePhoto from '../assets/main-inquire.jpg';
import ContactBtn from '../components/contactbtn';
import RightArrow from '../components/rightarrow';
import TestimonialList from '../components/testimonialList';
import HeaderImage from '../components/headerImage';
import Logo from '../assets/logo.png';

export default function Home() {
    return (
        <div id='home-page'>
            <img src={HomeMainPhoto} />
            <div id='home-title-intro'>
                <img src={Logo} />
                <span className="home-intro-text cormorant-garamond-regular">EXQUISITE FLORALS <span className="home-intro-inner-span birthstone-regular">in</span> SPECTACULAR WEDDINGS</span>
                <div className="home-intro-text-and-contact">
                    <p className="home-about-text cormorant-garamond-regular">From the home base of Tampa Bay to the Blue Ridge Mountains, State Soleil will bring ethereal blooms to make your wedding fantasies come to life.</p>
                    <ContactBtn btnText={"GET IN TOUCH"} />
                </div>
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='about'>
                    <img className='home-link-imgs' src={AboutPhoto} />
                    <div className="home-link-text">
                        <h1 className='home-link-title cormorant-garamond-regular'>ABOUT</h1>
                        <p className="birthstone-regular home-link-sub">learn more about our ambitions</p>
                    </div>
                </Link>
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='portfolio'>
                    <img className='home-link-imgs' src={PortfolioPhoto} />
                    <div className="home-link-text">
                        <h1 className='home-link-title cormorant-garamond-regular'>PORTFOLIO</h1>
                        <p className="birthstone-regular home-link-sub">see our work</p>
                    </div>
                </Link>
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='contact'>
                    <img className='home-link-imgs' src={InquirePhoto} />
                    <div className="home-link-text">
                        <h1 className='home-link-title cormorant-garamond-regular'>INQUIRE</h1>
                        <p className="birthstone-regular home-link-sub">transform your event with our arrangements</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

