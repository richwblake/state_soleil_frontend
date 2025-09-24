import Testimonial from "./testimonial";
import { useState } from "react";
import Testimonial1 from "../assets/testimonial1.jpg";
import Testimonial2 from "../assets/testimonial2.jpg";
import Testimonial3 from "../assets/testimonial3.jpg";
import Arrow from "./arrow";

export default function TestimonialList() {
  const [currentTestId, setCurrentTestId] = useState(1);

  const testimonials = [
    {
      id: 1,
      content:
        "State Soleil was the best decision I could have made for our wedding day!",
      author: "Carly S.",
      imgUrl: Testimonial1,
    },
    {
      id: 2,
      content:
        "Morgan immediately understood my vision and brought it to life.",
      author: "Nicole L.",
      imgUrl: Testimonial2,
    },
    {
      id: 3,
      content:
        "State Soleil has easily earned “preferred vendor” status in my books as a Tampa wedding planner.",
      author: "Emily R.",
      imgUrl: Testimonial3,
    },
  ];

  const updateCurrentTest = (newId) => {
    if (newId > testimonials.length) {
      setCurrentTestId(1);
    } else if (newId < 1) {
      setCurrentTestId(testimonials.length);
    } else {
      setCurrentTestId(newId);
    }
  };

  const currentTest = testimonials.find((t) => t.id === currentTestId);

  return (
    <div id="testimonial-container">
      <Testimonial
        content={currentTest.content}
        author={currentTest.author}
        imgUrl={currentTest.imgUrl}
      />
      <div id="test-picker">
        <p>0{currentTestId}</p>
        <button
          className="test-btn"
          onClick={() => updateCurrentTest(currentTestId - 1)}
        >
          <Arrow arrowType={"left"} />
        </button>
        {" / "}
        <button
          className="test-btn"
          onClick={() => updateCurrentTest(currentTestId + 1)}
        >
          <Arrow arrowType={"right"} />
        </button>
      </div>
    </div>
  );
}
