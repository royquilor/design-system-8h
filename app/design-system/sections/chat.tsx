"use client"
// ChatSection: Modern AI Chat UI static demo
// This section demonstrates a simple, static chat interface with user and AI messages.

import { cn } from "@/lib/utils"
import { Bookmark, Download, Copy, Loader2 } from "lucide-react"
import React, { useRef, useState, useEffect } from "react"
import { AgentStatusBanner } from "@/components/ui/agent-status-banner"

// Message bubble component
function MessageBubble({ sender, content, timestamp, isUser }: {
  sender: string
  content: string
  timestamp: string
  isUser?: boolean
}) {
  return (
    // Avatar hidden for a cleaner, minimal chat UI demo
    <div className={cn("flex gap-2 items-end", isUser ? "justify-end" : "justify-start")}> 
      {/* Avatar removed for minimal design */}
      <div className={cn(
        // For AI messages, remove background and padding for a minimal look
        "max-w-xs rounded-lg text-sm",
        isUser ? "bg-muted text-foreground p-3" : ""
      )}>
        <div>{content}</div>
        <div className={cn(
          "mt-1 text-xs text-muted-foreground flex items-center gap-2",
          isUser ? "justify-end text-right" : "justify-start text-left" // AI message timestamp left, user right
        )}>
          <span>{timestamp}</span>
          {/* For AI messages, show action icon buttons */}
          {!isUser && (
            <span className="flex gap-1 ml-2">
              <button className="p-1 hover:bg-muted rounded" title="Save" aria-label="Save">
                <Bookmark className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-muted rounded" title="Download" aria-label="Download">
                <Download className="w-4 h-4" />
              </button>
              <button className="p-1 hover:bg-muted rounded" title="Copy" aria-label="Copy">
                <Copy className="w-4 h-4" />
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

// Static chat demo component (now interactive)
function ChatDemo() {
  // State for messages and input
  const [messages, setMessages] = useState([
    {
      sender: "User",
      content: "Hello, AI! Can you help me design a chat UI?",
      timestamp: "09:00 AM",
      isUser: true,
    },
    {
      sender: "AI",
      content: "Of course! Here is a simple example of a modern chat interface.",
      timestamp: "09:00 AM",
      isUser: false,
    },
    {
      sender: "User",
      content: "Great, can you show me how to add agentic workflow support?",
      timestamp: "09:01 AM",
      isUser: true,
    },
    {
      sender: "AI",
      content: "Absolutely! Agentic workflows can be modeled by tracking agent state and tool usage.",
      timestamp: "09:01 AM",
      isUser: false,
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [agentState, setAgentState] = useState<null | { state: string; tool?: string }>(null)
  // List of possible tools for demo
  const tools = ["Web Search", "Summarizer", "Code Interpreter", "Image Generator"]

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Handle sending a message
  function handleSend() {
    if (!input.trim()) return
    const now = new Date()
    const timestamp = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    const newMessage = {
      sender: "User",
      content: input,
      timestamp,
      isUser: true,
    }
    setMessages((msgs) => [...msgs, newMessage])
    setInput("")
    // Simulate agent state: thinking + tool usage
    const tool = tools[Math.floor(Math.random() * tools.length)]
    setAgentState({ state: "using", tool })
    // Simulate AI response after a short delay
    setTimeout(() => {
      setAgentState({ state: "thinking" })
      setTimeout(() => {
        setAgentState(null)
        const aiResponse = {
          sender: "AI",
          content: `[AI demo response] This is a simulated reply using ${tool}.`,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          isUser: false,
        }
        setMessages((msgs) => [...msgs, aiResponse])
      }, 900)
    }, 900)
  }

  // Handle textarea auto-resize
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 120)}px`
    }
  }, [input])

  // Handle Enter/Shift+Enter in textarea
  function handleTextareaKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="w-full max-w-xl mx-auto bg-background border rounded-xl p-4 flex flex-col gap-4">
      <div className="font-semibold text-lg mb-2">Chat Example</div>
      <div className="flex flex-col gap-3 min-h-[200px] max-h-80 overflow-y-auto">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      {/* Agent state/tool usage indicator */}
      {agentState && (
        <AgentStatusBanner
          status={agentState.state}
          message={`AI is ${agentState.state}`}
          tool={agentState.tool}
        />
      )}
      {/* Modern textarea input with docked send button */}
      <div className="mt-4 relative flex">
        <textarea
          ref={textareaRef}
          className="flex-1 rounded-lg border px-3 py-2 text-sm bg-muted resize-none pr-20 min-h-[80px] max-h-[120px] focus:outline-none"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleTextareaKeyDown}
          disabled={!!agentState}
          rows={1}
        />
        <button
          className="absolute bottom-2 right-2 rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          onClick={handleSend}
          disabled={!input.trim() || !!agentState}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export function ChatSection() {
  return (
    <div className="space-y-6">
      <div className="rounded-lg border p-6 bg-muted/50">
        <h2 className="text-xl font-semibold mb-2">AI Chat UI Examples</h2>
        <p className="text-muted-foreground mb-4">
          This section showcases a simple, static chat UI demo. You can extend this with interactive features and agentic workflow support.
        </p>
        <ChatDemo />
      </div>
    </div>
  )
}
