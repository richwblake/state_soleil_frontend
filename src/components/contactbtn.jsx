import { useNavigate } from "react-router-dom";

export default function ContactBtn({ btnText = "Inquire" }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <button
      onClick={handleNavigate}
      id="contact-btn"
      className="cormorant-garamond-regular border rounded p-2 mx-auto block text-xl"
    >
      {btnText}
    </button>
  );
}
