export default function SocialMediaIcon({ svgMap, linkTo }) {
  return (
    <div className="footer-sm-btn">
      <a target="_blank" href={linkTo}>
        <svg
          className="w-10 h-10 m-6"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 496 512"
        >
          <path d={svgMap} />
        </svg>
      </a>
    </div>
  );
}
