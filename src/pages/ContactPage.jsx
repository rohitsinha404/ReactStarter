import React from "react";

const ContactPage = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center px-4 md:px-20 py-10 mb-10">
      {/* Header Section */}

      <div className="text-center mb-10 mt-10 ">
        <h1 className="text-xl font-heading text-primary font-bold">
          CONTACT US
        </h1>
        <p className=" mt-2 text-3xl font-bold">Let’s Start a Conversation</p>
        <p className="text-grayMedium mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim.
        </p>
      </div>

      {/* Contact Information Section */}
      <div className="w-full max-w-4xl bg-purpleAccent text-white p-6 shadow-md mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" gap-5 flex flex-col">
            <h2 className="font-body text-gray-500  ">Working hours</h2>
            <p className="font-body  font-bold text-xl">
              Monday To Friday
              <br />
              9:00 AM to 8:00 PM
            </p>
            <p className="font-body text-sm mt-2 text-gray-500">
              Our Support Team is available 24/7
            </p>
          </div>
          <div className="  gap-5 flex flex-col">
            <h2 className="font-body text-gray-500 ">Contact Us</h2>
            <p className="font-body font-bold text-2xl">020 7993 2905</p>
            <p className="font-body text-sm text-gray-500">
              hello@finsweet.com
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-4xl   shadow-md">
        <form className="space-y-6">
          <div>
            <label
              className="block text-sm font-body font-medium text-primary"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              className="w-full mt-1 p-3 border border-grayLight focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            />
          </div>
          <div>
            <label
              className="block text-sm font-body font-medium text-primary"
              htmlFor="email"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full mt-1 p-3 border border-grayLight focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            />
          </div>
          <div>
            <label
              className="block text-sm font-body font-medium text-primary"
              htmlFor="query"
            >
              Query Related
            </label>
            <select
              id="query"
              className="w-full mt-1 p-3 border border-grayLight focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            >
              <option value="">Select</option>
              <option value="support">Support</option>
              <option value="sales">Sales</option>
              <option value="feedback">Feedback</option>
            </select>
          </div>
          <div>
            <label
              className="block text-sm font-body font-medium text-primary"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Message"
              className="w-full mt-1 p-3 border border-grayLight focus:outline-none focus:ring-2 focus:ring-purpleAccent"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-yellowAccent text-primary font-extrabold font-body hover:bg-yellow-400 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
