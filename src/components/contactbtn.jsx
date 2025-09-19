import { useNavigate } from 'react-router-dom';

export default function ContactBtn({ btnText = 'Inquire' }) {
    
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contact");
    };

    return (
        <button onClick={handleNavigate} className='contact-btn cormorant-garamond-regular'>{btnText}</button>
    );
}
