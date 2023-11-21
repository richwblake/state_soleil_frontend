import './home.css';
import { Link } from 'react-router-dom';
import AboutPhoto from '../assets/main-about-photo.jpg';
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
            <div id='home-about'>
                <Link to='about'>
                    <img id='home-about-img' src={AboutPhoto} />
                    <h1>About</h1>
                    <p>Learn more about our ambitions</p>
                    <RightArrow />
                </Link>
            </div>
        </div>
    );
}

