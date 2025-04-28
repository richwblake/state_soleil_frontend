import "./inquiryForm.css";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    eventType: "Chose an event",
    date: "yyyy-MM-dd",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const postObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    setSubmitted(!submitted);

    await fetch("https://statesoleil.com/api/messages", postObj);
  };

  if (!submitted) {
    return (
      <div id="inquiry-form-container">
        <form onSubmit={onSubmit} id="inquiry-form">
          <h3>Your Name</h3>
          <div id="names-container">
            <div className="input-container">
              <input
                value={formData.firstName}
                onChange={(e) => updateFormData(e)}
                autoComplete="on"
                id="first-name"
                type="text"
                name="firstName"
              />
              <label htmlFor="first-name">First Name</label>
            </div>
            <div className="input-container">
              <input
                value={formData.lastName}
                onChange={(e) => updateFormData(e)}
                autoComplete="on"
                id="last-name"
                type="text"
                name="lastName"
              />
              <label htmlFor="last-name">Last Name</label>
            </div>
          </div>
          <h3>Contact Information</h3>
          <div id="contact-info-container">
            <div className="input-container">
              <input
                value={formData.email}
                onChange={(e) => updateFormData(e)}
                autoComplete="on"
                id="email"
                type="text"
                name="email"
                required
              />
              <label htmlFor="email">E-mail Address</label>
            </div>
            <div className="input-container">
              <input
                value={formData.phone}
                onChange={(e) => updateFormData(e)}
                autoComplete="on"
                id="phone"
                type="text"
                name="phone"
                required
              />
              <label htmlFor="phone">Phone Number</label>
            </div>
          </div>
          <h3>Event Details</h3>
          <div className="input-container">
            <select
              onChange={(e) => updateFormData(e)}
              id="event-type"
              className="event-type"
              name="eventType"
              defaultValue="placeholder"
            >
              <option value="placeholder" hidden>
                Choose an event
              </option>
              <option value="wedding">Wedding</option>
              <option value="corporate">Corporate</option>
              <option value="editorial">Editorial</option>
              <option value="party">Party</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="event-type">Event Type</label>
          </div>
          <div className="input-container">
            <input
              onChange={(e) => updateFormData(e)}
              id="event-date"
              className="event-details"
              defaultValue={new Date().toISOString().substring(0, 10)}
              type="date"
              name="date"
            />
            <label htmlFor="event-date">Date of Event</label>
          </div>
          <div className="input-container">
            <label htmlFor="notes">Additional Notes</label>
            <textarea
              value={formData.notes}
              onChange={(e) => updateFormData(e)}
              rows={4}
              cols={40}
              id="notes"
              type="textbox"
              name="notes"
            />
          </div>
          <div className="input-container">
            <button
              type="submit"
              className="cormorant-garamond-regular"
              id="inquiry-submit-btn"
            >
              SUBMIT INQUIRY
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <p className="submit-message">
        Your inquiry has been received, please reach out to
        morgan@statesoleil.com for further requests
      </p>
    );
  }
}
