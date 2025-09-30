import InquiryHeaderDT from "../assets/landscapes/inquiry-header-dt.webp";
import InquiryHeaderMB from "../assets/portraits/inquiry-header-mb.webp";
import InquiryForm from "../components/inquiryForm";

export default function Contact() {
  return (
    <div id="contact-page">
      <img className="dt-header-img" src={InquiryHeaderDT} />
      <img className="mb-header-img" src={InquiryHeaderMB} />
      <div className="contact-container">
        <h1 className="inquiry-header cormorant-garamond-regular">
          Let's plan something <i>beautiful</i> together
        </h1>
        <InquiryForm />
      </div>
    </div>
  );
}
