"use client";
import React, { useRef, useState } from "react";
import PageHeading from "../Components/PageHeading";
import ReCAPTCHA from "react-google-recaptcha";
import { Headset, LocateFixed, Mail, SendHorizontal } from "lucide-react";
import LoadingSpinner from "../Components/LoadingSpinner";
import Link from "next/link";
import { handleContactForm } from "../form";
import { ToastContainer } from "react-toastify";

const page = () => {
  const [isSending, setSending] = useState(false);
  const recaptchaRef = useRef(null);
  const fields = [
    {
      type: "text",
      name: "name",
      length: 3,
      placeholder: "Your Name",
      pattern: "^[a-zA-Z\\s]{3,}$",
    },
    {
      type: "email",
      name: "email",
      length: 3,
      placeholder: "Your Email",
      pattern: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$",
    },
    {
      type: "tel",
      name: "phone",
      length: 3,
      placeholder: "Phone No",
      pattern: "^[0-9]{10}$",
    },
    {
      type: "text",
      name: "subject",
      length: 10,
      placeholder: "Subject",
      pattern: "^.{10,}$",
    },
  ];

  const groupedFields = [];
  for (let i = 0; i < fields.length; i += 2) {
    groupedFields.push(fields.slice(i, i + 2));
  }

  return (
    <main className="w-full bg-[var(--bgcolor)] pt-20 md:pt-15">
      <ToastContainer theme="dark" />
      <PageHeading
        text="Got an Idea? Let’s Build It"
        color="text-[var(--color-purple)]"
      />
      <div className="bg-[var(--coloroff-white)] flex flex-col lg:flex-row justify-center gap-10 w-full mt-15 rounded-t-2xl md:rounded-t-4xl px-5 py-10 md:pt-20 md:pb-30">
        <div className="info">
          {[
            {
              text: "Email:",
              icon: Mail,
              para: "roji.sharma1968@gmail.com",
              link:'mailto:roji.sharma1968@gmail.com'
            },
            {
              text: "Location:",
              icon: LocateFixed,
              para: "Chandigarh, India",
              link:'https://maps.app.goo.gl/rywBSw4kQH4htCzt6'
            },
            {
              text: "Contact No:",
              icon: Headset,
              para: "+91-9888462990",
              link:'tel:+919888462990'
            },
          ].map((ct) => (
            <Link target="_blank" href={ct.link} key={ct.text} className="flex leading-[1.1] hover:text-[var(--color-purple)] duration-200 items-center gap-2 text-sm lg:text-lg border border-dashed border-[var(--color-purple)] px-4 py-4">
              <span className="flex items-center gap-1">
                {<ct.icon size={20} />}
                {ct.text}
              </span>
              {ct.para}
            </Link>
          ))}
        </div>
        <form
          className="w-full md:w-[90vw] lg:w-[60vw] flex flex-col gap-3"
          onSubmit={(e) => handleContactForm(e, setSending, recaptchaRef)}
        >
          {groupedFields.map((pair, i) => (
            <div key={`pair${i}`} className="grid md:grid-cols-2 gap-4 w-full">
              {pair.map((field, ind) => (
                <input
                  key={`field${i}-${ind}`}
                  type={field.type}
                  minLength={field.length}
                  placeholder={field.placeholder}
                  name={field.name}
                  pattern={field.pattern}
                  className="w-full h-13 outline-none rounded-lg py-1 px-2 bg-[var(--coloroff-white)] border border-dashed border-[var(--color-purple)] text-black"
                />
              ))}
            </div>
          ))}

          <textarea
            minLength={20}
            name="message"
            placeholder="Your Message"
            className="w-full min-h-30 max-h-30 outline-none rounded-lg py-2 px-2 bg-[var(--coloroff-white)] border border-dashed border-[var(--color-purple)]"
          ></textarea>

          <div className="flex items-start flex-wrap w-full justify-center md:justify-between gap-x-10 gap-y-3">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              theme="light"
              size="normal"
            />
            <button
              disabled={isSending}
              className="flex justify-center gap-3 group bg-[var(--color-purple)] tracking-wider w-full md:w-60 text-white disabled:bg-[#BBA8FF] cursor-pointer px-7 py-3 text-base font-[Boldonse] rounded-lg mt-3"
            >
              {isSending ? (
                <LoadingSpinner />
              ) : (
                <>
                  Send It Off{" "}
                  <SendHorizontal
                    className="group-active:-rotate-45 group-hover:-rotate-45 duration-150"
                    size={28}
                  />{" "}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
