import React from 'react';

const Help = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <header className="py-6 text-center">
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="mt-2 text-lg">We're here to assist you!</p>
      </header>

      <main className="flex-grow container mx-auto p-4 md:p-8">
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="font-semibold">1. How do I create an account?</h3>
              <p>
                To create an account, click on the "Sign Up" button on the homepage and fill in the required details.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">2. How can I reset my password?</h3>
              <p>
                If you've forgotten your password, click on the "Forgot Password?" link on the login page to receive reset instructions.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">3. How do I contact customer support?</h3>
              <p>
                You can reach our customer support team by filling out the contact form on the "Contact Us" page.
              </p>
            </li>
            <li>
              <h3 className="font-semibold">4. What types of letters can I create?</h3>
              <p>
                You can create various types of letters, including thank-you notes, invitations, and professional correspondence.
              </p>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 mt-6">Additional Resources</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                User Guide
              </a> - Detailed instructions on how to use Lettera effectively.
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Blog
              </a> - Tips and insights on effective communication and letter writing.
            </li>
            <li>
              <a href="#" className="text-blue-500 hover:underline">
                Community Forum
              </a> - Join discussions and ask questions from other users.
            </li>
          </ul>
        </section>
      </main>

      <footer className="py-4 text-center">
        <p>© {new Date().getFullYear()} Lettera. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;
