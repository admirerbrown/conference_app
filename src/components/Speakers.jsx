import divider from "../assets/images/divider.png";
import React, { useState } from "react";

const Speakers = () => {
  const speakers = [
    {
      src: "https://picsum.photos/id/1018/1000/600/",
      name: "Mercy Lavie",
      title: "Product Manager",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      src: "https://picsum.photos/id/1015/1000/600/",
      name: "Samuel Donovan",
      title: "Product Manager",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      src: "https://picsum.photos/id/1019/1000/600/",
      name: "Mercy Lavie",
      title: "Snr. Recruiting Officer",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      src: "https://picsum.photos/id/1018/1000/600/",
      name: "ELANA DORAN",
      title: "Co.Founder",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      src: "https://picsum.photos/id/1015/1000/600/",
      name: "JESSICA PALT",
      title: "Founder",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
    {
      src: "https://picsum.photos/id/1019/1000/600/",
      name: "Mavis Beacon",
      title: "Designer",
      summary: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore animi 
      sequi velit nihil officiis aspernatur, necessitatibus rerum illo aliquid aliquam?
       Ullam ipsam veniam ratione asperiores ipsum excepturi vitae sit necessitatibus.`,
      roles: [
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
        "Lorem ipsum dolor sit amet consectetur",
      ],
    },
  ];

  return (
    <>
      <div className=" bg-[#e45914] h-96 lg:h-72 flex justify-center flex-col items-center gap-5 text-white">
        <h1 className="font-bold text-2xl">Our Speakers</h1>
        <p className="px-10 text-center text-slate-100 lg:w-3/5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          non adipisci accusamus fuga assumenda temporibus in est excepturi
          sequi sunt earum, architecto ullam reprehenderit eligendi quibusdam
          saepe modi quo iure?
        </p>
        <img src={divider} alt="divider" className="w-20 mt-5" />
      </div>
      <div>
        <div className="">
          <Carousel speakers={speakers} />
        </div>
        <div className="speaker_description"></div>
      </div>
    </>
  );
};

const Carousel = ({ speakers }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="lg:flex">
      <div className="carousel lg:w-1/2 relative">
        <div className="carousel">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`slide ${
                index === activeSlide ? "block" : "hidden"
              } w-full h-full`}
            >
              <img
                src={speaker.src}
                alt={`${index + 1}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>

        <div className="thumbnails absolute bottom-0 left-0 flex justify-center w-full mb-2 p-3 bg-neutral-500 opacity-70">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="cursor-pointer  border-4 mx-1 border-transparent relative hover:border-[#e45914]"
              onClick={() => changeSlide(index)}
            >
              <img
                src={speaker.src}
                alt={`${index + 1}`}
                className="w-36 h-24 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="description lg:w-1/2 bg-[#242732] text-white">
        {speakers.map((speaker, index) => (
          <div
            className={`slide ${
              index === activeSlide ? "block" : "hidden"
            } w-full h-full`}
          >
            <h1 className="text-3xl mb-2">{speaker.name.toUpperCase()}</h1>
            <p>{speaker.title.toUpperCase()}</p>
            <hr />
            <p>{speaker.summary}</p>
            <ul>
              {speaker.roles.map((role, index) => (
                <li>{role}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
