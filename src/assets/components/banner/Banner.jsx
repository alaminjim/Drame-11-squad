import bannerShadow from "../../image/bg-shadow.png";
import bannerPng from "../../image/banner-main.png";

const Banner = () => {
  return (
    <div className="pt-5">
      <div className="absolute">
        <img className="bg-[#131313]  rounded-2xl" src={bannerShadow} alt="" />
      </div>
      <div className="relative  top-14">
        <img className="pl-[550px]" src={bannerPng} alt="" />
        <h1 className="text-white text-5xl font-bold text-center mr-40 mt-6">
          Its easy to start playing on Dream11
        </h1>
        <p className="text-white text-center mr-36 mt-3 text-lg font-bold">
          Play Fantasy Cricket on Dream11 and win big!
        </p>
      </div>
    </div>
  );
};

export default Banner;
