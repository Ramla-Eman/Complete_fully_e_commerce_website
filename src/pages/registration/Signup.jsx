import React, { useState } from "react";
// components
import { Link, useNavigate } from "react-router-dom";
import PageBreadcrumbs from "../../components/PageBreadcrumbs";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDb } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
// image
import Image from "../../assets/registrationImg.jpg";

const Signup = () => {
  const navigate = useNavigate();

  const [userSignup, setUserSignup] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  const userSignupFunction = async (e) => {
    e.preventDefault();
    if (
      userSignup.name === "" ||
      userSignup.email === "" ||
      userSignup.password === ""
    ) {
      toast.error("All Fields are required");
    }

    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userSignup.email,
        userSignup.password
      );

      const user = {
        name: userSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userSignup.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      const userRefrence = collection(fireDb, "user");

      addDoc(userRefrence, user);

      setUserSignup({
        name: "",
        email: "",
        password: "",
      });

      toast.success("Signup Successfully");

      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

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
              <h2 className="font-inter sm:text-4xl text-3xl">
                Create an account
              </h2>
              <p className="font-poppins">Enter your details below</p>
            </div>
            <div className="">
              <form
                className="flex flex-col gap-4"
              >
                {/* name input */}
                <input
                  type="text"
                  placeholder="Name"
                  className="border-b border-[#00000063] py-2 outline-0 "
                  value={userSignup.name}
                  onChange={(e) =>
                    setUserSignup({ ...userSignup, name: e.target.value })
                  }
                />
                {/* email input */}
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="border-b border-[#00000063] py-2 outline-0 "
                  value={userSignup.email}
                  onChange={(e) =>
                    setUserSignup({ ...userSignup, email: e.target.value })
                  }
                />
                {/* password input */}
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b border-[#00000063] py-2 outline-0 "
                  value={userSignup.password}
                  onChange={(e) =>
                    setUserSignup({ ...userSignup, password: e.target.value })
                  }
                />
                {/* submit button */}
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white py-4 px-5 w-full cursor-pointer rounded"
                  onClick={userSignupFunction}
                >
                  Create Account
                </button>
              </form>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p className="text-[#000000b4]">Already have account?</p>
              <Link to="/login" className="underline">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
