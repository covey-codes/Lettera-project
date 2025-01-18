import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Help from "./pages/Help";
import SignUp from "./components/SignUp";
import NewsLetter from "./components/NewsLetter";
import TemplateInput from "./pages/TemplateInput";
import { GoogleOAuthProvider } from "@react-oauth/google";






const App = () => {
  const savedTheme = localStorage.getItem("theme");
const [theme, setTheme] = useState(savedTheme || "dark");


  

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
  setTheme(newTheme);
localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    
  <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
   <Router>
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/help" element={<Help />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <NewsLetter />
      <Footer />
    </Router>
   </div>

 
      
     
      
  
  );
};

export default App;
