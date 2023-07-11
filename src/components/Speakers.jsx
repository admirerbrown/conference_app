import divider from "../assets/images/divider.png";
const Speakers = () => {
  return (
    <div className=" bg-[#e45914] h-96 lg:h-72 flex justify-center flex-col items-center gap-5 text-white">
      <h1 className="font-bold text-2xl">Our Speakers</h1>
      <p className="px-10 text-center text-slate-100 lg:w-3/5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate non
        adipisci accusamus fuga assumenda temporibus in est excepturi sequi sunt
        earum, architecto ullam reprehenderit eligendi quibusdam saepe modi quo
        iure?
      </p>
      <img src={divider} alt="divider" className="w-20 mt-5"/>
    </div>
  );
};

export default Speakers;
