

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Lettera makes letter-writting so 
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">{" "}much easier.</span>
      </h1>
      <p className="m-5 text-lg text-center text-neutral-500 max-w-4xl">Empower your creativity and bring your Letter writing skills to its peak today with the right tools</p>
      <div className="flex justify-center my-5">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">
          Create an account
        </a>
        <a href="#"className="py-3 px-4 mx-3 rounded-md border">
          Use In Incognito
        </a>
      </div>
    </div>
  );
  
};

export default HeroSection;

