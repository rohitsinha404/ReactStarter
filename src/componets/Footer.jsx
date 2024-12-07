import React from "react";
import Logo from "../assets/IMAGES/Logo.svg";
import Facebook from "../assets/Icons/Negative.svg";
import Instagram from "../assets/Icons/Negative (2).svg";
import LinkedIn from "../assets/Icons/Negative (3).svg";
import Twitter from "../assets/Icons/Negative (4).svg";

const JoinUs = () => {
  return (
    <section className="bg-whitePrimary text-center py-16">
      <div className="container mx-auto px-8">
        {/* Heading */}
        <h2 className="text-3xl font-extrabold md:text-4xl font-heading text-primary mb-4">
          Join our team to be a part <br /> of our story
        </h2>

        {/* Description */}
        <p className="text-grayMedium text-base md:text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do
          eiusmod tempor incididunt.
        </p>

        {/* Join Now Button */}
        <button className="bg-yellowAccent font-bold text-primary py-2 px-6 rounded-md font-semibold hover:opacity-90">
          Join Now
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary text-whitePrimary">
      <JoinUs />
      <div className="container mx-auto px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <img src={Logo} alt="Business Icon" className="w-auto h-12" />
          </div>

          <div>
            {/* Navigation Links */}
            <div className="flex flex-col md:flex-row space-y-4 md:space-x-6 md:space-y-0">
              <a href="#" className="text-grayLight hover:text-yellowAccent">
                Home
              </a>
              <a href="#" className="text-grayLight hover:text-yellowAccent">
                Blog
              </a>
              <a href="#" className="text-grayLight hover:text-yellowAccent">
                About Us
              </a>
              <a href="#" className="text-grayLight hover:text-yellowAccent">
                Contact Us
              </a>
              <a href="#" className="text-grayLight hover:text-yellowAccent">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center mt-8 py-12 rounded-md bg-[#2d2f3f] flex flex-col md:flex-row justify-evenly items-center">
          <h2 className="text-xl md:text-2xl font-heading mb-4 md:mb-0">
            Subscribe to our newsletter to get <br /> latest updates and news
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-3 items-center mt-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 w-64 md:w-96 rounded-l-md border border-grayMedium focus:outline-none text-primary bg-[#2d2f3f]"
            />
            <button className="bg-yellowAccent font-bold text-primary px-6 py-2 rounded-s hover:opacity-90">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <p className="text-grayLight">Finstreet 118 2561 Fintown</p>
            <p>
              <a
                href="mailto:hello@finsweet.com"
                className="text-grayLight hover:text-yellowAccent"
              >
                Hello@finsweet.com
              </a>{" "}
              | 020 7993 2905
            </p>
          </div>

          {/* Centered Social Media Links */}
          <div className="mt-4 flex justify-center md:justify-end items-center space-x-6">
            <a href="#" className="hover:opacity-80" aria-label="Facebook">
              <img
                src={Facebook}
                alt="Facebook Icon"
                className="h-6 w-6 invert"
              />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Twitter">
              <img
                src={Twitter}
                alt="Twitter Icon"
                className="h-6 w-6 invert"
              />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="Instagram">
              <img
                src={Instagram}
                alt="Instagram Icon"
                className="h-6 w-6 invert "
              />
            </a>
            <a href="#" className="hover:opacity-80" aria-label="LinkedIn">
              <img
                src={LinkedIn}
                alt="LinkedIn Icon"
                className="h-6 w-6 invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
