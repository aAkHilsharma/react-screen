import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { GiGraduateCap } from "react-icons/gi";
import { IoIosAdd } from "react-icons/io";

const Experience = () => {
  return (
    <div className="mt-2 p-4">
      <h2 className="text-[#232452] font-semibold text-lg">Experience</h2>
      <div className="flex p-4">
        <div>
          <div className="flex justify-between items-start">
            <div className="flex space-x-2">
              <div className="flex items-center h-12 w-12 text-[#7569f8] justify-center bg-[#e0dcfd] rounded-full p-2">
                <GiGraduateCap size={40} />
              </div>
              <div>
                <div>
                  <h3 className="text-sm font-bold">
                    Crisis Intervention Specialist
                  </h3>
                  <p className="text-xs font-semibold">January 2023-Present</p>
                  <p className="text-xs">Icoderz-Ahemdabad, India</p>
                  <p className="mt-4 text-sm font-base text-gray-500">
                    Work with clients and web studios as freelancer. Work in
                    next areas, eCommerce web projects, creative landing pages,
                    iOs and Android apps, corporate web sites and corporate
                    identity sometimes
                  </p>
                </div>
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

export default Experience;
