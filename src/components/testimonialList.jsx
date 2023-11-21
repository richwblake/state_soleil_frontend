import Testimonial from './testimonial';

export default function TestimonialList() {
    const testimonials = [
        {
            content: "Testimonial 1",
            author: "Person 1",
            imgUrl: "/src/assets/testimonial1.jpg",
        },
        {
            content: "Testimonial 2",
            author: "Person 2",
            imgUrl: "/src/assets/testimonial2.jpg",
        },
        {
            content: "Testimonial 3",
            author: "Person 3",
            imgUrl: "/src/assets/testimonial3.jpg",
        },
    ];

    return testimonials.map(t => <Testimonial key={t.content} content={t.content} author={t.author} imgUrl={t.imgUrl} />);
}
