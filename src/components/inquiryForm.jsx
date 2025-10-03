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
      <div className="grid grid-cols-2 max-w-80 mx-auto gap-x-5">
        <h3 className="col-span-2 mb-4 text-xl">Your Name</h3>
        <div className="input-container">
          <input
            required
            id="first-name"
            autoComplete="off"
            type="text"
            name="firstName"
            className="border rounded w-full px-1"
          />
          <label className="block text-xs m-1" htmlFor="first-name">
            First Name
          </label>
        </div>
        <div className="justify-self-end">
          <input
            required
            id="last-name"
            autoComplete="off"
            type="text"
            name="lastName"
            className="border rounded w-full px-1"
          />
          <label className="block text-xs m-1" htmlFor="last-name">
            Last Name
          </label>
        </div>
        <h3 className="col-span-2 my-4 text-xl">Contact Information</h3>
        <div id="contact-info-container">
          <input
            id="email"
            autoComplete="email"
            type="email"
            name="email"
            className="border rounded w-full px-1"
            required
          />
          <label className="block text-xs m-1" htmlFor="email">
            E-mail Address
          </label>
        </div>
        <div className="justify-self-end">
          <input
            id="phone"
            type="text"
            autoComplete="tel"
            name="phone"
            className="border rounded w-full px-1"
            required
          />
          <label className="block text-xs m-1" htmlFor="phone">
            Phone Number
          </label>
        </div>
        <h3 className="col-span-2 my-4 text-xl">Event Details</h3>
        <div className="input-container">
          <select
            id="event-type"
            className="border rounded px-1"
            name="eventType"
            defaultValue="placeholder"
          >
            <option value="placeholder" disabled hidden>
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
            className="border rounded px-1"
            defaultValue={new Date().toISOString().substring(0, 10)}
            type="date"
            name="date"
          />
          <label className="block text-xs m-1" htmlFor="event-date">
            Date of Event
          </label>
        </div>
        <div className="col-span-2 my-4">
          <label className="block text-xs m-1" htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            rows={5}
            id="notes"
            type="textbox"
            name="notes"
            className="border rounded w-full px-1"
          />
        </div>
        <button
          type="submit"
          className="cormorant-garamond-regular col-span-2 border rounded w-fit mx-auto py-2 px-4"
        >
          SUBMIT INQUIRY
        </button>
      </div>
    </Form>
  );
}
