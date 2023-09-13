import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

const Education = () => {
  return (
    <div className="mt-2 p-4">
      <h2 className="text-[#232452] font-semibold text-lg">Education</h2>
      <div className="w-full p-4">
        <div>
          <div className="flex justify-between items-start">
            <div className="flex space-x-2">
              <div className="flex items-center h-12 w-12 text-[#7569f8] justify-center bg-[#e0dcfd] rounded-full p-2">
                <GiGraduateCap size={40} />
              </div>
              <div>
                <h3 className="text-sm font-bold">
                  B.E - Electronics & Telecommunication Engg.
                </h3>
                <p className="text-xs font-semibold">Aug 2015 - June 2019</p>
                <p className="text-xs">Icoderz-Ahemdabad, India</p>
              </div>
            </div>
            <div className="flex text-white space-x-2">
              <div className="bg-[#7569f8] p-1 rounded-full w-7 h-7 flex justify-center items-center">
                <IoIosAdd
                  className="text-white cursor-pointer hover:opacity-70"
                  size={30}
                />
              </div>
              <div className="bg-[#7569f8] p-1 w-7 h-7 rounded-full flex justify-center items-center">
                <FiEdit2 className="text-white cursor-pointer hover:opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
