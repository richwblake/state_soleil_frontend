export default function PortfolioCard({ src, alt, caption, location, credits }) {
  return (
    <div className="group relative overflow-hidden rounded h-96 sm:h-80 lg:h-96">
      <img
        src={src}
        alt={alt || "Portfolio image"}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Hover overlay - desktop only */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
        {caption && (
          <p className="cormorant-garamond-regular text-white text-lg text-center tracking-wide">
            {caption}
          </p>
        )}
        {location && (
          <p className="text-white/80 text-sm mt-1">{location}</p>
        )}
        {credits && (
          <p className="text-white/60 text-xs mt-1 italic">{credits}</p>
        )}
      </div>
    </div>
  );
}
