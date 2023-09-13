import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram, FaTwitter, FaUsers } from "react-icons/fa";
import { Switch } from "antd";
import { IoIosAdd } from "react-icons/io";
import Chart from "./Chart";

const ProfileDetails = () => {
  return (
    <div className="bg-white w-[300px] px-3">
      <div className="pt-14 text-center">
        <h3 className="font-medium text-sm text-[#352c65]">Akhil Sharma</h3>
        <p className="text-neutral-300 text-xs">React Developer</p>
        <p className="text-xs flex gap-1 text-[#232452] justify-center items-center">
          <FaUsers size={15} />
          <span>21 followers 43 Following</span>
        </p>
      </div>
      <div className="flex flex-col justify-center pt-4">
        <div className="flex justify-between items-center">
          <p className="text-[#352c65] text-xs text-left font-bold">
            Make my profile visible to employers
          </p>
          <span className="">
            <Switch size="small" defaultChecked onChange={() => {}} />
          </span>
        </div>
        <p className="text-xs mt-1 text-gray-400 font-normal text-left">
          Your profile will be visible when employees search for candidates in
          our database
        </p>
      </div>
      <div className="mt-4">
        <div className="flex items-center justify-between">
          <p className="text-[11px] font-bold text-[#232452]">Online Links</p>
          <div className="text-white bg-[#7569f8] p-1 rounded-full">
            <IoIosAdd className="cursor-pointer hover:opacity-70" />
          </div>
        </div>
        <p className="text-xs text-gray-400 mb-3">
          Add your online portfolio links to increase your strength
        </p>
        <div className="text-[#7569f8] space-x-4 bg-[#f8f7fc] rounded-md p-2 flex justify-center items-center">
          <TiSocialLinkedin
            size={20}
            className="cursor-pointer hover:opacity-70"
          />
          <FaTwitter size={20} className="cursor-pointer hover:opacity-70" />
          <FaInstagram size={20} className="cursor-pointer hover:opacity-70" />
        </div>
      </div>
      <div className="flex flex-col w-full mx-auto bg-[#f8f7fc] rounded-lg m-2 justify-center items-center relative border-2">
        <h3 className="text-center text-sm font-semibold mt-3 mx-auto">
          Wheel of Opportunities
        </h3>
        <div className="absolute text-xs top-[50%] left-[50%] translate-x-[-50%] translate-y-[-40%]">
          <p className="text-2xl font-bold text-center">350</p>
          <p className="font-semibold">Sphere Rating</p>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default ProfileDetails;
