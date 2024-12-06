import { useAuthStore } from "../store";
import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { self } from "../http/api";
import { useQuery } from "@tanstack/react-query";
import { ImSpinner6 } from "react-icons/im";
import { AxiosError } from "axios";
import { Badge } from "../components/ui/badge";

import { AppSidebar } from "../components/AppSidebar";
import { Separator } from "../components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "../components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { BellDot } from "lucide-react";
import BreadcrumbComponent from "../components/BreadcrumbComponent";

const getSelf = async () => {
  const { data } = await self();
  return data;
};
const Dashboard = () => {
  const { setUser, user } = useAuthStore();

  const { data, isLoading } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
    retry: (failureCount: number, error) => {
      if (error instanceof AxiosError && error.response?.status == 401) {
        return false;
      }
      return failureCount < 3;
    },
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center pt-10">
        <div className="text-black animate-spin">
          <ImSpinner6 />
        </div>
      </div>
    );
  }

  if (user === null) {
    return <Navigate to="/auth/login" replace={true} />;
  }
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center justify-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadcrumbComponent />
            <Badge className="bg-orange-400/100 ml-6" variant={"outline"}>
              {user.role == "admin"
                ? "You are an admine"
                : user.tenant?.name || "Null"}
            </Badge>
          </div>
          <div className=" flex cursor-pointer items-center justify-center gap-6">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <BellDot className="size-5" />
            </div>
            <Avatar className="">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <div className="m-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
