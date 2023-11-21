import './testimonialList.css';
import Testimonial from './testimonial';
import { useState } from 'react';
import LeftArrow from './leftarrow';
import RightArrow from './rightarrow';


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

    const updateCurrentTest = newId => {
        if (newId > testimonials.length) {
            setCurrentTestId(1);
        } else if (newId < 1) {
            setCurrentTestId(testimonials.length)
        } else {
            setCurrentTestId(newId);
        }
    };

    const currentTest = testimonials.find(t => t.id === currentTestId);

    return (
        <div id='testimonial-container'>
            <Testimonial content={currentTest.content} author={currentTest.author} imgUrl={currentTest.imgUrl} />
            <div id='test-picker'>
                <p>0{currentTestId}</p>
                <button className='test-btn' onClick={() => updateCurrentTest(currentTestId - 1)} ><LeftArrow /></button>
                {" / "}
                <button className='test-btn' onClick={() => updateCurrentTest(currentTestId + 1)} ><RightArrow /></button>
            </div>
        </div>
    );
}
