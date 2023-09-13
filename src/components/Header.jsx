import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";

const Header = () => {
  return (
    <div className="bg-white h-[8%] w-full drop-shadow-lg border-b-2">
      <div className="flex justify-between items-center h-full">
        <div className="ml-20">
          <h1 className="text-[#232452] text-lg font-bold">spehre</h1>
        </div>
        <div className="flex space-x-6">
          <div className="flex items-center border-2 p-2 rounded-md">
            <GoSearch className="cursor-pointer" size={20} />
            <div className="border-r-2">&nbsp;</div>
            <input placeholder="Search" className="outline-none ml-3" />
          </div>
          <div className="border-2 p-2 flex relative justify-center items-center rounded-md text-[#7569f8]">
            <IoMdNotificationsOutline
              size={24}
              className="cursor-pointer hover:opacity-70"
            />
            <div className="h-2 w-2 bg-red-500 rounded-full absolute top-[11px] right-[10px]"></div>
          </div>
          <div className="border-2 p-2 flex justify-center items-center rounded-md text-[#7569f8]">
            <CiMail size={24} className="cursor-pointer hover:opacity-70" />
          </div>
          <div className="pr-4">
            <img
              className="h-11 w-11 object-cover border-white rounded-full"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
