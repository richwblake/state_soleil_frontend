import './contactbtn.css';

export default function ContactBtn({ btnText = 'Inquire' }) {
    return (
        <button onClick={() => console.log("Inquire cliked")} className='contact-btn'>{btnText}</button>
    );
}
