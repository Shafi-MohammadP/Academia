import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { loginUrl } from "../../Constants/Constants";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../redux/User";
import toast, { Toaster } from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

const commonLogin = () => {
  const navigate = useNavigate();
  const cl = console.log.bind(console);
  const [showSignUpOptions, setShowSignUpOptions] = useState(false);
  const dispatch = useDispatch();
  const handleSignupoption = () => {
    setShowSignUpOptions(!showSignUpOptions);
  };
  const handleOptionClick = (role) => {
    if (role === "student") {
      console.log(role);
      cl(role, "secondddddddddddddddddddddddddddd");
      navigate("/student/signup/");
    } else {
      console.log(role, "roooooooooooooooooo");
      navigate("/tutor/signup/");
    }
  };
  const Loginuser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${loginUrl}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: e.target.email.value,
          password: e.target.password.value,
        }),
      });
      if (response.status === 200) {
        const data = await response.json();
        console.log(data, "datttttttttttttttttttttttttttttttttttttaa");
        const token = jwtDecode(data.access);
        console.log(token, "tokeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeen");
        localStorage.setItem("authToken", JSON.stringify(data));
        const setuser = {
          user_id: token.user_id,
          name: token.username,
          email: token.email,
          is_admin: token.is_admin,
          role: token.role,
        };
        dispatch(setUserDetails(setuser));

        if (token.is_admin && token.is_active) {
          navigate("/admin/");
          toast.success("Login Succesfull", {
            duration: 1000,
          });
        } else if ((token.role === "student") & token.is_active) {
          navigate("/");
          toast.success("Logined succesfully");
        } else {
          navigate("/tutor");
          toast.success("Logined succesfully");
        }
      } else if (response.status === 401) {
        toast.error("Credential mismatch");
        navigate("/Login");
      } else {
        toast.error("Network Error");
      }
    } catch (error) {
      toast.error("Error During Login", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="https://static.vecteezy.com/system/resources/previews/000/460/211/original/vector-e-learning-concept-flat.jpg"
            alt=""
          />
        </div>
        <div className="bg-gray-400 flex flex-col justify-center">
          <form
            className="max-w-[400px] w-full mx-auto bg-blue-gray-900 p-8 px-8 rounded-lg"
            onSubmit={(e) => Loginuser(e)}
          >
            <h2 className="text-4x text-white font-bold text-center">
              {" "}
              {showSignUpOptions ? "CHOOSE" : "LOG IN"}
            </h2>

            {showSignUpOptions ? (
              <div className="flex flex-col">
                <Button
                  color="blue"
                  onClick={() => handleOptionClick("student")}
                  className="mb-4"
                >
                  Sign Up as Student
                </Button>

                <Button
                  color="green"
                  onClick={() => handleOptionClick("tutor")}
                >
                  Sign Up as Tutor
                </Button>
              </div>
            ) : (
              <>
                <div className="flex flex-col text-white py-2">
                  <label htmlFor="">Email</label>
                  <input
                    className="rounded-lg bg-black mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="flex flex-col text-white py-2">
                  <label htmlFor="">Password</label>
                  <input
                    className="rounded-lg bg-black mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <p>{/* <input type="checkbox" /> Remeber Me */}</p>
                </div>

                <button
                  type="submit"
                  className="w-full my-5 py-2 bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/30 text-white font-semibold rounded-lg"
                >
                  Log In
                </button>

                <div>
                  <p className="text-white">
                    No Account?
                    <Link>
                      <span
                        className="font-semibold text-orange-700"
                        onClick={handleSignupoption}
                      >
                        CREATE ONE
                      </span>
                    </Link>
                  </p>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default commonLogin;
