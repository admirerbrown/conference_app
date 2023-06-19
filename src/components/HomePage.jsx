"use client";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div className="bg-background_image bg-no-repeat bg-cover h-screen flex justify-center items-center">
      <StaticCarousel></StaticCarousel>
    </div>
  );
};

const StaticCarousel = () => {
  return (
    <Carousel>
      <div className=" flex h-full bg-sky-800 bg-opacity-50 justify-center flex-col">
        <div className="flex gap-5 mx-4 mb-3">
          <FaFacebookF className="text-white text-2xl"></FaFacebookF>
          <TfiTwitterAlt className="text-white text-2xl"></TfiTwitterAlt>
          <MdEmail className="text-white text-2xl"></MdEmail>
        </div>

        <h3 className=" text-white text-4xl mx-4 mb-5">Hello World</h3>
        <p className=" text-gray-300 text-50 mx-4 mb-5">
          A conference is an organized event where individuals with shared
          interests or professional backgrounds come together to exchange
          knowledge, network, and discuss various topics. Conferences typically
          feature presentations, workshops, panel discussions, and interactive
          sessions led by experts in their respective fields.
        </p>
        <DefaultButtons></DefaultButtons>
      </div>

      <div className=" flex h-full bg-sky-800 bg-opacity-50 justify-center flex-col">
        <div className="flex gap-5 mx-4 mb-3">
          <FaFacebookF className="text-white text-2xl"></FaFacebookF>
          <TfiTwitterAlt className="text-white text-2xl"></TfiTwitterAlt>
          <MdEmail className="text-white text-2xl"></MdEmail>
        </div>

        <h3 className=" text-white text-4xl mx-4 mb-5">Hello World</h3>
        <p className=" text-gray-300 text-50 mx-4 mb-5">
          Conferences can cover a wide range of subjects, including academic research, 
          technology, business, medicine, arts and culture, social issues, and more. 
        </p>
        <DefaultButtons></DefaultButtons>
      </div>
    </Carousel>
  );
};

const DefaultButtons = () => {
  return (
    <>
      <Button className="bg-orange-600 w-44 mx-5 " color="dark">
        Learn more
      </Button>
    </>
  );
};

export default Home;
