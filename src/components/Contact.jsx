import React, { useState } from "react";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <div className="max-w-6xl m-10  text-black bg-slate-800 mx-auto py-14 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center">
        {/* Left column: contact form */}
        <form onSubmit={handleSubmit} className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl text-white font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-input w-full border-2 border-dark-400 rounded-md shadow-sm px-4 py-2 placeholder-dark-500  focus:border-dark-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input w-full border-2 border-dark-400 rounded-md shadow-sm px-4 py-2 placeholder-dark-500  focus:border-dark-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-white font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input w-full border-2 border-dark-400 rounded-md shadow-sm px-4 py-2 placeholder-dark-500  focus:border-dark-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="number"
              className="block text-white font-bold mb-2"
            >
              Number
            </label>
            <input
              type="number"
              id="number"
              name="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="form-input w-full border-2 border-dark-400 rounded-md shadow-sm px-4 py-2 placeholder-dark-500  focus:border-dark-500"
              placeholder="Enter your number"
            />
          </div>
          <button
            type="submit"
            className="bg-teal-500 hover:bg-teal-600  text-white font-bold py-3 px-6 rounded-md"
          >
            Send
          </button>
        </form>

        {/* Right column: Google Map */}
        <iframe
          className="w-full md:w-1/2 h-94"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2530.896415271703!2d45.34739411573641!3d2.045696579471505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1632b792abf3b8e9%3A0x9f6c8ef0b8c550d1!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1623783162690!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </div>
  );
}
  export default Contact;
// Note that in the modified `ContactForm` component above, I replaced the `Right column: contact information` section with an `iframe` element that displays the Google Map. I set the `src` attribute of the `iframe` to the embed URL of the Google Map, which you can obtain from the Google Maps website. I also added some styling to the `iframe` using the `w-full`, `md:w-1/2`, and `h-96` classes to make it responsive and fit nicely next to the contact form on larger screens.