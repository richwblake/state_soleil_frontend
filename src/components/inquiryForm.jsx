import "./inquiryForm.css";
import { useState } from 'react';

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

    const updateFormData = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        }); 
    };

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        setSubmitted(!submitted);
    };

    if (!submitted) {
        return (
            <div id="inquiry-form-container">
                <form onSubmit={onSubmit} id="inquiry-form">
                    <h3>Your Name</h3>
                    <div id="names-container">
                        <div className="input-container">
                            <input value={formData.firstName} onChange={e => updateFormData(e)} type="text" name="firstName" />
                            <label htmlFor="first-name">First Name</label>
                        </div>
                        <div className="input-container">
                            <input value={formData.lastName} onChange={e => updateFormData(e)} type="text" name="lastName" />
                            <label htmlFor="last-name">Last Name</label>
                        </div>
                    </div>
                    <h3>Contact Information</h3>
                    <div id="contact-info-container">
                        <div className="input-container">
                            <input value={formData.email} onChange={e => updateFormData(e)} type="text" name="email" required />
                            <label htmlFor="email">E-mail Address</label>
                        </div>
                        <div className="input-container">
                            <input value={formData.phone} onChange={e => updateFormData(e)} type="text" name="phone" required />
                            <label htmlFor="phone">Phone Number</label>
                        </div>
                    </div>
                    <h3>Event Details</h3>
                    <div className="input-container">
                        <select onChange={e => updateFormData(e)} className="event-type" name="eventType" defaultValue="placeholder">
                            <option value="placeholder" hidden>Choose an event</option>
                            <option value="wedding">Wedding</option>
                            <option value="corperate">Corperate</option>
                            <option value="editorial">Editorial</option>
                            <option value="party">Party</option>
                            <option value="other">Other</option>
                        </select>
                        <label htmlFor="event-type">Event Type</label>
                    </div>
                    <div className="input-container">
                        <input onChange={e => updateFormData(e)} className="event-details" defaultValue={new Date().toISOString().substring(0, 10)} type="date" name="date" />
                        <label htmlFor="event-date">Date of Event</label>
                    </div>
                    <div className="input-container">
                        <label htmlFor="notes">Additional Notes</label>
                        <textarea value={formData.notes} onChange={e => updateFormData(e)} rows={4} cols={40} type="textbox" name="notes" />
                    </div>
                    <div className="input-container">
                        <button type="submit" id="inquiry-submit-btn">Submit Inquiry</button>
                    </div>
                </form>
            </div>
        )
    } else {
        return (
            <p className="submit-message">Your inquiry has been receieved, please reach out to info@statesoleil.com for further requests</p>
        )
    }
}
