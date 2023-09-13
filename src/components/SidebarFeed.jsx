import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const SidebarFeed = () => {
  return (
    <div className="h-full bg-white w-[90%] mx-auto">
      <h3 className="text-[#232452] ml-6 font-semibold text-lg">
        Communities Feed
      </h3>
      <div className="ml-7 mt-3 flex flex-col space-y-3">
        <div className="flex justify-start space-x-2 items-center">
          <div className="">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://i.pinimg.com/236x/e4/0f/f1/e40ff1d5dfa256e89e516dddef4fbe8c.jpg"
              alt="profile"
            />
          </div>
          <div>
            <h4 className="text-[#232452] text-sm font-medium">
              Indonesia UI Designer
            </h4>
            <p className="text-xs text-gray-400">
              <span>734 </span>
              Members
            </p>
          </div>
        </div>
        <div className="flex justify-start space-x-2 items-center">
          <div className="">
            <img
              className="h-10 w-10 object-cover rounded-full"
              src="https://i.pinimg.com/236x/6c/f7/26/6cf726632d4b0b6b85b1f35758b9fa91.jpg"
              alt="profile"
            />
          </div>
          <div>
            <h4 className="truncate text-[#232452] text-sm font-medium">
              Indonesia UX Research
            </h4>
            <p className="text-xs text-gray-400">
              <span>734 </span>
              Members
            </p>
          </div>
        </div>
        <div className="">
          <p className="flex mr-7 cursor-pointer hover:opacity-70 font-medium items-center justify-center text-sm text-[#7569f8]">
            Show 5 more
            <span className="inline-block mt-1 mr-3">
              <IoIosArrowForward size={15} />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarFeed;
