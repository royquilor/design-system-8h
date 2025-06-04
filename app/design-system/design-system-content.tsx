"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FoundationsSection } from "./sections/foundations"
import { ComponentsSection } from "./sections/components"
import { LayoutPatternsSection } from "./sections/layout-patterns"
import { DataDisplaySection } from "./sections/data-display"
import { FormsSection } from "./sections/forms"
import { NavigationSection } from "./sections/navigation"
import { FeedbackSection } from "./sections/feedback"

export function DesignSystemContent() {
  return (
    <div className="p-6">
      <Tabs defaultValue="foundations" className="w-full">
        <TabsList className="grid w-full grid-cols-7">
          <TabsTrigger value="foundations">Foundations</TabsTrigger>
          <TabsTrigger value="components">Components</TabsTrigger>
          <TabsTrigger value="layout">Layout</TabsTrigger>
          <TabsTrigger value="data">Data Display</TabsTrigger>
          <TabsTrigger value="forms">Forms</TabsTrigger>
          <TabsTrigger value="navigation">Navigation</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>

        <TabsContent value="foundations" className="mt-6">
          <FoundationsSection />
        </TabsContent>

        <TabsContent value="components" className="mt-6">
          <ComponentsSection />
        </TabsContent>

        <TabsContent value="layout" className="mt-6">
          <LayoutPatternsSection />
        </TabsContent>

        <TabsContent value="data" className="mt-6">
          <DataDisplaySection />
        </TabsContent>

        <TabsContent value="forms" className="mt-6">
          <FormsSection />
        </TabsContent>

        <TabsContent value="navigation" className="mt-6">
          <NavigationSection />
        </TabsContent>

        <TabsContent value="feedback" className="mt-6">
          <FeedbackSection />
        </TabsContent>
      </Tabs>
    </div>
  )
}
