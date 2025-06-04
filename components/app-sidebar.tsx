"use client"

import type * as React from "react"
import Link from "next/link"
import { Bot, Command, Frame, LifeBuoy, Map, PieChart, Send, Palette } from "lucide-react"

import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"
import { NavSecondary } from "./nav-secondary"
import { NavUser } from "./nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Design System",
      url: "/",
      icon: Palette,
      isActive: true,
      items: [
        {
          title: "Foundations",
          url: "/foundations",
        },
        {
          title: "Components",
          url: "/components",
        },
        {
          title: "Layout Patterns",
          url: "/layout-patterns",
        },
        {
          title: "Data Display",
          url: "/data-display",
        },
        {
          title: "Forms",
          url: "/forms",
        },
        {
          title: "AI Chat UI",
          url: "/ai-chat",
        },
        {
          title: "Navigation",
          url: "/navigation",
        },
        {
          title: "Feedback",
          url: "/feedback",
        },
      ],
    },
    {
      title: "Examples",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
        {
          title: "Panel Guidelines",
          url: "/panel-guidelines",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar className="top-[--header-height] !h-[calc(100svh-var(--header-height))]" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Design System</span>
                  <span className="truncate text-xs">UI Documentation</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
