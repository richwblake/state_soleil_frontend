import './testimonialList.css';
import Testimonial from './testimonial';
import { useState } from 'react';
import LeftArrow from './leftarrow';
import RightArrow from './rightarrow';
import Testimonial1 from '../assets/testimonial1.jpg';
import Testimonial2 from '../assets/testimonial2.jpg';
import Testimonial3 from '../assets/testimonial3.jpg';


export default function TestimonialList() {

    const [currentTestId, setCurrentTestId] = useState(1);

    const testimonials = [
        {
            id: 1,
            content: "Testimonial 1",
            author: "Person 1",
            imgUrl: Testimonial1,
        },
        {
            id: 2,
            content: "Testimonial 2",
            author: "Person 2",
            imgUrl: Testimonial2,
        },
        {
            id: 3,
            content: "Testimonial 3",
            author: "Person 3",
            imgUrl: Testimonial3,
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
