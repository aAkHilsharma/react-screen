import { SiWindows } from "react-icons/si";
import { FcInvite } from "react-icons/fc";
import { DiGoogleAnalytics } from "react-icons/di";
import { BiSolidUser } from "react-icons/bi";
import { BsBrowserChrome } from "react-icons/bs";
import { useMemo } from "react";
import SidebarNavigation from "./SidebarNavigation";
import SidebarFeed from "./SidebarFeed";
import SidebarFooter from "./SidebarFooter";

const Sidebar = ({ children }) => {
  const pathname = "/";
  const routes = useMemo(
    () => [
      {
        icon: SiWindows,
        label: "Home",
        active: pathname === "/",
        href: "/",
      },
      {
        icon: FcInvite,
        label: "Job Invites",
        active: pathname === "/invites",
        href: "/search",
      },
      {
        icon: DiGoogleAnalytics,
        label: "Analytics",
        active: pathname === "/analytics",
        href: "/search",
      },
      {
        icon: BiSolidUser,
        label: "My Profile",
        active: pathname === "/me",
        href: "/search",
      },
      {
        icon: BsBrowserChrome,
        label: "Explore",
        active: pathname === "/explore",
        href: "/search",
      },
    ],
    [pathname]
  );

  return (
    <div className="h-[92%] pt-1 grid grid-cols-5 gap-2">
      <div className="flex flex-col col-span-1 overflow-y-auto bg-white space-y-2">
        <div className="pt-2">
          <div className="h-full w-[90%] mx-auto flex flex-col space-y-2">
            {routes.map((item) => (
              <SidebarNavigation key={item.label} {...item} />
            ))}
          </div>
        </div>
        <div className="border-b-2 w-[90%] mx-auto">&nbsp;</div>
        <div className="pt-2">
          <SidebarFeed />
        </div>
        <SidebarFooter />
      </div>
      {children}
    </div>
  );
};

export default Sidebar;
