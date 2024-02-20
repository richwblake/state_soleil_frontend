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
                <span>Brief company explanation or value of operation</span>
                <p>ABOUT THE COMPANY HERE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, </p>
                <ContactBtn btnText={"get in touch"} />
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='about'>
                    <img className='home-link-imgs' src={AboutPhoto} />
                    <h1>About</h1>
                    <p>Learn more about our ambitions</p>
                    <RightArrow />
                </Link>
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='portfolio'>
                    <img className='home-link-imgs' src={PortfolioPhoto} />
                    <h1>Portfolio</h1>
                    <p>See our work</p>
                    <RightArrow />
                </Link>
            </div>
            <div className='home-link-container'>
                <Link className='home-link' to='contact'>
                    <img className='home-link-imgs' src={InquirePhoto} />
                    <h1>Inquire</h1>
                    <p>Transform your event with our arrangements</p>
                    <RightArrow />
                </Link>
            </div>
        </div>
    );
}

