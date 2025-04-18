import React from "react";
import PageBreadcrumbs from "../components/PageBreadcrumbs";

const Error_404 = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        <PageBreadcrumbs />
        <div className="flex flex-col items-center justify-center gap-14 py-12">
          <div className="flex flex-col items-center justify-center gap-4 text-center font-inter">
            <h2 className="font-semibold sm:text-[110px] text-[50px]">
              404 Not Found
            </h2>
            <p>Your visited page not found. You may go home page.</p>
          </div>
          <button className="bg-[#DB4444] text-white py-4 px-10 cursor-pointer rounded">
            Back to home page
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error_404;
