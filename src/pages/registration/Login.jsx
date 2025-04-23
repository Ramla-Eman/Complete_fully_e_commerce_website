import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDb } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { collection, onSnapshot, query, where } from "firebase/firestore";
// components
import PageBreadcrumbs from "../../components/PageBreadcrumbs";
// image
import Image from "../../assets/registrationImg.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async (e) => {
    e.preventDefault();
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
    }

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      try {
        const q = query(
          collection(fireDb, "user"),
          where("uid", "==", users?.user?.uid)
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let user;
          QuerySnapshot.forEach((doc) => (user = doc.data()));
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          navigate("/");
        });
        return () => data;
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
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
              <h2 className="font-inter  sm:text-4xl text-3xl">
                Log in to Exclusive
              </h2>
              <p className="font-poppins">Enter your details below</p>
            </div>
            <div>
              <form action="" className="flex flex-col gap-4">
                {/* email input */}
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="border-b border-[#00000063] py-2 outline-0 "
                  value={userLogin.email}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  }
                />
                {/* password input */}
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b border-[#00000063] py-2 outline-0 "
                  value={userLogin.password}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, password: e.target.value })
                  }
                />
                <button
                  type="submit"
                  onClick={userLoginFunction}
                  className="bg-[#DB4444] text-white py-4 px-5 w-full cursor-pointer rounded"
                >
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
