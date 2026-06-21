export default function HeroSection({
  mobileImg,
  desktopImg,
  alt = "",
  children,
  overlayOpacity = "from-black/40 to-transparent",
}) {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Mobile image */}
      <img
        src={mobileImg}
        alt={alt}
        className="block w-full object-cover md:hidden"
        style={{ maxHeight: "70vh" }}
      />
      {/* Desktop image */}
      <img
        src={desktopImg}
        alt={alt}
        className="hidden w-full object-cover md:block"
        style={{ maxHeight: "60vh" }}
      />
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t ${overlayOpacity}`}
      />
      {/* Text content */}
      {children && (
        <div className="absolute inset-0 flex items-end justify-center pb-10">
          {children}
        </div>
      )}
    </div>
  );
}
