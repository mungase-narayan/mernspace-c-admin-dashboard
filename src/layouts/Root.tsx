import { useQuery } from "@tanstack/react-query";
import { useAuthStore } from "../store";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { self } from "../http/api";

import { ImSpinner6 } from "react-icons/im";

const getSelf = async () => {
  const { data } = await self();
  return data;
};

const Root = () => {
  const { setUser } = useAuthStore();

  const { data, isLoading } = useQuery({
    queryKey: ["self"],
    queryFn: getSelf,
  });

  useEffect(() => {
    console.log("Data: ");
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
  return <Outlet />;
};

export default Root;
