import { features } from "../constants";


const FeatureSection = () => {
  return (
    <div className="">

      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily write 
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> {" "}your own letters </span>
        </h2>
        <div className="flex flex-wrap mt-10 lg:mt-20">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:1/2 lg:w-1/3"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;