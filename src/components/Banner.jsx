import React from "react";
import { FiEdit2 } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="h-[15%] relative bg-[#594aff]">
      <div className="absolute top-14 left-24">
        <img
          className="h-24 w-24 border-2 object-cover border-white rounded-full"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile"
        />
      </div>
      <div className="bg-white p-2 absolute cursor-pointer hover:opacity-70 rounded-full top-3 right-3">
        <FiEdit2 className="text-[#7569f8]" />
      </div>
    </div>
  );
};

export default Banner;
