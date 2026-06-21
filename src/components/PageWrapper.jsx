import useScrollReveal from "../hooks/useScrollReveal";
import usePageTransition from "../hooks/usePageTransition";

export default function PageWrapper({ children }) {
  const pageRef = usePageTransition();
  useScrollReveal();

  return (
    <div ref={pageRef} className="page-enter">
      {children}
    </div>
  );
}
