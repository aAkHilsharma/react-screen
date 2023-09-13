import { twMerge } from "tailwind-merge";

const SidebarNavigation = ({ icon: Icon, label, active }) => {
  return (
    <div
      className={twMerge(
        `flex h-auto w-full hover:opacity-90 items-center gap-x-4 font-medium cursor-pointer transition px-2 py-3 rounded-md`,
        active && "bg-[#7569f8]/10",
        active ? "opacity-90" : "opacity-40"
      )}
    >
      <Icon size={25} className="text-[#7569f8]" />
      <p className="truncate w-full text-[#232452]">{label}</p>
    </div>
  );
};

export default SidebarNavigation;
