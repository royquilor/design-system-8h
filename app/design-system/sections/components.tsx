import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Check, X, Info, Download, Edit, Plus, Search } from "lucide-react"

export function ComponentsSection() {
  return (
    <div className="space-y-8">
      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Button Variants</CardTitle>
              <CardDescription>Different button styles for various use cases</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
              <Separator />
              <div className="space-y-2">
                <h4 className="font-medium">Usage Guidelines</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>
                    <strong>Default:</strong> Primary actions, main CTAs
                  </li>
                  <li>
                    <strong>Secondary:</strong> Secondary actions, less emphasis
                  </li>
                  <li>
                    <strong>Outline:</strong> Alternative actions, filters
                  </li>
                  <li>
                    <strong>Ghost:</strong> Subtle actions, icon buttons
                  </li>
                  <li>
                    <strong>Destructive:</strong> Delete, remove actions
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Button Sizes & Icons</CardTitle>
              <CardDescription>Size variations and icon usage</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
              <Separator />
              <div className="space-y-2">
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <Button>
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
                <Button variant="outline">
                  <Edit className="mr-2 h-4 w-4" />
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Form Controls */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Form Controls</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Input Fields</CardTitle>
              <CardDescription>Text inputs and variations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="default-input">Default Input</Label>
                <Input id="default-input" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="search-input">Search Input</Label>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="search-input" placeholder="Search..." className="pl-8" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="textarea">Textarea</Label>
                <Textarea id="textarea" placeholder="Enter longer text..." />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Selection Controls</CardTitle>
              <CardDescription>Checkboxes, radios, and selects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Dropdown</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Checkboxes</Label>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check1" />
                    <Label htmlFor="check1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="check2" />
                    <Label htmlFor="check2">Option 2</Label>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Radio Group</Label>
                <RadioGroup defaultValue="radio1">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radio1" id="radio1" />
                    <Label htmlFor="radio1">Option 1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="radio2" id="radio2" />
                    <Label htmlFor="radio2">Option 2</Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Elements */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Interactive Elements</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Switches & Sliders</CardTitle>
              <CardDescription>Toggle and range controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Switch id="switch1" />
                <Label htmlFor="switch1">Enable notifications</Label>
              </div>
              <div className="space-y-2">
                <Label>Volume</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
              <div className="space-y-2">
                <Label>Progress</Label>
                <Progress value={33} />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges & Avatars</CardTitle>
              <CardDescription>Status indicators and user representation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Badges</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Avatars</Label>
                <div className="flex gap-2">
                  <Avatar>
                    <AvatarImage src="/placeholder.svg?height=40&width=40" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <Avatar>
                    <AvatarFallback>AB</AvatarFallback>
                  </Avatar>
                </div>
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
            <CardTitle>Icon Usage</CardTitle>
            <CardDescription>Semantic icons for different states</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <Check className="h-4 w-4 text-green-500" />
                <span className="text-sm">Success</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <AlertCircle className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">Warning</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <X className="h-4 w-4 text-red-500" />
                <span className="text-sm">Error</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg border">
                <Info className="h-4 w-4 text-blue-500" />
                <span className="text-sm">Info</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
