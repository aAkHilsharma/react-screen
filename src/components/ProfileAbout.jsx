import React from "react";
import Experience from "./Experience";
import Education from "./Education";
import { IoIosAdd } from "react-icons/io";

const ProfileAbout = (
  <div className="flex flex-col h-full">
    <div className="flex items-center justify-center space-x-5 p-5">
      <p className="flex-1 text-sm font-base text-gray-500">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage,
      </p>
      <div className="text-white flex justify-center h-full items-start">
        <IoIosAdd
          className="w-7 h-7 cursor-pointer hover:opacity-70 bg-[#7569f8] p-1 rounded-full"
          size={20}
        />
      </div>
    </div>
    <div className="border-b-2 -mt-4 w-[98%] mx-auto">&nbsp;</div>
    <Experience />
    <div className="border-b-2 -mt-4  w-[98%] mx-auto">&nbsp;</div>
    <Education />
  </div>
);

export default ProfileAbout;
