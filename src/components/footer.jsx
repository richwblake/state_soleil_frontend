import './footer.css';
import Insta from './insta';
import Pintrest from './pintrest';
import Twitter from './twitter';
import UpArrow from './uparrow';
import TestimonialList from './testimonialList';

export default function Footer() {
    return (
        <div id='footer'>
            <TestimonialList />
            <div id='sm-icons'>
                <Insta />
                <Pintrest />
            </div>
            <button id='return-top' onClick={() => window.scrollTo(0,0)}>
                <UpArrow />
            </button>
        </div>
    );
}
