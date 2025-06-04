import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Edit, Copy } from "lucide-react"

export function LayoutPatternsSection() {
  return (
    <div className="space-y-8">
      {/* Panel Layouts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Panel Layouts</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>50/50 Split Layout</CardTitle>
              <CardDescription>Equal emphasis panels for related content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div className="rounded-lg border bg-card">
                  <div className="flex items-center justify-between border-b p-3">
                    <h4 className="font-medium">Configuration</h4>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                  <div className="p-3">
                    <div className="rounded bg-muted/50 h-24"></div>
                  </div>
                </div>
                <div className="rounded-lg border bg-card">
                  <div className="flex items-center justify-between border-b p-3">
                    <h4 className="font-medium">Preview</h4>
                    <Button variant="outline" size="sm">
                      <Copy className="mr-2 h-4 w-4" />
                      Copy
                    </Button>
                  </div>
                  <div className="p-3">
                    <div className="rounded bg-muted/50 h-24"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Use when:</strong> Panels have equal importance, input/output relationships, configuration and
                preview
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2/3 - 1/3 Split Layout</CardTitle>
              <CardDescription>Primary content with supporting panel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-12 gap-4 mb-4">
                <div className="col-span-12 lg:col-span-8 rounded-lg border bg-card">
                  <div className="flex items-center justify-between border-b p-3">
                    <h4 className="font-medium">Main Content</h4>
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                  <div className="p-3">
                    <div className="rounded bg-muted/50 h-24"></div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-4 rounded-lg border bg-card">
                  <div className="flex items-center justify-between border-b p-3">
                    <h4 className="font-medium">Sidebar</h4>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-4 w-4" />
                      Add
                    </Button>
                  </div>
                  <div className="p-3">
                    <div className="rounded bg-muted/50 h-24"></div>
                  </div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Use when:</strong> One panel contains primary workflow, other has supporting information or
                controls
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Three Column Layout</CardTitle>
              <CardDescription>Equal panels for dashboard-style layouts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                {[1, 2, 3].map((panel) => (
                  <div key={panel} className="rounded-lg border bg-card">
                    <div className="flex items-center justify-between border-b p-3">
                      <h4 className="font-medium">Panel {panel}</h4>
                      <Button variant="outline" size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Add
                      </Button>
                    </div>
                    <div className="p-3">
                      <div className="rounded bg-muted/50 h-20"></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                <strong>Use when:</strong> Displaying multiple distinct data sets, dashboard widgets, equal importance
                content
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Card Patterns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Patterns</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Card</CardTitle>
              <CardDescription>Basic card with header and content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Card content area</p>
                  </CardContent>
                </Card>
                <div className="text-sm text-muted-foreground">
                  <strong>Use for:</strong> Grouped content, settings sections, feature highlights
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action Card</CardTitle>
              <CardDescription>Card with header actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <div>
                      <CardTitle className="text-base">Action Card</CardTitle>
                      <CardDescription>With header actions</CardDescription>
                    </div>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">Content with actions</p>
                  </CardContent>
                </Card>
                <div className="text-sm text-muted-foreground">
                  <strong>Use for:</strong> Editable content, interactive sections, data panels
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Spacing Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Spacing Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Layout Spacing</CardTitle>
            <CardDescription>Consistent spacing patterns for layouts</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Panel Spacing</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <code>gap-4</code> (16px) - Between panels on mobile
                  </li>
                  <li>
                    <code>gap-6</code> (24px) - Between panels on desktop
                  </li>
                  <li>
                    <code>p-4</code> (16px) - Internal panel padding
                  </li>
                  <li>
                    <code>p-6</code> (24px) - Page container padding
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Content Spacing</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <code>space-y-2</code> (8px) - Between form elements
                  </li>
                  <li>
                    <code>space-y-4</code> (16px) - Between content sections
                  </li>
                  <li>
                    <code>space-y-6</code> (24px) - Between major sections
                  </li>
                  <li>
                    <code>mb-4</code> (16px) - Section headers
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Responsive Patterns */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Responsive Patterns</h2>
        <Card>
          <CardHeader>
            <CardTitle>Breakpoint Behavior</CardTitle>
            <CardDescription>How layouts adapt across screen sizes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-medium">Mobile</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• All panels stack vertically</li>
                    <li>• Reduced padding and margins</li>
                    <li>• Simplified navigation</li>
                    <li>• Priority content first</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Desktop</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Side-by-side panel layouts</li>
                    <li>• Full navigation visible</li>
                    <li>• Increased spacing</li>
                    <li>• Multi-column grids</li>
                  </ul>
                </div>
              </div>
              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm">
                  <strong>Key Classes:</strong> <code>grid-cols-1 lg:grid-cols-2</code>,
                  <code>col-span-12 lg:col-span-8</code>, <code>hidden md:block</code>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
