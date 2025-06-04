"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Palette, Layout, Database, FileText, Navigation, MessageSquare, Bot, Frame } from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

const searchData = [
  // Design System sections
  {
    id: "foundations",
    title: "Foundations",
    description: "Typography, colors, spacing, and core design tokens",
    href: "/foundations",
    group: "Design System",
    icon: Palette,
    keywords: ["typography", "colors", "spacing", "tokens", "fonts", "palette"],
  },
  {
    id: "components",
    title: "Components",
    description: "Buttons, forms, inputs, and interactive elements",
    href: "/components",
    group: "Design System",
    icon: Layout,
    keywords: ["buttons", "forms", "inputs", "interactive", "ui", "elements"],
  },
  {
    id: "layout-patterns",
    title: "Layout Patterns",
    description: "Panel layouts, cards, and responsive patterns",
    href: "/layout-patterns",
    group: "Design System",
    icon: Layout,
    keywords: ["panels", "cards", "responsive", "grid", "layout", "patterns"],
  },
  {
    id: "data-display",
    title: "Data Display",
    description: "Tables, lists, grids, and data visualization",
    href: "/data-display",
    group: "Design System",
    icon: Database,
    keywords: ["tables", "lists", "grids", "data", "visualization", "charts"],
  },
  {
    id: "forms",
    title: "Forms",
    description: "Form layouts, validation, and input patterns",
    href: "/forms",
    group: "Design System",
    icon: FileText,
    keywords: ["forms", "validation", "inputs", "fields", "submit", "checkbox", "radio"],
  },
  {
    id: "navigation",
    title: "Navigation",
    description: "Breadcrumbs, tabs, sidebars, and page headers",
    href: "/navigation",
    group: "Design System",
    icon: Navigation,
    keywords: ["breadcrumbs", "tabs", "sidebar", "menu", "navigation", "header"],
  },
  {
    id: "feedback",
    title: "Feedback",
    description: "Alerts, loading states, and user feedback patterns",
    href: "/feedback",
    group: "Design System",
    icon: MessageSquare,
    keywords: ["alerts", "loading", "feedback", "notifications", "toast", "errors"],
  },
  // Examples
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Dashboard layout example with panels",
    href: "/dashboard",
    group: "Examples",
    icon: Bot,
    keywords: ["dashboard", "panels", "layout", "example"],
  },
  {
    id: "panel-guidelines",
    title: "Panel Guidelines",
    description: "Guidelines for panel layouts and design",
    href: "/panel-guidelines",
    group: "Examples",
    icon: Frame,
    keywords: ["panels", "guidelines", "layout", "design", "patterns"],
  },
  // Specific component searches
  {
    id: "buttons",
    title: "Buttons",
    description: "Button variants, sizes, and usage guidelines",
    href: "/components#buttons",
    group: "Components",
    icon: Layout,
    keywords: ["button", "primary", "secondary", "outline", "ghost", "destructive"],
  },
  {
    id: "tables",
    title: "Tables",
    description: "Data tables with sorting and actions",
    href: "/data-display#tables",
    group: "Components",
    icon: Database,
    keywords: ["table", "data", "rows", "columns", "sorting", "pagination"],
  },
  {
    id: "cards",
    title: "Cards",
    description: "Card layouts and patterns",
    href: "/layout-patterns#cards",
    group: "Components",
    icon: Layout,
    keywords: ["card", "container", "content", "layout"],
  },
  {
    id: "alerts",
    title: "Alerts",
    description: "Alert messages and notifications",
    href: "/feedback#alerts",
    group: "Components",
    icon: MessageSquare,
    keywords: ["alert", "notification", "message", "warning", "error", "success"],
  },
]

export function SearchCommand() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-8 w-full justify-start pl-2 rounded-[0.5rem] bg-background text-sm font-normal text-muted-foreground shadow-none sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search documentation...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {["Design System", "Examples", "Components"].map((group) => {
            const groupItems = searchData.filter((item) => item.group === group)
            if (groupItems.length === 0) return null

            return (
              <CommandGroup key={group} heading={group}>
                {groupItems.map((item) => (
                  <CommandItem
                    key={item.id}
                    value={`${item.title} ${item.description} ${item.keywords.join(" ")}`}
                    onSelect={() => {
                      runCommand(() => router.push(item.href))
                    }}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )
          })}
        </CommandList>
      </CommandDialog>
    </>
  )
}
