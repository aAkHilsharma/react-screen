import React from "react";
import ProfileDetails from "./ProfileDetails";
import { Tabs } from "antd";
import ProfileAbout from "./ProfileAbout";

const Profile = () => {
  const items = [
    {
      key: "1",
      label: "About",
      children: ProfileAbout,
    },
    {
      key: "2",
      label: "Skills & Certificates",
      children: "",
    },
    {
      key: "3",
      label: "Posts",
      children: "",
    },
    {
      key: "4",
      label: "Spaces",
      children: "",
    },
  ];

  return (
    <div className="h-[85%] flex">
      <ProfileDetails />
      <div className="w-[80%] m-2 shadow-lg rounded bg-white">
        <Tabs defaultActiveKey="1" items={items} onChange={() => {}} />
      </div>
    </div>
  );
};

export default Profile;
