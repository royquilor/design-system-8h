import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { NavigationSection } from "../design-system/sections/navigation"

export default function NavigationPage() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              <div className="flex items-start justify-between border-b bg-background p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-bold tracking-tight">Navigation</h1>
                  <p className="text-muted-foreground">Breadcrumbs, tabs, sidebars, and page headers</p>
                </div>
              </div>

              <div className="p-6">
                <NavigationSection />
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
