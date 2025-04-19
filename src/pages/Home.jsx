import React from "react";
// components
import Hero from "../components/Hero";
import HomeTodays from "../components/HomeTodays";
import Categories from "../components/Categories";
import Thismonth from "../components/Thismonth";
import HomeBanner from "../components/HomeBanner";
import OurProducts from "../components/OurProducts";
import HomeFeautered from "../components/HomeFeautered";
import ServicesBagdges from "../components/ServicesBagdges";

const Home = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-6 pb-5">
        {/* Hero */}
        <Hero/>
        {/* Today's */}
        <HomeTodays/>
        {/* categories */}
        <Categories/>
        {/* This Month */}
        <Thismonth/>
        {/* Home banner */}
        <HomeBanner/>
        {/* Our products */}
        <OurProducts/>
        {/* Home Feautered */}
        <HomeFeautered/>
        {/* Services Badge */}
        <ServicesBagdges/>
      </div>
    </section>
  );
};

export default Home;
