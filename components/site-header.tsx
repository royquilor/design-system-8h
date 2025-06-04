"use client"

import { usePathname } from "next/navigation"
import { SidebarIcon } from "lucide-react"

import { SearchCommand } from "./search-command"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"

// Define the breadcrumb mapping based on routes
const breadcrumbMap: Record<string, { parent?: string; parentHref?: string; title: string }> = {
  "/": { title: "Design System" },
  "/foundations": { parent: "Design System", parentHref: "/", title: "Foundations" },
  "/components": { parent: "Design System", parentHref: "/", title: "Components" },
  "/layout-patterns": { parent: "Design System", parentHref: "/", title: "Layout Patterns" },
  "/data-display": { parent: "Design System", parentHref: "/", title: "Data Display" },
  "/forms": { parent: "Design System", parentHref: "/", title: "Forms" },
  "/navigation": { parent: "Design System", parentHref: "/", title: "Navigation" },
  "/feedback": { parent: "Design System", parentHref: "/", title: "Feedback" },
  "/dashboard": { parent: "Examples", title: "Dashboard" },
  "/panel-guidelines": { parent: "Examples", title: "Panel Guidelines" },
}

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()
  const pathname = usePathname()

  const breadcrumbData = breadcrumbMap[pathname] || { title: "Page" }

  return (
    <header className="flex sticky top-0 z-50 w-full items-center border-b bg-background">
      <div className="flex h-[--header-height] w-full items-center gap-2 px-4">
        <Button className="h-8 w-8" variant="ghost" size="icon" onClick={toggleSidebar}>
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Breadcrumb className="hidden sm:block">
          <BreadcrumbList>
            {breadcrumbData.parent && breadcrumbData.parentHref ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumbData.parentHref}>{breadcrumbData.parent}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbData.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : breadcrumbData.parent ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">{breadcrumbData.parent}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>{breadcrumbData.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </>
            ) : (
              <BreadcrumbItem>
                <BreadcrumbPage>{breadcrumbData.title}</BreadcrumbPage>
              </BreadcrumbItem>
            )}
          </BreadcrumbList>
        </Breadcrumb>
        <div className="ml-auto">
          <SearchCommand />
        </div>
      </div>
    </header>
  )
}
