import filler from "../assets/letterapic1.png";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Lettera makes letter-writting so 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}much easier.</span>
      </h1>
      <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your Letter writing skills to its peak today with the right tools</p>
      

      <div className="flex mt-10 justify-center">
        <img className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" src={filler} alt="filler-image"/>
        <img className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4" src={filler} alt="filler-image"/>
      </div>
    </div>
  );
  
};

export default HeroSection;

