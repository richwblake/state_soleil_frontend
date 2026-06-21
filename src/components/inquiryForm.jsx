import { useEffect, useRef } from "react";
import { Form, useActionData, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import Logo from "../assets/universal/logo-cropped.png";

export async function action({ request }) {
  const formData = await request.formData();
  const formJson = Object.fromEntries(formData);
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formJson),
  };
  try {
    const response = await fetch("https://statesoleil.com/api/", config);
    if (response.ok) {
      return { state: "success" };
    } else {
      return { state: "failure" };
    }
  } catch (error) {
    return { state: "failure" };
  }
}

const inputStyle = {
  borderColor: "var(--color-gold-light)",
};

const labelClass =
  "cormorant-garamond-regular block text-sm tracking-[0.1em] uppercase mb-1";

export default function InquiryForm() {
  const navigation = useNavigation();
  const actionData = useActionData();
  const prevActionData = useRef(null);

  const isSubmitting = navigation.state === "submitting";

  useEffect(() => {
    if (!isSubmitting && actionData && actionData !== prevActionData.current) {
      prevActionData.current = actionData;

      if (actionData.state === "success") {
        Swal.fire({
          title: "Thank you for reaching out!",
          text: "We'll be in touch shortly",
          imageUrl: Logo,
          imageWidth: 150,
          imageHeight: 150,
          showConfirmButton: true,
          buttonsStyling: false,
          customClass: {
            popup: "swal-luxe-popup",
            confirmButton: "swal-luxe-confirm",
          },
        });
      } else {
        Swal.fire({
          title: "We ran into an issue submitting your inquiry!",
          text: "Please try again",
          imageUrl: Logo,
          imageWidth: 150,
          imageHeight: 150,
          showConfirmButton: true,
          buttonsStyling: false,
          customClass: {
            popup: "swal-luxe-popup",
            confirmButton: "swal-luxe-confirm",
          },
        });
      }
    }
  }, [isSubmitting, actionData]);

  return (
    <Form method="post" className="max-w-xl mx-auto px-4">
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {/* Name section */}
        <h3
          className="cormorant-garamond-semibold col-span-2 text-xl tracking-[0.1em] mb-2"
          style={{ color: "var(--color-charcoal)" }}
        >
          YOUR NAME
        </h3>
        <div>
          <label className={labelClass} htmlFor="first-name">
            First Name
          </label>
          <input
            required
            id="first-name"
            autoComplete="off"
            type="text"
            name="firstName"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="last-name">
            Last Name
          </label>
          <input
            required
            id="last-name"
            autoComplete="off"
            type="text"
            name="lastName"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>

        {/* Contact section */}
        <h3
          className="cormorant-garamond-semibold col-span-2 text-xl tracking-[0.1em] mt-4 mb-2"
          style={{ color: "var(--color-charcoal)" }}
        >
          CONTACT INFORMATION
        </h3>
        <div>
          <label className={labelClass} htmlFor="email">
            E-mail Address
          </label>
          <input
            required
            id="email"
            autoComplete="email"
            type="email"
            name="email"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">
            Phone Number
          </label>
          <input
            required
            id="phone"
            type="text"
            autoComplete="tel"
            name="phone"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>

        {/* Event section */}
        <h3
          className="cormorant-garamond-semibold col-span-2 text-xl tracking-[0.1em] mt-4 mb-2"
          style={{ color: "var(--color-charcoal)" }}
        >
          EVENT DETAILS
        </h3>
        <div>
          <label className={labelClass} htmlFor="event-type">
            Event Type
          </label>
          <select
            id="event-type"
            name="eventType"
            defaultValue="placeholder"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
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
        </div>
        <div>
          <label className={labelClass} htmlFor="event-date">
            Date of Event
          </label>
          <input
            id="event-date"
            type="date"
            name="date"
            defaultValue={new Date().toISOString().substring(0, 10)}
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>

        {/* Notes */}
        <div className="col-span-2 mt-4">
          <label className={labelClass} htmlFor="notes">
            Additional Notes
          </label>
          <textarea
            rows={5}
            id="notes"
            name="notes"
            className="w-full px-3 py-2 border rounded-sm"
            style={inputStyle}
          />
        </div>

        {/* Submit */}
        <div className="col-span-2 mt-6 mb-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="cormorant-garamond-semibold block mx-auto px-10 py-3 text-lg tracking-[0.15em] transition-colors duration-200 cursor-pointer"
            style={{
              backgroundColor: "var(--color-gold)",
              color: "white",
              border: "none",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-gold-dark)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "var(--color-gold)")
            }
          >
            {isSubmitting ? "SUBMITTING..." : "SUBMIT INQUIRY"}
          </button>
        </div>
      </div>
    </Form>
  );
}
