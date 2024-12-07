import React from "react";
import manWearingSunglasses from "../assets/IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg";
import Facebook from "../assets/Icons/Negative.svg";
import Instagram from "../assets/Icons/Negative (2).svg";
import LinkedIn from "../assets/Icons/Negative (3).svg";
import Twitter from "../assets/Icons/Negative (4).svg";
import yellowBar from "../assets/IMAGES/shape.svg";
import purpleBar from "../assets/IMAGES/shape-1.svg";
import stained_glass_img from "../assets/IMAGES/stained-glass-high-rise-building-1106476.svg";
import grpOfPeople from "../assets/IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg";
import two_women_img from "../assets/IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";

// Mock data for the article descriptions
const MockData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dolor. Phasellus vulputate ligula non sem vehicula, sit amet tempor nulla eleifend. Sed vestibulum purus a ante hendrerit, nec dignissim nunc sodale";

function ListPage({ heading, title, description, img }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 my-10">
      <img
        src={img}
        alt="placeholder"
        className="w-[350px] sm:w-[250px] mb-6 sm:mb-0"
      />
      <div className="flex flex-col justify-evenly gap-9">
        <h2 className="text-purpleAccent font-semibold text-l font-sans">
          {heading}
        </h2>
        <h1 className="font-bold text-2xl font-sans">{title}</h1>
        <p className="text-grayMedium">{description}</p>
      </div>
    </div>
  );
}

const AuthorPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-whiteLight">
        <div className="w-[82%] mx-auto py-20 flex flex-col sm:flex-row gap-10">
          <img src={manWearingSunglasses} className="sm:w-[350px] w-full" />

          <div className="flex flex-col gap-5 justify-evenly">
            <h1 className="font-bold text-4xl font-sans">
              Hey there, I'm Andrew Jonhson <br /> and welcome to my Blog{" "}
            </h1>
            <p className="text-grayMedium">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development to fill empty
              spaces in a layout that does not yet have content.
            </p>

            <div className="flex gap-3">
              {/* Icons */}
              <img src={Facebook} className="w-6" />
              <img src={Instagram} className="w-6" />
              <img src={LinkedIn} className="w-6" />
              <img src={Twitter} className="w-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Bar Section */}
      <div className="flex items-center justify-center w-full bg-whiteLight">
        <img src={yellowBar} className="h-4" />
        <img src={purpleBar} className="h-4 left-[600px]" />
      </div>

      {/* Post Section */}
      <div className="mt-20 mx-auto w-[72%]">
        <h1 className="font-bold text-3xl">My Posts</h1>

        <ListPage
          heading="BUSINESS"
          title="Font size in UI design: The complete guide to follow"
          description={MockData}
          img={stained_glass_img}
        />
        <br />
        <ListPage
          heading="ECONOMY"
          title="How to build rapport with your web design clients"
          description={MockData}
          img={grpOfPeople}
        />
      </div>
    </>
  );
};

export default AuthorPage;
