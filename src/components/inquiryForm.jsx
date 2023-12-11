import "./inquiryForm.css";

export default function ContactForm() {
    return (
        <div id="inquiry-form-container">
            <form id="inquiry-form">
                <h3>Your Name</h3>
                <div id="names-container">
                    <div className="input-container">
                        <input type="text" name="first-name" />
                        <label htmlFor="first-name">First Name</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="last-name" />
                        <label htmlFor="last-name">Last Name</label>
                    </div>
                </div>
                <h3>Contact Information</h3>
                <div id="contact-info-container">
                    <div className="input-container">
                        <input type="text" name="email" />
                        <label htmlFor="email">E-mail Address</label>
                    </div>
                    <div className="input-container">
                        <input type="text" name="phone" />
                        <label htmlFor="phone">Phone Number</label>
                    </div>
                </div>
                <h3>Event Details</h3>
                <div className="input-container">
                    <select className="event-details" name="event-type" defaultValue="placeholder">
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
                    <input className="event-details" type="date" name="event-date" />
                    <label htmlFor="event-date">Date of Event</label>
                </div>
                <div className="input-container">
                    <label htmlFor="notes">Additional Notes</label>
                    <textarea rows={4} cols={40} type="textbox" name="notes" />
                </div>
                <div className="input-container">
                    <button type="submit" id="inquiry-submit-btn">Submit Inquiry</button>
                </div>
            </form>
        </div>
    )
}
