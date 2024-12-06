"use client";
import * as React from "react";
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { MapPinHouse } from "lucide-react";
export function FudoCard() {
  return (
    <SidebarMenu className="border rounded-lg border-gray-400">
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
            <MapPinHouse className="size-5" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <span className="font-semibold">FUDO</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
