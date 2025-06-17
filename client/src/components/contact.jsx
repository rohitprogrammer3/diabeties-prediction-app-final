import React, { useState } from "react";
import backgroundImage from "../assets/background.jpg";
import contactBackground from "../assets/contact-bg.jpg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate successful submission
    setStatus("Form submitted successfully!");

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Clear status after a few seconds (optional)
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center sm:flex-row sm:justify-center pb-3 md:pb-0"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="w-[90%] max-w-[1000px] h-auto my-12 mx-auto grid grid-cols-1 md:grid-cols-2 p-8 rounded-2xl shadow-lg bg-gradient-to-r from-gray-200 to-blue-200 overflow-hidden"
        style={{
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex justify-center items-center"></div>
        <div className="flex flex-col justify-center p-5">
          <h2 className="mb-5 text-gray-800 font-sans font-extrabold text-2xl">
            Get in touch!
          </h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white outline-none focus:border-indigo-400"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white outline-none focus:border-indigo-400"
              required
            />
            <textarea
              rows="8"
              id="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg border-2 border-gray-300 text-lg bg-white resize-none outline-none focus:border-indigo-400"
              required
            />
            <button
              type="submit"
              className="mt-5 p-4 text-lg rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition-colors"
            >
              Submit
            </button>
            {status && <p className="text-green-700 font-semibold mt-2">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
