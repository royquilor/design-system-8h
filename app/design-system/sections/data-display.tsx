import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { MoreHorizontal, ArrowUpDown, Filter } from "lucide-react"

export function DataDisplaySection() {
  return (
    <div className="space-y-8">
      {/* Tables */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Tables</h2>
        <Card className="border-0">
          <CardHeader className="px-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Data Table</CardTitle>
                <CardDescription>Standard table with actions and status indicators</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="mr-2 h-4 w-4" />
                  Sort
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="px-0">
            <Table className="border rounded-lg">
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  { name: "Project Alpha", status: "Active", progress: 75, created: "2 days ago" },
                  { name: "Project Beta", status: "Pending", progress: 45, created: "1 week ago" },
                  { name: "Project Gamma", status: "Completed", progress: 100, created: "2 weeks ago" },
                  { name: "Project Delta", status: "Error", progress: 25, created: "3 days ago" },
                ].map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          item.status === "Active"
                            ? "default"
                            : item.status === "Completed"
                              ? "secondary"
                              : item.status === "Error"
                                ? "destructive"
                                : "outline"
                        }
                      >
                        {item.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress value={item.progress} className="w-16" />
                        <span className="text-sm text-muted-foreground">{item.progress}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.created}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Lists */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Lists</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Simple List</CardTitle>
              <CardDescription>Basic list with avatars and metadata</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "John Doe", email: "john@example.com", role: "Admin" },
                  { name: "Jane Smith", email: "jane@example.com", role: "User" },
                  { name: "Bob Johnson", email: "bob@example.com", role: "Editor" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={`/placeholder.svg?height=32&width=32&text=${user.name.charAt(0)}`} />
                      <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{user.name}</p>
                      <p className="text-sm text-muted-foreground truncate">{user.email}</p>
                    </div>
                    <Badge variant="outline">{user.role}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Action List</CardTitle>
              <CardDescription>List items with actions and status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {[
                  { title: "Deploy to Production", status: "Completed", time: "2 min ago" },
                  { title: "Run Tests", status: "In Progress", time: "5 min ago" },
                  { title: "Build Application", status: "Failed", time: "10 min ago" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant={
                          item.status === "Completed"
                            ? "secondary"
                            : item.status === "In Progress"
                              ? "default"
                              : "destructive"
                        }
                      >
                        {item.status}
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cards Grid */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Card Grids</h2>
        <Card>
          <CardHeader>
            <CardTitle>Project Cards</CardTitle>
            <CardDescription>Grid layout for project or item cards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: "Website Redesign", status: "Active", progress: 65, members: 4 },
                { name: "Mobile App", status: "Planning", progress: 20, members: 6 },
                { name: "API Integration", status: "Completed", progress: 100, members: 2 },
              ].map((project, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">{project.name}</CardTitle>
                      <Badge variant="outline">{project.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{project.members} members</span>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Empty States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Empty States</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>No Data</CardTitle>
              <CardDescription>Empty state with call to action</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">No projects yet</h3>
                <p className="text-sm text-muted-foreground mb-4">Get started by creating your first project</p>
                <Button>Create Project</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Search Results</CardTitle>
              <CardDescription>Empty search state</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-medium mb-2">No results found</h3>
                <p className="text-sm text-muted-foreground mb-4">Try adjusting your search terms</p>
                <Button variant="outline">Clear Search</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
