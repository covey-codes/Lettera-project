import React from "react";
import pic2 from "../assets/pexels2.jpg";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold">
          About{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Lettera
          </span>
        </h1>
        <p className="mt-2 text-lg">Crafting meaningful letters made easy</p>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <img
            src={pic2}
            alt="Our Mission"
            className="w-full h-auto max-h-80 object-cover mb-6 rounded-lg shadow-lg"
          />

          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-4">
            At Lettera, our mission is to simplify the art of personal
            communication by helping you craft thoughtful, meaningful letters
            with ease. Whether you're writing to express gratitude, offer
            condolences, or simply stay in touch, Lettera ensures your message
            is conveyed with clarity and care.
          </p>

          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <p className="mb-4">
            Our intuitive platform offers tailored templates for various
            occasions, guiding you through the process of writing letters that
            resonate. With a focus on personalization and user-friendly design,
            Lettera transforms what can be a daunting task into an effortless,
            enjoyable experience. Whether you're reaching out to a loved one or
            drafting professional correspondence, Lettera is here to make your
            words count.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p>
            Experience the joy of connecting through words. Join us at Lettera
            and discover how easy it can be to express your thoughts and
            emotions in a meaningful way.
          </p>
        </section>
      </main>

      <footer className="py-4 text-center">
        <p>© {new Date().getFullYear()} Lettera. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
