import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full flex flex-col gap-4 rounded shadow-xl p-8">
      <div className="flex w-full md:flex-row flex-col gap-4">
        <input type="text" placeholder="Your Name" className="bg-[#F5F5F5] rounded p-2"/>
        <input type="email" placeholder="Your Email" className="bg-[#F5F5F5] rounded p-2"/>
        <input type="number" placeholder="Your Phone" className="bg-[#F5F5F5] rounded p-2"/>
      </div>
      <textarea placeholder="Your Message" className="w-full bg-[#F5F5F5] rounded p-2 h-[207px]"></textarea>
      <button className="bg-[#DB4444] text-white py-4 px-10 cursor-pointer rounded self-end">Send Message</button>
    </div>
  );
};

export default ContactForm;
