import Testimonial from './testimonial';
import { useState } from 'react';

export default function TestimonialList() {

    const [currentTestId, setCurrentTestId] = useState(1);

    const testimonials = [
        {
            id: 1,
            content: "Testimonial 1",
            author: "Person 1",
            imgUrl: "/src/assets/testimonial1.jpg",
        },
        {
            id: 2,
            content: "Testimonial 2",
            author: "Person 2",
            imgUrl: "/src/assets/testimonial2.jpg",
        },
        {
            id: 3,
            content: "Testimonial 3",
            author: "Person 3",
            imgUrl: "/src/assets/testimonial3.jpg",
        },
    ];

    const currentTest = testimonials.find(t => t.id === currentTestId);

    return <Testimonial content={currentTest.content} author={currentTest.author} imgUrl={currentTest.imgUrl} />;
}
