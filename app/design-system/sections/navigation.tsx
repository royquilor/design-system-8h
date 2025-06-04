import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Home, Settings, Users, BarChart, ChevronDown, ChevronRight } from "lucide-react"

export function NavigationSection() {
  return (
    <div className="space-y-8">
      {/* Breadcrumbs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Breadcrumbs</h2>
        <Card>
          <CardHeader>
            <CardTitle>Navigation Breadcrumbs</CardTitle>
            <CardDescription>Show users their current location in the hierarchy</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">Standard Breadcrumbs</h4>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Project Alpha</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div>
              <h4 className="font-medium mb-2">With Category</h4>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">Settings</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>User Management</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="text-sm text-muted-foreground">
              <strong>Usage:</strong> Use breadcrumbs for deep navigation hierarchies. Keep to 3-5 levels maximum.
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tabs */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tabs</h2>
        <Card>
          <CardHeader>
            <CardTitle>Tab Navigation</CardTitle>
            <CardDescription>Organize related content into separate views</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="team">Team</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-medium mb-2">Overview Content</h3>
                  <p className="text-sm text-muted-foreground">
                    This is the overview tab content. Use tabs to organize related information.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="analytics" className="mt-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-medium mb-2">Analytics Content</h3>
                  <p className="text-sm text-muted-foreground">Analytics and metrics would be displayed here.</p>
                </div>
              </TabsContent>
              <TabsContent value="settings" className="mt-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-medium mb-2">Settings Content</h3>
                  <p className="text-sm text-muted-foreground">Configuration options and preferences.</p>
                </div>
              </TabsContent>
              <TabsContent value="team" className="mt-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-medium mb-2">Team Content</h3>
                  <p className="text-sm text-muted-foreground">Team members and collaboration features.</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Sidebar Navigation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Sidebar Navigation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Navigation</CardTitle>
              <CardDescription>Main navigation items with icons</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {[
                  { icon: Home, label: "Dashboard", active: true },
                  { icon: BarChart, label: "Analytics", active: false },
                  { icon: Users, label: "Team", active: false },
                  { icon: Settings, label: "Settings", active: false },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer ${
                      item.active ? "bg-primary text-primary-foreground" : "hover:bg-muted/50"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Collapsible Navigation</CardTitle>
              <CardDescription>Navigation with expandable sections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <Home className="h-4 w-4" />
                  <span className="font-medium">Dashboard</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                    <ChevronDown className="h-4 w-4" />
                    <BarChart className="h-4 w-4" />
                    <span className="font-medium">Analytics</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    <div className="flex items-center gap-3 px-3 py-1 rounded-lg hover:bg-muted/50 cursor-pointer text-sm">
                      <span>Overview</span>
                    </div>
                    <div className="flex items-center gap-3 px-3 py-1 rounded-lg hover:bg-muted/50 cursor-pointer text-sm">
                      <span>Reports</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 cursor-pointer">
                  <ChevronRight className="h-4 w-4" />
                  <Users className="h-4 w-4" />
                  <span className="font-medium">Team</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Page Headers */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Page Headers</h2>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Standard Page Header</CardTitle>
              <CardDescription>Basic page header with title and actions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between border-b pb-4">
                <div className="flex flex-col gap-1">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm text-muted-foreground">Projects</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
                </div>
                <Button>New Project</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Complex Page Header</CardTitle>
              <CardDescription>Page header with multiple actions and metadata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-start justify-between border-b pb-4">
                <div className="flex flex-col gap-2">
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink href="#">Projects</BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage className="text-sm text-muted-foreground">Project Alpha</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-semibold tracking-tight">Project Alpha</h1>
                    <Badge>Active</Badge>
                  </div>
                  <p className="text-muted-foreground">A comprehensive project management solution</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline">Share</Button>
                  <Button variant="outline">Settings</Button>
                  <Button>Deploy</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Navigation Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Navigation Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Guidelines for effective navigation design</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Hierarchy</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Keep navigation depth to 3 levels maximum</li>
                  <li>• Use consistent navigation patterns</li>
                  <li>• Highlight current page/section</li>
                  <li>• Group related items together</li>
                  <li>• Use clear, descriptive labels</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Visual Design</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Use icons consistently across navigation</li>
                  <li>• Maintain adequate spacing between items</li>
                  <li>• Provide clear hover and active states</li>
                  <li>• Use appropriate contrast ratios</li>
                  <li>• Consider mobile navigation patterns</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Use semantic HTML elements</li>
                  <li>• Provide skip navigation links</li>
                  <li>• Use ARIA labels where needed</li>
                  <li>• Test with screen readers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Performance</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Lazy load navigation content when possible</li>
                  <li>• Optimize icon loading</li>
                  <li>• Use proper caching strategies</li>
                  <li>• Minimize navigation re-renders</li>
                  <li>• Consider progressive enhancement</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
