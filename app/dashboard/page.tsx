import { Download, Edit, FileText, Copy, Sparkles, Plus } from "lucide-react"
import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"
import { Button } from "@/components/ui/button"
import { Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

export default function Page() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              {/* Main Content Header */}
              <div className="flex items-start justify-between border-b bg-background p-6">
                <div className="flex flex-col gap-1">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm text-muted-foreground">Interactions</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className="text-2xl font-semibold tracking-tight">Interactions</h1>
                </div>

                <div className="flex items-center gap-2">
                  <Button variant="outline">
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate
                  </Button>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Interaction
                  </Button>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex flex-1 flex-col gap-6 p-6">
                {/* Two Panel Layout */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 flex-1">
                  {/* Left Panel - Properties */}
                  <div className="rounded-lg border bg-card flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <h2 className="text-lg font-semibold">Properties</h2>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Edit className="mr-2 h-4 w-4" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          JSON
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col h-full">
                      <div className="flex-1 rounded bg-muted/50" />
                    </div>
                  </div>

                  {/* Right Panel - Text */}
                  <div className="rounded-lg border bg-card flex flex-col">
                    <div className="flex items-center justify-between border-b p-4">
                      <h2 className="text-lg font-semibold">Text</h2>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Copy className="mr-2 h-4 w-4" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          DOCX
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="mr-2 h-4 w-4" />
                          PDF
                        </Button>
                      </div>
                    </div>
                    <div className="p-4 flex-1 flex flex-col h-full">
                      <div className="flex-1 rounded bg-muted/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
