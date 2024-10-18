import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
    } else {
      setErrorMessage("");
      // You can handle form submission here, e.g., make API request.
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-grey-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
        <div className="md:w-1/2 px-8 flex flex-col gap-1">
          <h2 className="font-bold text-2xl">Sign Up</h2>
          <p className="text-sm mt-4">Create your account to get started.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className="p-2 mt-8 rounded-xl border"
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              className="p-2 rounded-xl border"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errorMessage && (
              <span className="text-red-600 text-sm">{errorMessage}</span>
            )}
            <button
              className="bg-red-600 rounded-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
            >
              Sign Up
            </button>
          </form>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="outline-gray-400" />
            <p className="text-center text-sm">OR</p>
            <hr className="outline-gray-400" />
          </div>

          <button className="bg-white border py-2 w-full mt-5 rounded-xl flex justify-center items-center text-sm hover:scale-105 duration-300">
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
              height="25px"
            >
              <defs>
                <clipPath id="a">
                  <path
                    d="M44.5 20H24v8.5h11.8c-1.3 4-4.7 7-8.8 7-5.2 0-9.5-4.3-9.5-9.5S21.8 16.5 27 16.5c2.4 0 4.7.9 6.4 2.4l6-6C36 9.5 31.3 7 26 7 15.5 7 7 15.5 7 26s8.5 19 19 19 19-8.5 19-19c0-1.3-.1-2.7-.5-4z"
                  />
                </clipPath>
              </defs>
              <g className="colors" fill="none">
                <path d="M0 37V11l17 13z" clipPath="url(#a)" fill="#FBBC05" />
                <path
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                  clipPath="url(#a)"
                  fill="#EA4335"
                />
                <path
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                  clipPath="url(#a)"
                  fill="#34A853"
                />
                <path
                  d="M48 48L17 24l-4-3 35-10z"
                  clipPath="url(#a)"
                  fill="#4285F4"
                />
              </g>
            </svg>
            Sign up with Google
          </button>

          <div>
            <p className="text-center text-gray-500 mt-5">
              Already have an account?{" "}
              <Link to="/login" className="text-red-600">
                Login here
              </Link>
            </p>
          </div>
        </div>

        <div className="w-1/2 md:block hidden">
          <img
            src="https://via.placeholder.com/300"
            alt="random illustration"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;