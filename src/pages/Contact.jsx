import React from "react";
// icons
import { FiPhone } from "react-icons/fi";
import { MdMailOutline } from "react-icons/md";
// import components
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="pb-[60px]">
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        <PageBreadcrumbs />
        <div className="flex lg:flex-row flex-col items-center justify-center gap-10">
          <div className="w-full font-poppins flex flex-col gap-4 rounded shadow-xl p-8">
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <FiPhone className="bg-[#DB4444] text-white p-2 rounded-full w-10 h-10"/>
                <p className="font-semibold text-xl">Call To Us</p>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr />
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center">
                <MdMailOutline className="bg-[#DB4444] text-white p-2 rounded-full w-10 h-10"/>
                <p className="font-semibold text-xl">Write To Us</p>
              </div>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
