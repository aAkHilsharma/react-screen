import React from "react";

const SidebarFooter = () => {
  return (
    <div className="h-full bg-white pb-10">
      <div className="flex font-medium flex-col space-y-2 justify-end items-center h-full">
        <div className="flex space-x-3 text-xs">
          <p>About</p>
          <p>Accessibilty</p>
          <p>Help</p>
        </div>
        <div className="flex space-x-3 text-xs">
          <p>Privacy & term</p>
          <p>Advertise</p>
          <p>more</p>
        </div>

        <div>
          <p className="font-bold text-sm">
            <span className="text-[#7569f8]">spehre.io</span>{" "}
            <span className="text-xs font-normal">&copy; 2023</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SidebarFooter;
