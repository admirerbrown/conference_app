import divider from "../assets/images/divider.png";
import React, { useState } from "react";


const Speakers = () => {
 
const images = [
  {
    src: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    src: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    src: 'https://picsum.photos/id/1019/1000/600/',
  },
  {
    src: 'https://picsum.photos/id/1018/1000/600/',
  },
  {
    src: 'https://picsum.photos/id/1015/1000/600/',
  },
  {
    src: 'https://picsum.photos/id/1019/1000/600/',
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
        <div className="carousel w-1/2">
          <Carousel images={images} />
        </div>
        <div className="speaker_description"></div>
      </div>
    </>
  );
};


const Carousel = ({ images }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const changeSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative">
      <div className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${
              index === activeSlide ? 'block' : 'hidden'
            } w-full h-full`}
          >
            <img
              src={image.src}
              alt={`${index + 1}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="thumbnails absolute bottom-0 left-0 flex justify-center w-full mb-2 p-3 bg-neutral-500 opacity-70">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer  border-4 mx-1 border-transparent relative hover:border-[#e45914]"
            onClick={() => changeSlide(index)}
          >
            <img
              src={image.src}
              alt={`${index + 1}`}
              className="w-36 h-24 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
