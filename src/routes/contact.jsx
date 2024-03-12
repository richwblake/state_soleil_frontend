import InquiryHeaderDT from '../assets/inquiry-header-dt.jpg';
import InquiryHeaderMB from '../assets/inquiry-header-mb.jpg';
import InquiryForm from '../components/inquiryForm';
import './contact.css';

export default function Contact() {
    return (
        <div id='contact-page'>
            <img className='dt-header-img' src={InquiryHeaderDT} />
            <img className='mb-header-img' src={InquiryHeaderMB} />
            <div className='contact-container'>
                <h1 className='cormorant-garamond-regular'>Let's plan something <i>beautiful</i> together</h1>
                <InquiryForm />
            </div>
        </div>
    );
}

