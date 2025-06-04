import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Info } from "lucide-react"

export function FormsSection() {
  return (
    <div className="space-y-8">
      {/* Form Layout */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Layouts</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Single Column Form</CardTitle>
              <CardDescription>Standard form layout for most use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Enter your full name" className="shadow-xs" />
                <p className="text-sm text-muted-foreground">This is your public display name.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="shadow-xs" />
                <p className="text-sm text-muted-foreground">We'll use this to send you important updates.</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger className="shadow-xs">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="user">User</SelectItem>
                    <SelectItem value="editor">Editor</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea id="bio" placeholder="Tell us about yourself" className="shadow-xs" />
                <p className="text-sm text-muted-foreground">
                  Tell us a little bit about yourself. This will be displayed on your profile.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" className="shadow-xs" />
                <Label htmlFor="terms" className="text-sm">
                  I agree to the terms and conditions
                </Label>
              </div>
              <Button className="w-full">Create Account</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Two Column Form</CardTitle>
              <CardDescription>Compact layout for related fields</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" className="shadow-xs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" className="shadow-xs" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc" className="shadow-xs" />
                <p className="text-sm text-muted-foreground">The organization you work for.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="New York" className="shadow-xs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="10001" className="shadow-xs" />
                </div>
              </div>
              <Separator />
              <div className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Validation */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Validation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Error States</CardTitle>
              <CardDescription>How to display validation errors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email-error">Email</Label>
                <Input
                  id="email-error"
                  type="email"
                  placeholder="Enter your email"
                  className="border-red-500 focus:border-red-500 focus:ring-red-500 shadow-xs"
                />
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  Please enter a valid email address
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-error">Password</Label>
                <Input
                  id="password-error"
                  type="password"
                  placeholder="Enter your password"
                  className="border-red-500 focus:border-red-500 focus:ring-red-500 shadow-xs"
                />
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <AlertCircle className="h-4 w-4" />
                  Password must be at least 8 characters
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Help Text</CardTitle>
              <CardDescription>Providing guidance and context</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Enter username" className="shadow-xs" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  Username must be 3-20 characters, letters and numbers only
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" type="password" placeholder="Enter API key" className="shadow-xs" />
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4" />
                  You can find your API key in your account settings
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Sections */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Sections</h2>
        <Card>
          <CardHeader>
            <CardTitle>Multi-Section Form</CardTitle>
            <CardDescription>Organizing complex forms into logical sections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="profile-name">Full Name</Label>
                  <Input id="profile-name" placeholder="Enter your name" className="shadow-xs" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="profile-email">Email</Label>
                  <Input id="profile-email" type="email" placeholder="Enter your email" className="shadow-xs" />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Preferences</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive email updates about your account</p>
                  </div>
                  <Switch />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Marketing Emails</Label>
                    <p className="text-sm text-muted-foreground">Receive emails about new features and updates</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium mb-4">Account Type</h3>
              <RadioGroup defaultValue="personal">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="personal" id="personal" className="shadow-xs" />
                  <Label htmlFor="personal">Personal</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="business" id="business" className="shadow-xs" />
                  <Label htmlFor="business">Business</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="enterprise" id="enterprise" className="shadow-xs" />
                  <Label htmlFor="enterprise">Enterprise</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Guidelines */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Guidelines</h2>
        <Card>
          <CardHeader>
            <CardTitle>Best Practices</CardTitle>
            <CardDescription>Guidelines for creating effective forms</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Layout</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Use single column for most forms</li>
                  <li>• Group related fields together</li>
                  <li>• Use consistent spacing (space-y-4)</li>
                  <li>• Place labels above inputs</li>
                  <li>• Align form elements to the left</li>
                  <li>• Include helpful descriptions for complex fields</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Validation</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Validate on blur for better UX</li>
                  <li>• Show errors inline with icons</li>
                  <li>• Use red borders for error states</li>
                  <li>• Provide helpful error messages</li>
                  <li>• Include help text for complex fields</li>
                  <li>• Use descriptions to prevent errors</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Associate labels with inputs</li>
                  <li>• Use proper ARIA attributes</li>
                  <li>• Ensure keyboard navigation works</li>
                  <li>• Provide clear focus indicators</li>
                  <li>• Use semantic HTML elements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Actions</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Primary action on the right</li>
                  <li>• Secondary actions on the left</li>
                  <li>• Use full-width buttons on mobile</li>
                  <li>• Disable submit while processing</li>
                  <li>• Provide clear action labels</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
