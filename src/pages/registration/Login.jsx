import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, fireDb } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import PageBreadcrumbs from "../../components/PageBreadcrumbs";
import Image from "../../assets/registrationImg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const userLoginFunction = async (e) => {
    e.preventDefault();
    if (userLogin.email === "" || userLogin.password === "") {
      toast.error("All Fields are required");
      return;
    }

    try {
      const users = await signInWithEmailAndPassword(
        auth,
        userLogin.email,
        userLogin.password
      );

      const q = query(
        collection(fireDb, "user"),
        where("uid", "==", users?.user?.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let user;
        querySnapshot.forEach((doc) => (user = doc.data()));
        if (user) {
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({
            email: "",
            password: "",
          });
          toast.success("Login Successfully");
          navigate("/");
        } else {
          toast.error("User data not found");
        }
      });
      return () => unsubscribe();
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Login Failed");
    }
  };

  const googleLoginFunction = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      const q = query(
        collection(fireDb, "user"),
        where("uid", "==", user.uid)
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        let userData;
        querySnapshot.forEach((doc) => (userData = doc.data()));
        if (userData) {
          localStorage.setItem("users", JSON.stringify(userData));
          toast.success("Logged in with Google Successfully");
          navigate("/");
        } else {
          toast.error("User data not found. Please sign up first.");
        }
      });
      return () => unsubscribe();
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Google Login Failed");
    }
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto pt-6 px-6 py-5">
        <PageBreadcrumbs />
        <div className="flex items-center gap-32">
          <div className="w-[805px] md:block hidden">
            <img src={Image} alt="Login" />
          </div>
          <div className="lg:w-auto w-full flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <h2 className="font-inter sm:text-4xl text-3xl">Log in to Exclusive</h2>
              <p className="font-poppins">Enter your details below</p>
            </div>
            <div>
              <form className="flex flex-col gap-4" onSubmit={userLoginFunction}>
                <input
                  type="email"
                  placeholder="Email or Phone Number"
                  className="border-b border-[#00000063] py-2 outline-0"
                  value={userLogin.email}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, email: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="border-b border-[#00000063] py-2 outline-0"
                  value={userLogin.password}
                  onChange={(e) =>
                    setUserLogin({ ...userLogin, password: e.target.value })
                  }
                />
                <button
                  type="submit"
                  className="bg-[#DB4444] text-white py-4 px-5 w-full cursor-pointer rounded"
                >
                  Log In
                </button>
              </form>
              <button
                onClick={googleLoginFunction}
                className="mt-4 bg-white border border-gray-300 text-black py-4 px-5 w-full cursor-pointer rounded flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 48 48">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.28-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                  />
                  <path fill="none" d="M0 0h48v48H0z" />
                </svg>
                Log in with Google
              </button>
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