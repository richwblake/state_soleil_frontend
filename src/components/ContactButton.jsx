import { useNavigate } from "react-router-dom";

export default function ContactButton({ btnText = "Inquire" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/contact")}
      className="cormorant-garamond-semibold block mx-auto px-8 py-3 text-lg tracking-widest transition-colors duration-200 cursor-pointer"
      style={{
        border: "1px solid var(--color-gold)",
        color: "var(--color-gold-dark)",
        backgroundColor: "transparent",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-gold)";
        e.currentTarget.style.color = "white";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "var(--color-gold-dark)";
      }}
    >
      {btnText}
    </button>
  );
}
