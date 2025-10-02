import { Form, useActionData } from "react-router-dom";

export async function action({ request }) {
  const formData = await request.formData();
  const formJson = Object.fromEntries(formData);
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formJson,
  };

  return config;

  // TODO - COMMENT BACK IN FOR PRODUCTION
  // await fetch("https://statesoleil.com/api/messages", config);
}

export default function ContactForm() {
  const actionData = useActionData();

  console.log(actionData);

  return (
    <Form method="post" id="inquiry-form">
      <div className="grid grid-cols-2 w-full md:w-3/4 mx-auto border">
        <h3 className="col-span-2 mb-4">Your Name</h3>
        <div className="input-container md:max-w-3/4">
          <input
            id="first-name"
            autoComplete="off"
            type="text"
            name="firstName"
            className="border rounded w-full "
          />
          <label className="block text-xs m-1" htmlFor="first-name">
            First Name
          </label>
        </div>
        <div className="justify-self-end md:max-w-3/4">
          <input
            id="last-name"
            autoComplete="off"
            type="text"
            name="lastName"
            className="border rounded w-full "
          />
          <label className="block text-xs m-1" htmlFor="last-name">
            Last Name
          </label>
        </div>
        <h3 className="col-span-2 my-4">Contact Information</h3>
        <div id="contact-info-container">
          <input
            id="email"
            autoComplete="email"
            type="text"
            name="email"
            className="border rounded w-full md:max-w-3/4"
            required
          />
          <label className="block text-xs m-1" htmlFor="email">
            E-mail Address
          </label>
        </div>
        <div className="justify-self-end md:max-w-3/4">
          <input
            id="phone"
            type="text"
            autoComplete="tel"
            name="phone"
            className="border rounded w-full"
            required
          />
          <label className="block text-xs m-1" htmlFor="phone">
            Phone Number
          </label>
        </div>
        <h3 className="col-span-2 my-4">Event Details</h3>
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
          <label className="block text-xs m-1" htmlFor="event-type">
            Event Type
          </label>
        </div>
        <div className="input-container">
          <input
            id="event-date"
            className="event-details"
            defaultValue={new Date().toISOString().substring(0, 10)}
            type="date"
            name="date"
          />
          <label className="block text-xs m-1" htmlFor="event-date">
            Date of Event
          </label>
        </div>
        <div className="col-span-2">
          <label className="block text-xs m-1" htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            rows={5}
            id="notes"
            type="textbox"
            name="notes"
            className="border rounded w-full"
          />
        </div>
        <button type="submit" className="cormorant-garamond-regular col-span-2">
          SUBMIT INQUIRY
        </button>
      </div>
    </Form>
  );
}
