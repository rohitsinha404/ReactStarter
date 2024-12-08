import React from "react";
import AndrewJonsonImage from "../assets/IMAGES/Image.svg";
import startup from "../assets/Icons/Icon (2).svg";
import photoOfWomanWearingEyeGlasses from "../assets/IMAGES/photo-of-woman-wearing-eyeglasses-3184405.svg";
import whatToReadNext from "./whatToReadNext";

const BlogPost = () => {
  return (
    <>
      <div className="parent w-[100vw] flex justify-center mt-16">
        <div className="child w-1/2 ">
          <div className="flex flex-row justify-start hover:underline">
            <div className="flex">
              <img src={AndrewJonsonImage} alt="Author" />
            </div>
            <div className="flex flex-col justify-start z-50">
              <h2 className="text-lg font-semibold font-heading text-purpleAccent">
                Andrew Jonson
              </h2>
              <p className="text-base text-grayMedium font-body">
                Posted on 27th January 2022
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-4xl font-bold my-4 ">
              Step-by-step guide to choosing great font pairs.
            </h2>
          </div>
          <div className="flex flex-row justify-start">
            <div className="flex">
              <img src={startup} alt="" />
            </div>
            <div className="flex flex-col justify-start z-50">
              <h4 className="text-base font-semibold ml-4 my-6">Startup</h4>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={photoOfWomanWearingEyeGlasses}
          alt="woman-wearing-eyeglasses"
          className="mx-auto"
        />
      </div>
      <div className="parent w-[100vw] flex justify-center mt-10">
        <div className="child w-1/2 ">
          <h2 className="text-4xl font-bold font-heading my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, harum
            aliquam.
          </h2>
          <p className="text-base text-grayMedium font-body my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reprehenderit totam ipsum vitae nobis, debitis veniam corporis
            facere numquam aperiam corrupti quibusdam, maiores sequi voluptates
            maxime exercitationem ipsa beatae quod, laborum autem? Nesciunt
            beatae voluptatem dolorum cum rem laboriosam. Vitae, minima. Placeat
            rem, aspernatur debitis ut in corporis recusandae accusamus?
          </p>

          <h2 className="text-4xl font-bold font-heading my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, harum
            aliquam.
          </h2>
          <p className="text-base text-grayMedium font-body my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reprehenderit totam ipsum vitae nobis, debitis veniam corporis
            facere numquam aperiam corrupti quibusdam, maiores sequi voluptates
            maxime exercitationem ipsa beatae quod, laborum autem? Nesciunt
            beatae voluptatem dolorum cum rem laboriosam. Vitae, minima. Placeat
            rem, aspernatur debitis ut in corporis recusandae accusamus?
          </p>
          <p className="text-base text-grayMedium font-body my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reprehenderit totam ipsum vitae nobis, debitis veniam corporis
            facere numquam aperiam corrupti quibusdam, maiores sequi voluptates
            maxime exercitationem ipsa beatae quod, laborum autem? Nesciunt
            beatae voluptatem dolorum cum rem laboriosam. Vitae, minima. Placeat
            rem, aspernatur debitis ut in corporis recusandae accusamus?
          </p>
          <ul className="text-2xl text-grayMedium font-semibold font-heading list-disc ml-6">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <p className="text-base text-grayMedium font-body my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reprehenderit totam ipsum vitae nobis, debitis veniam corporis
            facere numquam aperiam corrupti quibusdam, maiores sequi voluptates
            maxime exercitationem ipsa beatae quod, laborum autem? Nesciunt
            beatae voluptatem dolorum cum rem laboriosam. Vitae, minima. Placeat
            rem, aspernatur debitis ut in corporis recusandae accusamus?
          </p>
          <h2 className="text-4xl font-bold font-heading my-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab, harum
            aliquam.
          </h2>
          <p className="text-base text-grayMedium font-body my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            reprehenderit totam ipsum vitae nobis, debitis veniam corporis
            facere numquam aperiam corrupti quibusdam, maiores sequi voluptates
            maxime exercitationem ipsa beatae quod, laborum autem? Nesciunt
            beatae voluptatem dolorum cum rem laboriosam. Vitae, minima. Placeat
            rem, aspernatur debitis ut in corporis recusandae accusamus?
          </p>
        </div>
      </div>
      <WhatToReadNext />
    </>
  );
};

export default BlogPost;

const WhatToReadNext = () => {
  return (
    <div className="mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 border-b-grayMedium">
      {whatToReadNext.map((post, index) => (
        <div
          key={index}
          className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-yellowAccent hover:-translate-y-6 hover:delay-150"
        >
          {/* Image Section */}
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover"
          />

          {/* Author and Date Section */}
          <div>
            <p className="text-sm text-gray-600 font-body mt-3 my-1">
              {post.author} | {post.when}
            </p>
          </div>

          {/* Title Section */}
          <div className="my-1">
            <h3 className="text-xl font-semibold text-gray-800 font-heading">
              {post.title}
            </h3>
          </div>

          {/* Description Section */}
          <div className="my-1">
            <p className="text-base text-gray-600 font-body">
              {post.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
