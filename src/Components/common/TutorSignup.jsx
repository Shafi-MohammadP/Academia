import React from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const TutorSignup = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src="https://static.vecteezy.com/system/resources/previews/000/460/211/original/vector-e-learning-concept-flat.jpg"
            alt="image"
          />
        </div>
        <div className="bg-gray-400 flex flex-col justify-center">
          <form className="max-w-[400px] w-full mx-auto bg-blue-gray-900 p-8 px-8 rounded-lg">
            <h2 className="text text-4x text-white font-bold text-center">
              SIGN UP
            </h2>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Username</label>
              <input
                className="rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                name="username"
                placeholder="username"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Email</label>
              <input
                className="rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your Email"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Password</label>
              <input
                className="rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label htmlFor="">Confirm Password</label>
              <input
                className="rounded-lg bg-gray-400 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                name="password2"
                placeholder="Confirm Pasword"
              />
            </div>
            <div>
              <Link to={"/student/signup/"}>
                <p className="text-orange-800">Sign Up As a Student</p>{" "}
              </Link>
            </div>
            <button
              type="submit"
              className="w-full my-5 py-2 bg-orange-500 shadow-orange-500/50 hover:shadow-orange-500/30 text-white font-semibold rounded-lg"
            >
              Sign In
            </button>
            <div>
              <p className="text-white">
                Already Have Account?
                <Link to={"/Login"}>
                  {" "}
                  <span className="font-semibold text-orange-700">SIGN IN</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TutorSignup;
