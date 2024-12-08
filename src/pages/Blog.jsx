import React from "react";
import ManInWhiteShirtInFrontOfPC from "../assets/IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg";
import categories from "./categories";
import allPosts from "./allPosts";
const Blog = () => {
  return (
    <>
      <HeadingComponent />
      <AllPosts />
      <AllCategories />
    </>
  );
};

export default Blog;

const HeadingComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-6 p-6 bg-whiteLight">
      {/* Right Image Section */}
      <div className="w-full md:w-1/3 order-1 md:order-2 flex justify-center">
        <img
          src={ManInWhiteShirtInFrontOfPC}
          alt="Placeholder"
          className="w-3/4 md:w-full shadow-lg mx-5"
        />
      </div>

      {/* Left Text Section */}
      <div className="w-full md:w-2/3 text-center md:text-left order-2 md:order-1 flex flex-col justify-center">
        <h2 className="font-heading text-base text-grayMedium font-bold mb-4 ">
          FEATURED POSTS
        </h2>
        <h2 className="font-heading text-4xl font-bold mb-4 ">
          Step-by-step guide to choosing great font pairs.
        </h2>
        <h4 className="text-sm font-body font-semibold text-grayMedium mb-4">
          By John Doe | May 23, 2022
        </h4>
        <p className="text-grayMedium mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          ullamcorper neque eget mauris eleifend, sed facilisis risus tincidunt.
          Quisque venenatis urna id lorem laoreet, sit amet convallis ligula
          tincidunt. Proin vel lacus ac sapien tempus ultrices.
        </p>
        <button className="px-6 py-3 bg-yellowAccent text-black font-heading hover:bg-grayMedium hover:text-yellowAccent hover:underline w-full md:w-1/3">
          Read More &gt;
        </button>
      </div>
    </div>
  );
};

const AllPosts = () => {
  return (
    <>
      <h2 className="text-4xl font-heading font-bold ml-6 mt-4">All Posts</h2>
      <div className="flex flex-col gap-6 p-4">
        {allPosts.map((element, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-center rounded-lg shadow-md p-6 bg-white hover:bg-yellowAccent"
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
              <img src={element.image} alt={element.title} />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left ml-6">
              <h2 className="text-xl font-semibold mb-2 font-heading text-grayMedium">
                {element.category}
              </h2>
              <h2 className="text-3xl font-semibold mb-2 font-heading">
                {element.title}
              </h2>
              <p className="text-base text-grayMedium font-body">
                {element.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-6 my-6">
        <div className="font-heading font-bold text-xl text-grayMedium hover:underline">
          &lt; Prev
        </div>
        <div className="font-heading font-bold text-xl hover:underline">
          Next &gt;
        </div>
      </div>
    </>
  );
};

const AllCategories = () => {
  return (
    <>
      <h2 className="text-3xl font-heading font-bold ml-6 mt-4">
        All Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative border rounded-lg shadow-md p-6 bg-white flex flex-col items-center text-left hover:bg-yellowAccent"
          >
            {/* Image Container with Background */}
            <div className="absolute top-4 left-4 bg-yellow-100 p-2 rounded-lg">
              <img
                src={category.image}
                alt={category.title}
                className="w-10 h-10"
              />
            </div>
            {/* Title and description */}
            <div className="mt-16">
              <h2 className="text-2xl font-semibold mb-2 font-heading">
                {category.title}
              </h2>
              <p className="text-base text-grayMedium font-body">
                {category.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
