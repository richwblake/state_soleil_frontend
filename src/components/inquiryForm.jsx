export async function action({ request }) {
  const postObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  };

  await fetch("https://statesoleil.com/api/messages", postObj);
}

export default function ContactForm() {
  return (
    <form id="inquiry-form">
      <h3>Your Name</h3>
      <div className="input-container">
        <input
          id="first-name"
          autoComplete="off"
          type="text"
          name="firstName"
        />
        <label htmlFor="first-name">First Name</label>
      </div>
      <div className="input-container">
        <input id="last-name" autoComplete="off" type="text" name="lastName" />
        <label htmlFor="last-name">Last Name</label>
      </div>
      <h3>Contact Information</h3>
      <div id="contact-info-container">
        <input
          id="email"
          autoComplete="email"
          type="text"
          name="email"
          required
        />
        <label htmlFor="email">E-mail Address</label>
      </div>
      <div className="input-container">
        <input
          id="phone"
          type="text"
          autoComplete="tel"
          name="phone"
          required
        />
        <label htmlFor="phone">Phone Number</label>
      </div>
      <h3>Event Details</h3>
      <div className="input-container">
        <select
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
        <textarea rows={4} cols={40} id="notes" type="textbox" name="notes" />
      </div>
      <button type="submit" className="cormorant-garamond-regular">
        SUBMIT INQUIRY
      </button>
    </form>
  );
}
