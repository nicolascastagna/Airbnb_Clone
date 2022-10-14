import Image from "next/image";
import React from "react";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image src="../images/banner.webp" layout="fill" objectFit="cover" />
      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">
          Vous ne savez pas où aller ? Parfait.
        </p>
        <button
          className="text-purple-500 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl
        active:scale-90 transition duration-150"
        >
          Je suis flexible
        </button>
      </div>
    </div>
  );
}

export default Banner;