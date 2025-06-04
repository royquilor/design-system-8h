import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function FoundationsSection() {
  return (
    <div className="space-y-8">
      {/* Typography */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Typography</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Headings</CardTitle>
              <CardDescription>Semantic heading hierarchy</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h1 className="text-4xl font-bold">Heading 1</h1>
                <code className="text-sm text-muted-foreground">text-4xl font-bold</code>
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Heading 2</h2>
                <code className="text-sm text-muted-foreground">text-3xl font-semibold</code>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Heading 3</h3>
                <code className="text-sm text-muted-foreground">text-2xl font-semibold</code>
              </div>
              <div>
                <h4 className="text-xl font-semibold">Heading 4</h4>
                <code className="text-sm text-muted-foreground">text-xl font-semibold</code>
              </div>
              <div>
                <h5 className="text-lg font-medium">Heading 5</h5>
                <code className="text-sm text-muted-foreground">text-lg font-medium</code>
              </div>
              <div>
                <h6 className="text-base font-medium">Heading 6</h6>
                <code className="text-sm text-muted-foreground">text-base font-medium</code>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Body Text</CardTitle>
              <CardDescription>Text styles for content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-lg">Large text for emphasis</p>
                <code className="text-sm text-muted-foreground">text-lg</code>
              </div>
              <div>
                <p className="text-base">Default body text</p>
                <code className="text-sm text-muted-foreground">text-base</code>
              </div>
              <div>
                <p className="text-sm">Small text for captions</p>
                <code className="text-sm text-muted-foreground">text-sm</code>
              </div>
              <div>
                <p className="text-xs">Extra small text</p>
                <code className="text-sm text-muted-foreground">text-xs</code>
              </div>
              <div>
                <p className="text-muted-foreground">Muted text</p>
                <code className="text-sm text-muted-foreground">text-muted-foreground</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Primary Colors</CardTitle>
              <CardDescription>Main brand colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary"></div>
                <div>
                  <p className="font-medium">Primary</p>
                  <code className="text-sm text-muted-foreground">bg-primary</code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary-foreground border"></div>
                <div>
                  <p className="font-medium">Primary Foreground</p>
                  <code className="text-sm text-muted-foreground">bg-primary-foreground</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secondary Colors</CardTitle>
              <CardDescription>Supporting colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary"></div>
                <div>
                  <p className="font-medium">Secondary</p>
                  <code className="text-sm text-muted-foreground">bg-secondary</code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-accent"></div>
                <div>
                  <p className="font-medium">Accent</p>
                  <code className="text-sm text-muted-foreground">bg-accent</code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-muted"></div>
                <div>
                  <p className="font-medium">Muted</p>
                  <code className="text-sm text-muted-foreground">bg-muted</code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Semantic Colors</CardTitle>
              <CardDescription>Status and feedback colors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-destructive"></div>
                <div>
                  <p className="font-medium">Destructive</p>
                  <code className="text-sm text-muted-foreground">bg-destructive</code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-green-500"></div>
                <div>
                  <p className="font-medium">Success</p>
                  <code className="text-sm text-muted-foreground">bg-green-500</code>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-yellow-500"></div>
                <div>
                  <p className="font-medium">Warning</p>
                  <code className="text-sm text-muted-foreground">bg-yellow-500</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Spacing</h2>
        <Card>
          <CardHeader>
            <CardTitle>Spacing Scale</CardTitle>
            <CardDescription>Consistent spacing values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { size: "1", value: "4px", class: "p-1" },
                { size: "2", value: "8px", class: "p-2" },
                { size: "3", value: "12px", class: "p-3" },
                { size: "4", value: "16px", class: "p-4" },
                { size: "6", value: "24px", class: "p-6" },
                { size: "8", value: "32px", class: "p-8" },
                { size: "12", value: "48px", class: "p-12" },
                { size: "16", value: "64px", class: "p-16" },
              ].map((spacing) => (
                <div key={spacing.size} className="text-center">
                  <div className="bg-primary/20 mb-2">
                    <div className={`bg-primary ${spacing.class}`}></div>
                  </div>
                  <p className="font-medium">{spacing.size}</p>
                  <p className="text-sm text-muted-foreground">{spacing.value}</p>
                  <code className="text-xs">{spacing.class}</code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Border Radius */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
        <Card>
          <CardHeader>
            <CardTitle>Radius Scale</CardTitle>
            <CardDescription>Consistent border radius values</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "None", class: "rounded-none", value: "0px" },
                { name: "Small", class: "rounded-sm", value: "2px" },
                { name: "Default", class: "rounded", value: "6px" },
                { name: "Medium", class: "rounded-md", value: "6px" },
                { name: "Large", class: "rounded-lg", value: "8px" },
                { name: "Extra Large", class: "rounded-xl", value: "12px" },
                { name: "2XL", class: "rounded-2xl", value: "16px" },
                { name: "Full", class: "rounded-full", value: "9999px" },
              ].map((radius) => (
                <div key={radius.name} className="text-center">
                  <div className={`w-16 h-16 bg-primary mx-auto mb-2 ${radius.class}`}></div>
                  <p className="font-medium">{radius.name}</p>
                  <p className="text-sm text-muted-foreground">{radius.value}</p>
                  <code className="text-xs">{radius.class}</code>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
