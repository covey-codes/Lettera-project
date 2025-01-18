import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, provider, auth } from "./Firebase";

const SignUp = ({ theme }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!validateEmail(formData.email)) {
      setErrorMessage("Invalid email address.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    if (!validatePassword(formData.password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character."
      );
      return;
    }

    // Simulate successful submission
    setSuccessMessage("Sign up successful! Welcome aboard.");
    console.log("Form submitted:", formData);
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      setSuccessMessage(`Welcome, ${user.displayName}!`);
      navigate("/template-input"); // Redirect to the template input page
    } catch (error) {
      console.error("Error during Google Sign-In:", error.message);
      setErrorMessage("Failed to sign in with Google. Try again later.");
    }
  };
  

  const inputClasses = `p-2 rounded-xl border transition-colors duration-300 ${
    theme === "dark"
      ? "bg-gray-700 border-gray-600 text-white"
      : "bg-white border-gray-300 text-black"
  }`;

  return (
    <section
      className={`min-h-screen flex items-center justify-center ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="flex rounded-2xl shadow-lg max-w-3xl p-5 items-center dark:bg-gray-800">
        <div className="md:w-1/2 px-8 flex flex-col gap-4">
          <h2 className="font-bold text-2xl dark:text-white">Sign Up</h2>
          <p className="text-sm mt-4 dark:text-gray-400">
            Create your account to get started.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              className={inputClasses}
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              className={inputClasses}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className={inputClasses}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              className={inputClasses}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errorMessage && (
              <div className="text-red-600 text-sm">{errorMessage}</div>
            )}
            {successMessage && (
              <div className="text-green-600 text-sm">{successMessage}</div>
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

          <button
            className="bg-white text-black border py-2 w-full mt-5 rounded-xl flex justify-center items-center text-sm hover:scale-105 duration-300"
            onClick={handleGoogleSignUp}
          >
            <svg
              className="mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25px"
              height="25px"
            >
              {/* Google SVG code */}
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
            alt="Sign-up Illustration"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
