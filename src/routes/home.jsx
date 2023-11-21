import './home.css';
import { Link } from 'react-router-dom';
import AboutPhoto from '../assets/main-about-photo.jpg';
import PortfolioPhoto from '../assets/main-portfolio.jpg';
import InquirePhoto from '../assets/main-inquire.jpg';
import ContactBtn from '../components/contactbtn';
import RightArrow from '../components/rightarrow';

export default function Home() {
    return (
        <div id='home-page'>
            <div id='home-main-img'>
                <h1>Using old world style to reinvent florals</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p> 
            </div>
            <div id='home-title-intro'>
                <h1>State Soleil Floral Company</h1>
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

