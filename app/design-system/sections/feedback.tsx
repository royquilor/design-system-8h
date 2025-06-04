import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { AlertCircle, CheckCircle, Info, XCircle, Loader2 } from "lucide-react"

export function FeedbackSection() {
  return (
    <div className="space-y-8">
      {/* Alerts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Alerts</h2>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Alert Variants</CardTitle>
              <CardDescription>Different alert types for various feedback scenarios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Information</AlertTitle>
                <AlertDescription>
                  This is an informational alert. Use it to provide helpful context or tips.
                </AlertDescription>
              </Alert>

              <Alert className="border-green-200 bg-green-50 text-green-800">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your changes have been saved successfully. The system is now updated.
                </AlertDescription>
              </Alert>

              <Alert className="border-yellow-200 bg-yellow-50 text-yellow-800">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  This action cannot be undone. Please review your changes before proceeding.
                </AlertDescription>
              </Alert>

              <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Something went wrong. Please try again or contact support if the problem persists.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Loading States */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Loading States</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skeletons</CardTitle>
              <CardDescription>Placeholder content while data loads</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[150px]" />
                    <Skeleton className="h-4 w-[100px]" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Skeleton className="h-32 w-full" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Loading Indicators</CardTitle>
              <CardDescription>Spinners and progress indicators</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm">Loading...</span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Uploading file...</span>
                  <span>65%</span>
                </div>
                <Progress value={65} />
              </div>

              <div className="space-y-2">
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Status Indicators */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Status Indicators</h2>
        <Card>
          <CardHeader>
            <CardTitle>Status Badges</CardTitle>
            <CardDescription>Visual indicators for different states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Active
                </Badge>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Pending
                </Badge>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <Badge variant="destructive">Error</Badge>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
                <Badge variant="outline">Inactive</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Notifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Notifications</h2>
        <Card>
          <CardHeader>
            <CardTitle>Toast Notifications</CardTitle>
            <CardDescription>Temporary feedback messages</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg border bg-green-50 border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <p className="font-medium text-green-800">Success</p>
                  <p className="text-sm text-green-700">Your changes have been saved.</p>
                </div>
                <Button variant="ghost" size="sm" className="text-green-600">
                  ×
                </Button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border bg-blue-50 border-blue-200">
                <Info className="h-4 w-4 text-blue-600" />
                <div className="flex-1">
                  <p className="font-medium text-blue-800">Information</p>
                  <p className="text-sm text-blue-700">New features are now available.</p>
                </div>
                <Button variant="ghost" size="sm" className="text-blue-600">
                  ×
                </Button>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-lg border bg-red-50 border-red-200">
                <XCircle className="h-4 w-4 text-red-600" />
                <div className="flex-1">
                  <p className="font-medium text-red-800">Error</p>
                  <p className="text-sm text-red-700">Failed to save changes. Please try again.</p>
                </div>
                <Button variant="ghost" size="sm" className="text-red-600">
                  ×
                </Button>
              </div>
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
              <CardDescription>When there's no content to display</CardDescription>
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
              <CardTitle>Error State</CardTitle>
              <CardDescription>When something goes wrong</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-medium mb-2">Something went wrong</h3>
                <p className="text-sm text-muted-foreground mb-4">We couldn't load your data. Please try again.</p>
                <div className="flex gap-2 justify-center">
                  <Button variant="outline">Contact Support</Button>
                  <Button>Try Again</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feedback Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Feedback Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Guidelines for effective user feedback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Timing</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Show feedback immediately after user actions</li>
                  <li>• Use loading states for operations &gt; 1 second</li>
                  <li>• Auto-dismiss success messages after 3-5 seconds</li>
                  <li>• Keep error messages visible until resolved</li>
                  <li>• Provide progress indicators for long operations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Content</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Use clear, actionable language</li>
                  <li>• Explain what happened and why</li>
                  <li>• Provide next steps for errors</li>
                  <li>• Be specific about success actions</li>
                  <li>• Avoid technical jargon</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Visual Design</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Use consistent colors for message types</li>
                  <li>• Include appropriate icons</li>
                  <li>• Ensure sufficient contrast</li>
                  <li>• Position messages contextually</li>
                  <li>• Use animation to draw attention</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Announce important messages to screen readers</li>
                  <li>• Don't rely on color alone</li>
                  <li>• Provide keyboard navigation</li>
                  <li>• Use proper ARIA attributes</li>
                  <li>• Test with assistive technologies</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
