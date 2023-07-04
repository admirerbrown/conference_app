const About = () => {
  return (
    <div className="">
      <div className="bg-bg_image bg-no-repeat lg:w-1/2 bg-cover">
        <div className="bg-gray-950 bg-opacity-95 md:h-{500} lg:h-96 position-right">
          <h2 className="text-white text-2xl text-right px-10 pt-10 pb-3">
            <span className="font-bold">ABOUT </span>CONFERENCE
          </h2>
          <p className="text-gray-300 text-sm text-right pl-24 pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic
            similique temporibus consectetur ad odio aliquid nam pariatur,
            beatae, ipsa fugit tempora nemo quod incidunt ea tempore nisi ipsum
            numquam!
          </p>
          <br />
          <p className="text-gray-300 text-sm mb-8 text-right pl-24 pr-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, hic
            similique temporibus consectetur ad odio aliquid nam pariatur,
            beatae, ipsa fugit tempora nemo quod incidunt ea tempore nisi ipsum
            numquam!
          </p>
          <button className="float-right btn btn-outline text-white border-2 border-zinc-50 rounded-full hover:bg-white hover:text-slate-700 mr-10">DOWNLOAD BROCHURE</button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
