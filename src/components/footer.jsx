import './footer.css';
import Insta from './insta';
import Pintrest from './pintrest';
import Twitter from './twitter';
import UpArrow from './uparrow';

export default function Footer() {
    return (
        <div id='footer'>
            <div id='sm-icons'>
                <Insta />
                <Pintrest />
                <Twitter />
            </div>
            <button id='return-top' onClick={() => window.scrollTo(0,0)}>
                <UpArrow />
            </button>
        </div>
    );
}
