"use client"

import { cn } from "@/lib/utils"
import { CheckCircle2, Loader2 } from "lucide-react"
import React, { useEffect, useState } from "react"

/**
 * AnimatedEllipsis: cycles through '', '.', '..', '...'
 */
function AnimatedEllipsis() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => setStep((s) => (s + 1) % 4), 400)
    return () => clearInterval(interval)
  }, [])
  return <span aria-hidden="true">{'.'.repeat(step)}</span>
}

/**
 * ShimmerText: overlays a shimmer highlight on always-visible text for best readability
 */
function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block align-middle">
      <span className="relative z-10 text-inherit">{children}</span>
      <span
        aria-hidden="true"
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0) 100%)",
          backgroundSize: "200% 100%",
          animation: "shimmerOverlay 1.1s linear infinite",
        }}
      />
      <style>{`
        @keyframes shimmerOverlay {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </span>
  )
}

/**
 * AgentStatusBanner
 * Minimal, unified status banner for agent state/messages.
 * Props:
 * - status: string ('done' or any other for loading/thinking)
 * - message: string (main message to display)
 * - tool?: string (optional tool name for 'using' state)
 * - className?: string (optional extra classes)
 */
export function AgentStatusBanner({
  status,
  message,
  tool,
  className,
  variant = "default",
}: {
  status: string
  message: string
  tool?: string
  className?: string
  variant?: "default" | "shimmer"
}) {
  const isDone = status === "done"
  const isUsing = status === "using"
  const showAnimatedEllipsis = ["planning", "running", "thinking"].includes(status)
  const showLoader = !isDone && (variant === "shimmer" || isUsing)
  return (
    <div
      className={cn(
        "mb-2 flex items-center gap-2 text-sm font-normal",
        className
      )}
      role="status"
      aria-live="polite"
    >
      {isDone ? (
        <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
      ) : showLoader ? (
        <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
      ) : null}
      <span>
        {variant === "shimmer" && !isDone ? (
          <ShimmerText>
            {message}
            {isUsing && tool ? `: ${tool}` : null}
          </ShimmerText>
        ) : (
          <>
            {message}
            {isUsing && tool ? `: ${tool}` : null}
            {showAnimatedEllipsis && variant === "default" ? <AnimatedEllipsis /> : null}
          </>
        )}
      </span>
    </div>
  )
} 