import Link from "next/link"
import { AppSidebar } from "../components/app-sidebar"
import { SiteHeader } from "../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {} from "lucide-react"

export default function HomePage() {
  const sections = [
    {
      title: "Foundations",
      description: "Typography, colors, spacing, and core design tokens",
      href: "/foundations",
      status: "Complete",
    },
    {
      title: "Components",
      description: "Buttons, forms, inputs, and interactive elements",
      href: "/components",
      status: "Complete",
    },
    {
      title: "Layout Patterns",
      description: "Panel layouts, cards, and responsive patterns",
      href: "/layout-patterns",
      status: "Complete",
    },
    {
      title: "Data Display",
      description: "Tables, lists, grids, and data visualization",
      href: "/data-display",
      status: "Complete",
    },
    {
      title: "Forms",
      description: "Form layouts, validation, and input patterns",
      href: "/forms",
      status: "Complete",
    },
    {
      title: "Navigation",
      description: "Breadcrumbs, tabs, sidebars, and page headers",
      href: "/navigation",
      status: "Complete",
    },
    {
      title: "Feedback",
      description: "Alerts, loading states, and user feedback patterns",
      href: "/feedback",
      status: "Complete",
    },
  ]

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
                  <h1 className="text-3xl font-bold tracking-tight">Design System</h1>
                  <p className="text-muted-foreground">
                    Comprehensive documentation of UI patterns, components, and guidelines
                  </p>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-8">
                  <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
                    <CardHeader>
                      <div>
                        <CardTitle>Welcome to the Design System</CardTitle>
                        <CardDescription>
                          A comprehensive guide to building consistent, accessible interfaces
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        This design system provides a unified set of design principles, components, and patterns to help
                        you build cohesive user experiences. Navigate through the sections using the sidebar to explore
                        different aspects of the system.
                      </p>
                      <div className="flex gap-2">
                        <Button asChild>
                          <Link href="/foundations">Get Started</Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/components">View Components</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-4">Explore Sections</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sections.map((section) => (
                      <Card key={section.title} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div>
                                <CardTitle className="text-base">{section.title}</CardTitle>
                              </div>
                            </div>
                            <Badge variant="secondary" className="text-xs">
                              {section.status}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-3">{section.description}</p>
                          <Button variant="outline" size="sm" asChild className="w-full">
                            <Link href={section.href}>Explore</Link>
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Quick Links</CardTitle>
                      <CardDescription>Common resources and tools</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-2">For Designers</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>
                              •{" "}
                              <Link href="/foundations" className="hover:text-foreground">
                                Design tokens and foundations
                              </Link>
                            </li>
                            <li>
                              •{" "}
                              <Link href="/components" className="hover:text-foreground">
                                Component specifications
                              </Link>
                            </li>
                            <li>
                              •{" "}
                              <Link href="/layout-patterns" className="hover:text-foreground">
                                Layout patterns and grids
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">For Developers</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>
                              •{" "}
                              <Link href="/components" className="hover:text-foreground">
                                Component API documentation
                              </Link>
                            </li>
                            <li>
                              •{" "}
                              <Link href="/forms" className="hover:text-foreground">
                                Form patterns and validation
                              </Link>
                            </li>
                            <li>
                              •{" "}
                              <Link href="/feedback" className="hover:text-foreground">
                                Loading states and feedback
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}
