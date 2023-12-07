export default function ContactForm() {
    return (
        <div id="contact-form-container">
            <form id="contact-form">
                <div className="input-container">
                    <label htmlFor="first-name">First Name:</label>
                    <input type="text" name="first-name" />
                </div>
                <div className="input-container">
                    <label htmlFor="last-name">Last Name:</label>
                    <input type="text" name="last-name" />
                </div>
                <div className="input-container">
                    <label htmlFor="email">E-mail Address:</label>
                    <input type="text" name="email" />
                </div>
                <div className="input-container">
                    <label htmlFor="phone">Phone Number:</label>
                    <input type="text" name="phone" />
                </div>
                <div className="input-container">
                    <label htmlFor="event-type">Event Type:</label>
                    <select name="event-type" defaultValue="placeholder">
                        <option value="placeholder" hidden>Choose an event</option>
                        <option value="wedding">Wedding</option>
                        <option value="corperate">Corperate</option>
                        <option value="editorial">Editorial</option>
                        <option value="party">Party</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="input-container">
                    <label htmlFor="event-date">Date of Event:</label>
                    <input type="date" name="event-date" />
                </div>
                <div className="input-container">
                    <label htmlFor="notes">First Name:</label>
                    <textarea rows={4} cols={40} type="textbox" name="notes" />
                </div>
                <div className="input-container">
                    <button type="submit" id="inquiry-submit-btn">Submit Inquiry</button>
                </div>
            </form>
        </div>
    )
}
