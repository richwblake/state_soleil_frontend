import HeaderImage from '../components/headerImage';
import InquiryImage from '../assets/inquiry-main.jpg';
import InquiryForm from '../components/inquiryForm';

export default function Contact() {
    return (
        <div id='contact-page'>
            <HeaderImage imageTitle={"Contact Us"} imageUrl={InquiryImage} />
            <InquiryForm />
        </div>
    );
}

