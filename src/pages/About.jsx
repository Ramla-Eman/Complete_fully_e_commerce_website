import React from "react";
// Image
import Image from "../assets/ourstoryImg.jpeg";
// components
import PageBreadcrumbs from "../components/PageBreadcrumbs";
import AboutBadges from "../components/AboutBadges";
import AboutTeam from "../components/AboutTeam";
import ServicesBagdges from "../components/ServicesBagdges";

const About = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        {/* Page Bread Crumps */}
        <PageBreadcrumbs />
        {/* our Story */}
        <div className="flex md:flex-row flex-col items-center justify-center gap-16 my-[80px]">
          <div className="flex flex-col gap-4">
            <h3 className="font-inter font-semibold text-[54px] mb-3">
              Our Story
            </h3>
            <p className="font-poppins text-wrap">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{" "}
            </p>
            <p className="font-poppins text-wrap">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div>
            <img src={Image} alt="" className="rounded" />
          </div>
        </div>
        {/* badges */}
        <AboutBadges />
        {/* Team */}
        <AboutTeam/>
        {/* Services badge */}
        <ServicesBagdges/>
      </div>
    </section>
  );
};

export default About;
