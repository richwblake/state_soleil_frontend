import './home.css';
import ContactBtn from '../components/contactbtn';

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
        </div>
    );
}

