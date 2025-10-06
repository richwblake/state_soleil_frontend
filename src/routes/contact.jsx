import InquiryHeaderDT from "../assets/landscapes/inquiry-header-dt.webp";
import InquiryHeaderMB from "../assets/portraits/inquiry-header-mb.webp";
import InquiryForm from "../components/inquiryForm";

export default function Contact() {
  return (
    <div id="contact-page">
      <img className="hidden md:block" src={InquiryHeaderDT} />
      <img className="md:hidden" src={InquiryHeaderMB} />
      <div className="w-fit md:w-1/2 space-y-6 my-6 mx-auto px-5">
        <h1 className="cormorant-garamond-regular text-5xl text-center pb-6 border-b">
          Let's plan something <i>beautiful</i> together
        </h1>
        <InquiryForm />
      </div>
    </div>
  );
}
