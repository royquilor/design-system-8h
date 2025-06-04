import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PanelExamples } from "./panel-examples"

export default function PanelGuidelinesPage() {
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
                  <h1 className="text-2xl font-semibold tracking-tight">Panel Layout Guidelines</h1>
                  <p className="text-muted-foreground">Consistent patterns for panel layouts across the product</p>
                </div>
              </div>

              <div className="p-6">
                <Tabs defaultValue="principles">
                  <TabsList className="mb-4">
                    <TabsTrigger value="principles">Design Principles</TabsTrigger>
                    <TabsTrigger value="examples">Layout Examples</TabsTrigger>
                  </TabsList>

                  <TabsContent value="principles" className="space-y-6">
                    <div className="rounded-lg border p-6 space-y-4">
                      <h2 className="text-xl font-semibold">Core Principles</h2>

                      <div className="space-y-2">
                        <h3 className="font-medium">1. Visual Hierarchy</h3>
                        <p className="text-muted-foreground">
                          Use borders to create clear boundaries between functional areas. Panels that contain related
                          but distinct content should have borders.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">2. Content Density</h3>
                        <p className="text-muted-foreground">
                          For dense UIs, use borders to separate content areas. For less dense UIs, spacing alone may be
                          sufficient.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">3. Panel Relationships</h3>
                        <p className="text-muted-foreground">
                          Panels with equal importance should have equal visual weight. Input/output relationships
                          should be visually distinct.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">4. Consistent Headers</h3>
                        <p className="text-muted-foreground">
                          All panels should have consistent header styling with clear titles and actions.
                        </p>
                      </div>
                    </div>

                    <div className="rounded-lg border p-6 space-y-4">
                      <h2 className="text-xl font-semibold">When to Use Borders</h2>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <h3 className="font-medium">Use Borders When:</h3>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Panels contain distinct functional areas</li>
                            <li>UI is dense with multiple data types</li>
                            <li>Panels have actions or interactive elements</li>
                            <li>Content needs clear separation</li>
                            <li>Panels have different background colors</li>
                          </ul>
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium">Skip Borders When:</h3>
                          <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                            <li>Content is simple and well-spaced</li>
                            <li>Panels are already visually distinct</li>
                            <li>Using cards or elevated components</li>
                            <li>UI needs to feel more open and spacious</li>
                            <li>Content is part of the same workflow</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-6 space-y-4">
                      <h2 className="text-xl font-semibold">Panel Sizing Guidelines</h2>

                      <div className="space-y-2">
                        <h3 className="font-medium">50/50 Split</h3>
                        <p className="text-muted-foreground">
                          Use when panels have equal importance or are part of the same workflow (e.g., configuration
                          and preview).
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">2/3 - 1/3 Split</h3>
                        <p className="text-muted-foreground">
                          Use when one panel contains primary content and the other contains supporting information or
                          controls.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Responsive Considerations</h3>
                        <p className="text-muted-foreground">
                          Panels should stack vertically on smaller screens, with the most important panel first.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="examples">
                    <PanelExamples />
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
