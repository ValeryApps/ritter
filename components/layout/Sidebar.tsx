import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { SidebarItem } from "./SidebarItem";
import { SidebarLogo } from "./SidebarLogo";
import { SidebarTweetButton } from "./SidebarTweetButton";
import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";
const Sidebar = () => {
  const { data: currentUser } = useCurrentUser();

  const items = [
    {
      label: "Home",
      href: "/",
      icon: BsHouseFill,
    },
    {
      label: "Notifications",
      href: "/notifications",
      icon: BsBellFill,
      isAuth: true,
      alert: currentUser?.hasNotification,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      isAuth: true,
    },
  ];
  return (
    <div className="col-span-1 pr-4 md:pr-6 h-full">
      <div className="flex flex-col items-end">
        <div className="space-y-3 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              label={item.label}
              icon={item.icon}
              href={item.href}
              isAuth={item.isAuth}
              alert={item.alert}
            />
          ))}

          {currentUser && (
            <SidebarItem
              label="Logout"
              icon={BiLogOut}
              href="/"
              onClick={signOut}
            />
          )}
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
