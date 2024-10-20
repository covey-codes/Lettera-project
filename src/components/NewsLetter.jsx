import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription logic here (e.g., API call)

    // For demo purposes, we will just set a success message
    setMessage('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading and Description */}
        <h2 className="text-3xl font-semibold mb-4 text-black">Subscribe to Our Newsletter</h2>
        <p className="text-lg text-gray-600 mb-8">
          Get the latest updates, news, and special offers delivered directly to your inbox.
        </p>

        {/* Newsletter Form */}
        <form className="flex flex-col md:flex-row justify-center gap-2 px-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full md:w-2/3 p-2 rounded-md border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm md:text-base"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email Address"
          />
          <button
            type="submit"
            className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 text-sm md:text-base"
            aria-label="Subscribe to Newsletter"
          >
            Subscribe
          </button>
        </form>

        {/* Success/Error Message */}
        {message && <p className="text-sm text-green-600 mt-4">{message}</p>}

        {/* Privacy Notice */}
        <p className="text-sm text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default NewsLetter;
