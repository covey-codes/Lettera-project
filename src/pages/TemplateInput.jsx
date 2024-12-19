import { useState } from "react";

const TemplateInput = () => {
  const [formData, setFormData] = useState({
    letterType: "",
    recipient: "",
    message: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Call the AI API with the formData here
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mt-6">Create Your Letter</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 w-full max-w-md mt-4"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Type of Letter</label>
          <select
            name="letterType"
            value={formData.letterType}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none"
          >
            <option value="">Select</option>
            <option value="formal">Formal</option>
            <option value="informal">Informal</option>
            <option value="apology">Apology</option>
            <option value="thank-you">Thank You</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Recipient</label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="Recipient's Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your main message"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Additional Info</label>
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            placeholder="Additional instructions or details"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Generate Letter
        </button>
      </form>
    </div>
  );
};

export default TemplateInput;
