import React from "react";
// components
import PageBreadcrumbs from "../../components/PageBreadcrumbs";
// image
import Image from "../../assets/registrationImg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        {/* Page Bread Crumps */}
        <PageBreadcrumbs />
        <div className="flex items-center gap-32">
          <div className="w-[805px] md:block hidden">
            <img src={Image} alt="" />
          </div>
          <div className="lg:w-auto w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-inter  sm:text-4xl text-3xl">
                Log in to Exclusive
              </h2>
              <p className="font-poppins">Enter your details below</p>
            </div>
            <div>
              <form action="" className="flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="border-b border-[#00000063] py-2 outline-0 "
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b border-[#00000063] py-2 outline-0 "
                />
                <button className="bg-[#DB4444] text-white py-4 px-5 w-full cursor-pointer rounded">
                  Log In
                </button>
              </form>
              <p className="text-[#DB4444] text-2xl mt-4 hover:underline">
                Forget Password?
              </p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-[#000000b4]">Don't have an account?</p>
              <Link to="/signup" className="underline">
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
