const About = () => {
  return (
    <div className="">
      <div className="bg-bg_image bg-no-repeat lg:w-1/2 bg-cover flex">
        <div className="bg-slate-800 bg-opacity-95 position-right lg:h-84 2xl:h-84 flex flex-col justify-start">
          <h2 className="text-white text-2xl text-right px-10 pt-16 pb-3">
            <span className="font-bold">ABOUT </span>CONFERENCE
          </h2>
          <p className="text-gray-300 text-center lg:text-right lg:pl-24 pl-10 pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic
            similique temporibus consectetur ad odio aliquid nam pariatur,
            beatae, ipsa fugit tempora nemo quod incidunt ea tempore nisi ipsum
            numquam!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel, hic similique temporibus consectetur ad odio aliquid nam
            pariatur, beatae, ipsa fugit tempora nemo quod incidunt ea tempore
            nisi ipsum numquam!
          </p>
          <br />
          <p className="text-gray-300 mb-8 text-center lg:text-right lg:pl-24 pl-10 pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic
            similique temporibus consectetur ad odio aliquid nam pariatur,
            beatae, ipsa fugit tempora nemo quod incidunt ea tempore nisi ipsum
            numquam!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Vel, hic similique temporibus consectetur ad odio aliquid nam
            pariatur, beatae, ipsa fugit tempora nemo quod incidunt ea tempore
            nisi ipsum numquam!
          </p>
          <div className="flex justify-center lg:justify-end">
            <button className="flex btn btn-outline text-white border-2 border-zinc-50 rounded-full hover:bg-white hover:text-slate-700  lg:ml-36 mt-5 mr-10 mb-5">
              DOWNLOAD BROCHURE
            </button>
          </div>
        </div>
      </div>
      <div className="lg:h-84 2xl:h-84 lg:w-1/2">
        <iframe
          width="500"
          // height="637"
          src="https://www.youtube.com/embed/cKulcWRx5Y8"
          title="World Customs Organization Technology Conference and Exhibition 2022"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
