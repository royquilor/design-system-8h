"use client"

import { useState } from "react"
import { Copy, Download, Edit, FileText, Plus, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function PanelExamples() {
  const [selectedExample, setSelectedExample] = useState("dashboard")

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedExample === "dashboard" ? "default" : "outline"}
          onClick={() => setSelectedExample("dashboard")}
        >
          Dashboard
        </Button>
        <Button
          variant={selectedExample === "interactions-config" ? "default" : "outline"}
          onClick={() => setSelectedExample("interactions-config")}
        >
          Interactions: Config
        </Button>
        <Button
          variant={selectedExample === "interactions-prompts" ? "default" : "outline"}
          onClick={() => setSelectedExample("interactions-prompts")}
        >
          Interactions: Prompts
        </Button>
        <Button
          variant={selectedExample === "interactions-playground" ? "default" : "outline"}
          onClick={() => setSelectedExample("interactions-playground")}
        >
          Interactions: Playground
        </Button>
        <Button
          variant={selectedExample === "prompts" ? "default" : "outline"}
          onClick={() => setSelectedExample("prompts")}
        >
          Prompts
        </Button>
        <Button
          variant={selectedExample === "agent" ? "default" : "outline"}
          onClick={() => setSelectedExample("agent")}
        >
          Agent
        </Button>
        <Button
          variant={selectedExample === "object-detail" ? "default" : "outline"}
          onClick={() => setSelectedExample("object-detail")}
        >
          Object Detail
        </Button>
      </div>

      <div className="rounded-lg border">
        <div className="border-b bg-muted/40 p-4">
          <h3 className="font-medium">{getExampleTitle(selectedExample)}</h3>
          <p className="text-sm text-muted-foreground">{getExampleDescription(selectedExample)}</p>
        </div>

        <div className="p-6">
          {selectedExample === "dashboard" && <DashboardExample />}
          {selectedExample === "interactions-config" && <InteractionsConfigExample />}
          {selectedExample === "interactions-prompts" && <InteractionsPromptsExample />}
          {selectedExample === "interactions-playground" && <InteractionsPlaygroundExample />}
          {selectedExample === "prompts" && <PromptsExample />}
          {selectedExample === "agent" && <AgentExample />}
          {selectedExample === "object-detail" && <ObjectDetailExample />}
        </div>
      </div>
    </div>
  )
}

function getExampleTitle(example: string): string {
  switch (example) {
    case "dashboard":
      return "Dashboard Layout"
    case "interactions-config":
      return "Interactions: Configuration Tab"
    case "interactions-prompts":
      return "Interactions: Prompts Tab"
    case "interactions-playground":
      return "Interactions: Playground Tab"
    case "prompts":
      return "Prompts Layout"
    case "agent":
      return "Agent Layout"
    case "object-detail":
      return "Object Detail Layout"
    default:
      return ""
  }
}

function getExampleDescription(example: string): string {
  switch (example) {
    case "dashboard":
      return "Three equal panels with borders for distinct data tables"
    case "interactions-config":
      return "50/50 split with borders for configuration and schema"
    case "interactions-prompts":
      return "Complex layout with four panels of varying importance"
    case "interactions-playground":
      return "50/50 split with borders for input/output relationship"
    case "prompts":
      return "Single panel with full-width table"
    case "agent":
      return "2/3 - 1/3 split with borders for configuration and preview"
    case "object-detail":
      return "50/50 split with borders for properties and text"
    default:
      return ""
  }
}

function DashboardExample() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((panel) => (
          <div key={panel} className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-medium">Dashboard Panel {panel}</h3>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add
              </Button>
            </div>
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3].map((row) => (
                    <TableRow key={row}>
                      <TableCell>Item {row}</TableCell>
                      <TableCell>
                        <Badge variant="outline">Active</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Each panel has a border to clearly separate distinct data tables</li>
          <li>Consistent header styling across all panels for visual unity</li>
          <li>Equal sizing (1/3 each) as each panel has equal importance</li>
          <li>Responsive design stacks panels vertically on smaller screens</li>
        </ul>
      </div>
    </div>
  )
}

function InteractionsConfigExample() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Configuration</h3>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
          <div className="p-4 space-y-4">
            <div className="rounded bg-muted/50 h-32"></div>
            <div className="rounded bg-muted/50 h-32"></div>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Result Schema</h3>
            <Button variant="outline" size="sm">
              <FileText className="mr-2 h-4 w-4" />
              JSON
            </Button>
          </div>
          <div className="p-4">
            <div className="rounded bg-muted/50 h-64"></div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>50/50 split for equal emphasis on configuration and result schema</li>
          <li>Both panels have borders to clearly define their functional areas</li>
          <li>Consistent header styling with relevant actions for each panel</li>
          <li>Equal height maintains visual balance between the panels</li>
        </ul>
      </div>
    </div>
  )
}

function InteractionsPromptsExample() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-4">
        {/* Left column - 2/3 width */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-medium">Prompt Segments</h3>
              <Button variant="outline" size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Segment
              </Button>
            </div>
            <div className="p-4">
              <div className="rounded bg-muted/50 h-40"></div>
            </div>
          </div>

          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-medium">Test Data</h3>
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </div>
            <div className="p-4">
              <div className="rounded bg-muted/50 h-32"></div>
            </div>
          </div>
        </div>

        {/* Right column - 1/3 width */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-medium">Available Prompts</h3>
              <Button variant="outline" size="sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Generate
              </Button>
            </div>
            <div className="p-4">
              <div className="rounded bg-muted/50 h-40"></div>
            </div>
          </div>

          <div className="rounded-lg border bg-card">
            <div className="flex items-center justify-between border-b p-4">
              <h3 className="font-medium">Rendering</h3>
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
            </div>
            <div className="p-4">
              <div className="rounded bg-muted/50 h-32"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>2/3 - 1/3 split gives more space to primary content (prompt segments and test data)</li>
          <li>All panels have borders due to the high density of the UI</li>
          <li>Consistent header styling across all panels for visual unity</li>
          <li>Vertical stacking within columns creates clear visual hierarchy</li>
        </ul>
      </div>
    </div>
  )
}

function InteractionsPlaygroundExample() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Execution Payload</h3>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
          <div className="p-4">
            <div className="rounded bg-muted/50 h-64"></div>
          </div>
        </div>

        <div className="rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Execution Result</h3>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export
              </Button>
            </div>
          </div>
          <div className="p-4">
            <div className="rounded bg-muted/50 h-64"></div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>50/50 split emphasizes the input/output relationship</li>
          <li>Both panels have borders to clearly define their functional areas</li>
          <li>Consistent header styling with relevant actions for each panel</li>
          <li>Equal height maintains visual balance and reinforces the relationship</li>
        </ul>
      </div>
    </div>
  )
}

function PromptsExample() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border bg-card">
        <div className="flex items-center justify-between border-b p-4">
          <h3 className="font-medium">Prompts</h3>
          <Button variant="outline" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Add Prompt
          </Button>
        </div>
        <div className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[1, 2, 3, 4, 5].map((row) => (
                <TableRow key={row}>
                  <TableCell>Prompt {row}</TableCell>
                  <TableCell>System</TableCell>
                  <TableCell>2 days ago</TableCell>
                  <TableCell>
                    <Badge variant="outline">Active</Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>Single panel with border provides clear containment for the table data</li>
          <li>Full-width layout maximizes space for tabular data</li>
          <li>Consistent header styling with relevant action button</li>
          <li>Simple layout focuses attention on the content without distractions</li>
        </ul>
      </div>
    </div>
  )
}

function AgentExample() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8 rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Agent Configuration</h3>
            <Button variant="outline" size="sm">
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </Button>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="rounded bg-muted/50 h-32"></div>
              <div className="rounded bg-muted/50 h-32"></div>
              <div className="rounded bg-muted/50 h-32"></div>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 rounded-lg border bg-card">
          <div className="flex items-center justify-between border-b p-4">
            <h3 className="font-medium">Agent Preview</h3>
            <Button variant="outline" size="sm">
              <Sparkles className="mr-2 h-4 w-4" />
              Test
            </Button>
          </div>
          <div className="p-4">
            <div className="rounded bg-muted/50 h-96"></div>
          </div>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>2/3 - 1/3 split gives more space to the primary content (configuration)</li>
          <li>Both panels have borders to clearly define their functional areas</li>
          <li>Consistent header styling with relevant actions for each panel</li>
          <li>Configuration panel has more vertical space for complex settings</li>
        </ul>
      </div>
    </div>
  )
}

function ObjectDetailExample() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-lg border bg-card">
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-medium">Properties</h3>
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
              <div className="p-4">
                <div className="rounded bg-muted/50 h-64"></div>
              </div>
            </div>

            <div className="rounded-lg border bg-card">
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="font-medium">Text</h3>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <Copy className="mr-2 h-4 w-4" />
                    Copy
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
              <div className="p-4">
                <div className="rounded bg-muted/50 h-64"></div>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>History</CardTitle>
              <CardDescription>View the history of changes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded bg-muted/50 h-64"></div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage object settings</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded bg-muted/50 h-64"></div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="rounded-lg border bg-muted/40 p-4">
        <h4 className="font-medium mb-2">Design Rationale</h4>
        <ul className="list-disc pl-5 text-sm space-y-1">
          <li>50/50 split for equal emphasis on properties and text</li>
          <li>Both panels have borders to clearly define their functional areas</li>
          <li>Consistent header styling with relevant actions for each panel</li>
          <li>Tab interface reduces visual complexity by showing only relevant content</li>
        </ul>
      </div>
    </div>
  )
}
