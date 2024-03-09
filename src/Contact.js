import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    
    // emailjs.sendForm('gmail', 'template_5irlloe', form.current, 'mUxoWB6DcmwUjyR-v')
    emailjs.sendForm('service_ol6ji9d', 'template_1jnbyfc', form.current, 'M9B0iI9gatqcM8dE6')
      .then((result) => {
          console.log(result.text);
          alert("Thank you. We will get back to you as soon as possible.")
      }, (error) => {
          console.log(error.text);
          alert("Ahh, something went wrong. Please try again.")
      });
      e.target.reset();
  };

  return (
    <div className=" flex items-center justify-center h-screen mr-4 mt-[-3rem] component_title"
      id="contactUs" >
      <div className="bg-gray-300 rounded shadow-xl p-10 shadow-xl">
        <h1 className="mb-4 text-2xl text-center text-black font-meth">
          Contact Us
        </h1>
        <form ref={form} onSubmit={sendEmail} className="max-w-4xl p-8 mr-[10%] sm:mx-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-4">
              <label
                className="block mb-4 text-sm text-black text-gray-700 font-poppins tracking-widest"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-transparent border border-black border-opacity-40 focus:border-black"
                type="text"
                id="name"
                name="name" 
              />
            </div>
            <div className="flex flex-col mb-4 ">
              <label
                className="block mb-4 text-sm text-black text-gray-700 font-poppins ml-14 tracking-widest"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-transparent border border-black border-opacity-40 ml-14 focus:border-black"
                type="email"
                id="email"
                name="email"
                // placeholder="Your Email"
              />
            </div>
            <div className="flex flex-col mb-10">
              <label
                className="block mb-4 text-sm text-black text-gray-700 font-poppins tracking-widest"
                htmlFor="nationality"
              >
                Message/Issue
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-transparent border border-black border-opacity-40 focus:border-black"
                type="text"
                id="message"
                name="message"
                // placeholder="Your Nationality"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                className="block mb-4 text-sm text-black text-gray-700 font-poppins ml-14 tracking-widest"
                htmlFor="phone"
              >
                Number
              </label>
              <input
                className="w-full px-3 py-2 text-black bg-transparent border border-black border-opacity-40 ml-14 focus:border-black"
                type="text"
                id="phone"
                name="phone"
                // placeholder="Your Phone Number"
              />
            </div>
          </div>
          {/* <div className="mb-4">
            <label
              className="block mb-4 text-sm text-black text-gray-700 font-poppins tracking-widest "
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="border text-black lg py-2 px-3 border-opacity-40  w-[108%] bg-transparent h-16  border-black border-opacity-40 focus:border-black"
              id="message"
              name="message"
            ></textarea>
          </div> */}
          <div className="text-center font-poppins">
            <button
              className="px-8 py-3 mx-auto mt-5 text-lg text-black bg-transparent border border-black font-poppins 3xl ml-14 focus:outline-none focus:shadow-outline-blue active:bg-black-800"
              type="submit"
              value="Send"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;