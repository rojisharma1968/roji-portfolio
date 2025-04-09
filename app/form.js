import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

let lastSubmittedTime = 0;
const RATE_LIMIT = 60000; // 1 minute cooldown

export const handleContactForm = async (e, setSending, recaptchaRef) => {
  e.preventDefault();

  const currentTime = Date.now();
  if (currentTime - lastSubmittedTime < RATE_LIMIT) {
    return toast.error("Please wait a moment before submitting again.");
  }

  // Collect form data
  const formData = new FormData(e.target);
  const name = formData.get("name")?.trim();
  const email = formData.get("email")?.trim();
  const subject = formData.get("subject")?.trim();
  const phone = formData.get("phone")?.trim();
  const message = formData.get("message")?.trim();

  if (!name || !email || !subject || !phone || !message) {
    return toast.error("All fields are required.");
  }

  if (!recaptchaRef || !recaptchaRef.current) {
    return toast.error("reCAPTCHA is not loaded. Please try again.");
  }

  console.log(recaptchaRef.current.getValue())

  const recaptchaToken = recaptchaRef.current.getValue();
  if (!recaptchaToken) {
    return toast.error("Please complete the reCAPTCHA verification.");
  }


  const emailData = {
    name,
    email,
    subject,
    phone,
    message,
    "g-recaptcha-response": recaptchaToken,
  };

  lastSubmittedTime = currentTime;
  setSending(true);

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_KEY,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_KEY,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    );

    toast.success("Thank you for your submission!");
    console.log("Email sent successfully!", response.status, response.text);
    e.target.reset();
    recaptchaRef.current.reset();
    lastSubmittedTime = 0;
  } catch (error) {
    toast.error("Failed to send message. Please try again later.");
    console.error("Failed to send email:", error);
  } finally {
    setSending(false);
  }
};
