import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AgentStatusBanner } from "@/components/ui/agent-status-banner"

export default function AgentStatusPage() {
  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              {/* Page header */}
              <div className="flex items-start justify-between border-b bg-background p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-3xl font-bold tracking-tight">Agent Status Messages</h1>
                  <p className="text-muted-foreground">Preview all agent/AI status banners and feedback states</p>
                </div>
              </div>

              {/* Main content: Side-by-side panels for variants */}
              <div className="p-6 flex flex-col md:flex-row gap-8">
                {/* Default variant panel */}
                <div className="flex-1 min-w-[260px]">
                  <div className="text-base font-semibold mb-4">Default Variant</div>
                  <div className="space-y-6 max-w-xl">
                    <div>
                      <div className="text-sm font-semibold mb-2">Planning</div>
                      <AgentStatusBanner status="planning" message="Agent is planning steps" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Running</div>
                      <AgentStatusBanner status="running" message="Agent is running analysis" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Thinking</div>
                      <AgentStatusBanner status="thinking" message="AI is thinking" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Using Tool</div>
                      <AgentStatusBanner status="using" message="AI is using tool" tool="Web Search" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Done</div>
                      <AgentStatusBanner status="done" message="Agent analysis complete" />
                    </div>
                  </div>
                </div>
                {/* Shimmer variant panel */}
                <div className="flex-1 min-w-[260px]">
                  <div className="text-base font-semibold mb-4">Shimmer Variant</div>
                  <div className="space-y-6 max-w-xl">
                    <div>
                      <div className="text-sm font-semibold mb-2">Planning</div>
                      <AgentStatusBanner status="planning" message="Agent is planning steps" variant="shimmer" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Running</div>
                      <AgentStatusBanner status="running" message="Agent is running analysis" variant="shimmer" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Thinking</div>
                      <AgentStatusBanner status="thinking" message="AI is thinking" variant="shimmer" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Using Tool</div>
                      <AgentStatusBanner status="using" message="AI is using tool" tool="Web Search" variant="shimmer" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-2">Done</div>
                      <AgentStatusBanner status="done" message="Agent analysis complete" variant="shimmer" />
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