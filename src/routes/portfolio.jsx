import './portfolio.css';
import Port1 from '../assets/port1.jpg';
import Port2 from '../assets/port2.jpg';
import Port3 from '../assets/port3.jpg';
import Port4 from '../assets/port4.jpg';
import Port5 from '../assets/port5.jpg';
import Port6 from '../assets/port6.jpg';
import Port7 from '../assets/port7.jpg';
import Port8 from '../assets/port8.jpg';
import Port9 from '../assets/port9.jpg';
import HeaderImage from '../components/headerImage';

export default function Portfolio() {
    return (
        <div id='portfolio-page'>
            <img src={Port1} />
            <img src={Port2} />
            <img src={Port3} />
            <img src={Port5} />
            <img src={Port6} />
            <img src={Port7} />
            <img src={Port8} />
            <img src={Port9} />
            <img src={Port1} />
        </div>
    );
}

