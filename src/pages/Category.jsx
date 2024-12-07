import React from "react";
import two_women_img from "../assets/IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg";
import startupImg from "../assets/Icons/Icon (2).svg";
import BusinessImg from "../assets/Icons/Icon-1.svg";
import EconomyImg from "../assets/Icons/icon.svg";
import TechnologyImg from "../assets/Icons/business-and-trade 1.svg";

// Mock data for the article descriptions
const MockData =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac felis dolor. Phasellus vulputate ligula non sem vehicula, sit amet tempor nulla eleifend. Sed vestibulum purus a ante hendrerit, nec dignissim nunc sodale";

// ListPage component to display individual articles
function ListPage({ title, description }) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-6 my-10">
      <img
        src={two_women_img}
        alt="placeholder"
        className="w-[350px] sm:w-[250px] mb-6 sm:mb-0"
      />
      <div className="flex flex-col justify-evenly gap-9">
        <h2 className="text-purpleAccent font-semibold text-l font-sans">
          BUSINESS
        </h2>
        <h1 className="font-bold text-2xl font-sans">{title}</h1>
        <p className="text-grayMedium">{description}</p>
      </div>
    </div>
  );
}

// CategoryButton component for displaying category buttons
function CategoryButton({ logo, text }) {
  return (
    <div className="duration-200 w-full flex items-center gap-4 px-8 py-4 hover:bg-yellowAccent rounded-l border border-gray-300 my-2">
      <div className="bg-yellow-100 rounded-xl h-12 w-12">
        <img src={logo} alt={`${text} logo`} className="w-8 mt-2 ml-2" />
      </div>
      <div className="text-xl font-bold">{text}</div>
    </div>
  );
}

// TagsButton component for displaying tag buttons
function TagsButton({ text }) {
  return (
    <div className="px-7 duration-100 border rounded-3xl py-2 hover:bg-yellow-100">
      {text}
    </div>
  );
}

// Main Category component
const Category = () => {
  return (
    <div className="m-auto">
      {/* Hero Section - Introduction */}
      <div className="flex flex-col gap-5 items-center text-center bg-whiteLight py-14">
        <h1 className="font-bold text-3xl">Business</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </p>
        <span className="font-semibold">BLOG > BUSINESS</span>
      </div>

      {/* Main Content - Left side (articles) and Right side (categories & tags) */}
      <div className="flex flex-col md:flex-row w-[92%] mx-auto">
        {/* Left Side - List of Articles */}
        <div className="md:pr-20 w-full md:w-2/3">
          <ListPage
            title="Top 6 free website mockup tools 2022"
            description={MockData}
          />
          <ListPage
            title="Step-by-step guide to choosing great font pairs"
            description={MockData}
          />
          <ListPage
            title="Ten free Google fonts that you should use"
            description={MockData}
          />
          <ListPage
            title="What did I learn from doing 50+ design sprints"
            description={MockData}
          />
        </div>

        {/* Right Side - Categories and Tags */}
        <div className="flex flex-col md:w-[25%] wmy-10 gap-4 w-full">
          {/* Categories Section */}
          <div>
            <h1 className="font-bold text-2xl pb-10">Categories</h1>
            <CategoryButton logo={startupImg} text="Startup" />
            <CategoryButton logo={BusinessImg} text="Business" />
            <CategoryButton logo={EconomyImg} text="Economy" />
            <CategoryButton logo={TechnologyImg} text="Technology" />
          </div>

          {/* Tags Section */}
          <div>
            <h1 className="font-bold text-2xl pb-10">All Tags</h1>
            <div className="flex flex-wrap gap-2">
              <TagsButton text="Business" />
              <TagsButton text="Experience" />
              <TagsButton text="Screen" />
              <TagsButton text="Technology" />
              <TagsButton text="Marketing" />
              <TagsButton text="Life" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
