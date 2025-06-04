import type * as React from "react"
import type { LucideIcon } from "lucide-react"

import type { SidebarGroup } from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return null
}
