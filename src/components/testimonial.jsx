export default function Testimonial({ content, author, imgUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
      className="text-white text-center p-8 text-lg bg-cover w-full"
    >
      <p>{content}</p>
      <span className="birthstone-regular text-2xl">- {author}</span>
    </div>
  );
}
