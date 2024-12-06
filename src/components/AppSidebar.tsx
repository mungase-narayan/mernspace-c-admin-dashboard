import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
} from "../components/ui/sidebar";
import { FudoCard } from "./FudoCard";
import {
  House,
  Gift,
  SquareMenu,
  PackageOpen,
  ChartNoAxesCombined,
  Users,
  Utensils,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { NavUser } from "./NavUser";
import { useAuthStore } from "../store";

const getMenuItems = (role: string) => {
  const baseItems = {
    navMain: [
      {
        items: [
          {
            title: "Home",
            icon: House,
            url: "home",
          },
          {
            title: "Menu",
            icon: SquareMenu,
            url: "menu",
          },
          {
            title: "Orders",
            icon: PackageOpen,
            url: "orders",
          },
          {
            title: "Sales",
            icon: ChartNoAxesCombined,
            url: "sales",
          },
          {
            title: "Promos",
            icon: Gift,
            url: "promos",
          },
        ],
      },
    ],
  };

  if (role === "admin") {
    baseItems.navMain[0].items.push(
      {
        title: "Users",
        icon: Users,
        url: "users",
      },
      {
        title: "Restaurants",
        icon: Utensils,
        url: "restaurants",
      }
    );
  }
  return baseItems;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAuthStore();
  const data = getMenuItems(user?.role as string);

  return (
    <Sidebar {...props}>
      <SidebarHeader className="pt-4">
        <FudoCard />
      </SidebarHeader>
      <SidebarContent className="px-2 pt-4">
        {data.navMain.map((group, groupIndex) => (
          <SidebarGroupContent key={`group-${groupIndex}`}>
            <SidebarMenu>
              {group.items.map((item, itemIndex) => (
                <SidebarMenuItem key={`item-${item.url}-${itemIndex}`}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) => {
                      return `flex items-center gap-3 rounded-lg px-3 py-2 text-[#838181] transition-all hover:text-primary ${
                        isActive && "bg-[#F65F421F] text-primary"
                      }`;
                    }}
                  >
                    {<item.icon />}
                    {item.title}
                  </NavLink>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        ))}
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
