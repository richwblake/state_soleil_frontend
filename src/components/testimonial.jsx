import './testimonial.css';

export default function Testimonial({ content, author, imgUrl }) {
    return (
        <div style={{
            backgroundImage: `url("${imgUrl}")`
        }}
            className="testimonial">
            <p>{content}</p>
            <span>- {author}</span>
        </div>
    );
}
