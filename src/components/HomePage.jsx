"use client";
import { FaFacebookF } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { MdEmail } from "react-icons/md";
import { Carousel } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <div className="">
      <div className="bg-background_image bg-no-repeat bg-cover h-screen flex justify-end items-center">
        <StaticCarousel className=""></StaticCarousel>
        <Form className=""></Form>
      </div>
      

      
    </div>
  );
};

const StaticCarousel = () => {
  return (
    <Carousel className="">
      <div className=" flex h-full bg-sky-800 bg-opacity-50 justify-center align-items-center flex-col md:p-24">
        <div className="flex gap-5 mx-4 mb-3">
          <FaFacebookF className="text-white text-2xl"></FaFacebookF>
          <TfiTwitterAlt className="text-white text-2xl"></TfiTwitterAlt>
          <MdEmail className="text-white text-2xl"></MdEmail>
        </div>

        <h3 className=" text-white text-4xl mx-4 mb-5">Hello World</h3>
        <p className=" text-gray-300 text-50 mx-4 mb-5 flex justify-center align-items-center md:w-2/5">
          A conference is an organized event where individuals with shared
          interests or professional backgrounds come together to exchange
          knowledge, network, and discuss various topics. Conferences typically
          feature presentations, workshops, panel discussions, and interactive
          sessions led by experts in their respective fields.
        </p>
        <DefaultButtons text="Learn More"></DefaultButtons>
      </div>

      <div className=" flex h-full bg-sky-800 bg-opacity-50 justify-center flex-col md:p-24">
        <div className="flex gap-5 mx-4 mb-3">
          <FaFacebookF className="text-white text-2xl"></FaFacebookF>
          <TfiTwitterAlt className="text-white text-2xl"></TfiTwitterAlt>
          <MdEmail className="text-white text-2xl"></MdEmail>
        </div>

        <h3 className=" text-white text-4xl mx-4 mb-5">Hello World</h3>
        <p className=" text-gray-300 text-50 mx-4 mb-5 md:w-2/5">
          Conferences can cover a wide range of subjects, including academic
          research, technology, business, medicine, arts and culture, social
          issues, and more.
        </p>
        <DefaultButtons text="Learn More"></DefaultButtons>
      </div>
    </Carousel>
  );
};

const DefaultButtons = ({ text }) => {
  return (
    <>
      <Button className="bg-orange-600 w-44 mx-5 " color="dark">
        {text}
      </Button>
    </>
  );
};

const Form = () => {
  return (
    <div className="bg-gray-900 absolute z-50 h-3/5 p-8 rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 m-24 invisible md:visible">
      <div className="flex flex-col align-items-center justify-center">
        <h1 className="text-white font-bold mb-2">EVENT REGISTER</h1>
        <hr className="border-gray-300" />
        <br />
        <form action="" className="flex flex-col">
          <input
            type="text"
            maxLength={20}
            placeholder="Email address"
            className="bg-transparent border-2 border-gray-300 rounded-lg p-2 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            maxLength={20}
            placeholder="Phone Number"
            className="bg-transparent border-2 border-gray-300 rounded-lg p-2 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            maxLength={20}
            placeholder="Quantity"
            className="bg-transparent border-2 border-gray-300 rounded-lg p-2 mb-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="text"
            maxLength={20}
            placeholder="I am attending to"
            className="bg-transparent mb-5 border-2 border-gray-300 rounded-lg p-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            required
          />
        </form>
      </div>
      
      <DefaultButtons text="REGISTER ME" className="mt-8" />
    </div>
  );
};

export default Home;
