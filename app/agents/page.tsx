"use client"
// Agents page: Analyze job applicants service demo

import { AppSidebar } from "../../components/app-sidebar"
import { SiteHeader } from "../../components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import React, { useState, useEffect, useRef } from "react"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Plus, Upload, X, Download } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Command, CommandInput, CommandList, CommandItem, CommandGroup } from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { ScrollArea } from "@/components/ui/scroll-area"
import { AgentStatusBanner } from "@/components/ui/agent-status-banner"

// Mock data
const mockJobDescriptions = [
  { id: 1, name: "Frontend Developer", content: "We are looking for a skilled frontend developer..." },
  { id: 2, name: "Backend Engineer", content: "Seeking a backend engineer with experience in..." },
]
const mockResumes = [
  { id: 1, name: "Alice Johnson.pdf" },
  { id: 2, name: "Bob Smith.pdf" },
  { id: 3, name: "Charlie Lee.pdf" },
]

function MultiSelectCombobox({ options, selected, onChange, placeholder }: {
  options: { id: number, name: string }[]
  selected: number[]
  onChange: (ids: number[]) => void
  placeholder?: string
}) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const dropdownRef = React.useRef<HTMLDivElement>(null)
  const filtered = options.filter(opt =>
    opt.name.toLowerCase().includes(search.toLowerCase()) && !selected.includes(opt.id)
  )

  // Close on click outside or Escape
  React.useEffect(() => {
    if (!open) return
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("mousedown", handleClick)
    document.addEventListener("keydown", handleKey)
    return () => {
      document.removeEventListener("mousedown", handleClick)
      document.removeEventListener("keydown", handleKey)
    }
  }, [open])

  return (
    <div>
      <div className="flex flex-wrap gap-1 mb-1">
        {selected.map(id => {
          const opt = options.find(o => o.id === id)
          if (!opt) return null
          return (
            <span key={id} className="inline-flex items-center rounded bg-muted px-2 py-0.5 text-xs">
              {opt.name}
              <button
                type="button"
                className="ml-1 text-muted-foreground hover:text-destructive"
                onClick={() => onChange(selected.filter(sid => sid !== id))}
                aria-label={`Remove ${opt.name}`}
              >
                <X className="w-4 h-4" />
              </button>
            </span>
          )
        })}
      </div>
      <div className="relative">
        <Button
          type="button"
          variant="outline"
          className="w-full h-8 justify-start px-3 font-normal"
          onClick={() => setOpen(o => !o)}
          disabled={selected.length === options.length}
        >
          {placeholder}
        </Button>
        {open && selected.length < options.length && (
          <div ref={dropdownRef} className="absolute z-10 mt-1 w-full bg-popover border rounded shadow">
            <Command>
              <CommandInput
                placeholder="Search resumes..."
                value={search}
                onValueChange={setSearch}
                autoFocus
              />
              <CommandList>
                <CommandGroup>
                  {filtered.length === 0 && (
                    <CommandItem disabled>No results</CommandItem>
                  )}
                  {filtered.map(opt => (
                    <CommandItem
                      key={opt.id}
                      onSelect={() => {
                        onChange([...selected, opt.id])
                        setSearch("")
                        if (selected.length + 1 === options.length) setOpen(false)
                      }}
                    >
                      {opt.name}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </div>
        )}
      </div>
    </div>
  )
}

const ServiceForm = React.forwardRef<HTMLFormElement, { onRun: (params: any) => void; loading: boolean; canRunRef?: (canRun: boolean) => void }>(
  function ServiceForm({ onRun, loading, canRunRef }, ref) {
    const [jobDescId, setJobDescId] = useState<string | null>(null)
    const [parameter, setParameter] = useState("")
    const [flag, setFlag] = useState(false)
    const [group, setGroup] = useState(["", "", ""])
    const [resumeIds, setResumeIds] = useState<number[]>([])
    // TODO: Add upload handling if needed

    const canRun = jobDescId && resumeIds.length > 0 && !loading && parameter.trim().length > 0
    useEffect(() => {
      if (canRunRef) canRunRef(!!canRun)
    }, [canRun, canRunRef])

    return (
      <form
        id="service-form"
        className="space-y-6 flex flex-col h-full"
        onSubmit={e => {
          e.preventDefault()
          if (canRun) onRun({ jobDescId, parameter, flag, group, resumeIds })
        }}
        ref={ref}
      >
        <div className="space-y-6 flex-1">
          <div className="flex flex-col gap-2">
            <Label htmlFor="job-desc-select">Job Description</Label>
            <div className="flex items-center gap-1">
              <Select value={jobDescId ?? ''} onValueChange={v => setJobDescId(v || null)}>
                <SelectTrigger id="job-desc-select" className="h-8">
                  <SelectValue placeholder="Select a job description…" />
                </SelectTrigger>
                <SelectContent>
                  {mockJobDescriptions.map(jd => (
                    <SelectItem key={jd.id} value={String(jd.id)}>{jd.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button type="button" variant="outline" className="h-8 w-8" aria-label="Upload job description file">
                <Upload />
              </Button>
            </div>
            <span className="text-xs text-muted-foreground">A job description to be used to for scoring of new applicants</span>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="parameter-input">Input</Label>
            <Input
              id="parameter-input"
              value={parameter}
              onChange={e => setParameter(e.target.value)}
              placeholder="Enter text..."
              className="h-8"
            />
          </div>
          <div className="flex items-center gap-2">
            <Label htmlFor="flag-switch">Boolean</Label>
            <Switch id="flag-switch" checked={flag} onCheckedChange={setFlag} />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label>Group Fields</Label>
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-8"
                aria-label="Add item"
                onClick={() => setGroup(g => [...g, ""])}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {group.map((val, idx) => (
              <div key={idx} className="flex items-center gap-1">
                <Input
                  value={val}
                  onChange={e => {
                    const newGroup = [...group]
                    newGroup[idx] = e.target.value
                    setGroup(newGroup)
                  }}
                  placeholder={`Item ${idx + 1}`}
                  className="h-8"
                />
                <Button
                  type="button"
                  variant="outline"
                  className="h-8 w-8"
                  aria-label="Remove item"
                  onClick={() => setGroup(g => g.filter((_, i) => i !== idx))}
                  disabled={group.length === 1}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Label>Resumes</Label>
              <span className="text-xs text-muted-foreground">3 max</span>
            </div>
            <MultiSelectCombobox
              options={mockResumes}
              selected={resumeIds}
              onChange={setResumeIds}
              placeholder="Search resumes..."
            />
          </div>
        </div>
      </form>
    )
  }
)
ServiceForm.displayName = "ServiceForm"

function AgentOutputPanel({ loading, result, agentStatus, statusMessage }: { loading: boolean; result: any; agentStatus: string; statusMessage: string }) {
  // Use AgentStatusBanner for consistent status display
  let statusBanner = null
  if (agentStatus === "planning") {
    statusBanner = <AgentStatusBanner status="planning" message={statusMessage || "Agent is planning steps"} variant="shimmer" />
  } else if (agentStatus === "running") {
    statusBanner = <AgentStatusBanner status="running" message={statusMessage || "Agent is running"} variant="shimmer" />
  } else if (agentStatus === "done" && result) {
    statusBanner = <AgentStatusBanner status="done" message="Agent analysis complete" variant="shimmer" />
  }
  const showBlankState = !statusBanner && !result && !loading
  return (
    <div className="flex flex-col h-full w-full p-8">
      <div className="flex-1 flex flex-col">
        {statusBanner && (
          <div className="mb-4">{statusBanner}</div>
        )}
        {showBlankState ? (
          <div className="flex-1 flex items-center justify-center w-full">
            {/* Vertically and horizontally center the blank state */}
            <span className="text-sm text-center text-muted-foreground">Agent result and markdown output will appear here.</span>
          </div>
        ) : result ? (
          <div className="space-y-8 pb-8">
            <div>
              <div className="font-semibold mb-2">Markdown Output</div>
              <MarkdownRenderer content={result.markdown} />
            </div>
            <div>
              <div className="font-semibold mb-2">Sample Text Output</div>
              <div className="prose prose-sm max-w-none">
                {result.sampleText}
              </div>
            </div>
            <div>
              <div className="font-semibold mb-2">Sample Code Block</div>
              <pre>
                <code>{`function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("World"));`}</code>
              </pre>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

// Simple markdown renderer (for demo)
function MarkdownRenderer({ content }: { content: string }) {
  // For demo, just render as preformatted text. Replace with a real markdown renderer if needed.
  return <pre className="whitespace-pre-wrap font-sans text-sm">{content}</pre>
}

export default function AgentsPage() {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<any>(null)
  const [canRun, setCanRun] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const [agentStatus, setAgentStatus] = useState<'idle' | 'planning' | 'running' | 'done'>("idle")
  const [statusMessage, setStatusMessage] = useState<string>("")

  function handleRunButtonClick() {
    if (formRef.current && canRun) {
      formRef.current.requestSubmit()
    }
  }

  function handleRun(params: any) {
    setLoading(true)
    setResult(null)
    setAgentStatus("planning")
    setStatusMessage("Agent is planning steps")
    // Simulate planning step
    setTimeout(() => {
      setAgentStatus("running")
      setStatusMessage("Agent is analyzing resumes and job description")
      // Simulate running step
      setTimeout(() => {
        setLoading(false)
        setAgentStatus("done")
        setStatusMessage("")
        // Build a simulated markdown result using the form values
        const jobDesc = mockJobDescriptions.find(jd => String(jd.id) === params.jobDescId)?.name || "(No job description)"
        const resumes = mockResumes.filter(r => params.resumeIds.includes(r.id)).map(r => r.name)
        const groupItems = (params.group || []).filter((g: string) => g.trim().length > 0)
        const flagText = params.flag ? "Yes" : "No"
        setResult({
          markdown:
            `# Job Application Analysis\n\n` +
            `## Job Description\n${jobDesc}\n\n` +
            `### Input\n${params.parameter}\n\n` +
            `#### Boolean\n${flagText}\n\n` +
            `### Unordered List\n- First item\n- Second item\n- Third item\n\n` +
            `### Numbered List\n1. First step\n2. Second step\n3. Third step\n\n` +
            (groupItems.length > 0 ? `### Group Fields\n- ${groupItems.join("\n- ")}\n\n` : "") +
            `### Resumes\n` +
            (resumes.length > 0 ? `- ${resumes.join("\n- ")}` : "No resumes selected.") +
            `\n\n---\n\n*Generated by Agent Service*`,
          sampleText: (
            <>
              <h1>Heading 1</h1>
              <p>This is a sample paragraph after Heading 1. It demonstrates spacing and typography for headings and paragraphs.</p>
              <h2>Heading 2</h2>
              <p>This is a sample paragraph after Heading 2. It demonstrates spacing and typography for headings and paragraphs.</p>
              <h3>Heading 3</h3>
              <p>This is a sample paragraph after Heading 3. It demonstrates spacing and typography for headings and paragraphs.</p>
              <h4>Heading 4</h4>
              <p>This is a sample paragraph after Heading 4. It demonstrates spacing and typography for headings and paragraphs.</p>
              <p>This is a sample paragraph. It demonstrates how normal text will appear in the agent output.</p>
              <p>Another paragraph follows here, to show spacing between blocks.</p>
              <ul>
                <li>First unordered item</li>
                <li>Second unordered item</li>
                <li>Third unordered item</li>
              </ul>
              <ol>
                <li>First numbered item</li>
                <li>Second numbered item</li>
                <li>Third numbered item</li>
              </ol>
              <h3>Sample Hierarchy (4 levels deep)</h3>
              <ul>
                <li>Level 1 - Item A
                  <ul>
                    <li>Level 2 - Item A
                      <ul>
                        <li>Level 3 - Item A
                          <ul>
                            <li>Level 4 - Item A</li>
                            <li>Level 4 - Item B</li>
                          </ul>
                        </li>
                        <li>Level 3 - Item B</li>
                      </ul>
                    </li>
                    <li>Level 2 - Item B</li>
                  </ul>
                </li>
                <li>Level 1 - Item B</li>
              </ul>
            </>
          ),
        })
      }, 1800)
    }, 1400)
  }

  function handleDownload() {
    if (!result) return
    const blob = new Blob([result.markdown], { type: 'text/markdown' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'agent-result.md'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="[--header-height:calc(theme(spacing.14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col">
              {/* Page header */}
              <div className="flex items-start justify-between border-b bg-background p-6">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-semibold tracking-tight">Agents</h1>
                  <p className="text-muted-foreground">Run agent services such as analyzing job applicants</p>
                </div>
              </div>

              {/* Main content: Service/Agent UI */}
              <div className="p-6">
                {/* Section header for the service */}
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-medium tracking-tight">Analyze Job Applicants</h2>
                  <div className="flex gap-2">
                    <Badge variant="outline">v1</Badge>
                    <Badge variant="secondary">draft</Badge>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-2 h-[calc(100vh-theme(spacing.14)-theme(spacing.14)-theme(spacing.12))] min-h-0">
                  {/* Left: Service parameters panel (1/3) */}
                  <div className="md:w-1/3 w-full bg-card border rounded-lg shadow-sm flex flex-col h-full min-h-0">
                    <div className="flex items-center justify-between border-b p-2">
                      <div className="font-medium text-base pl-2">Parameters</div>
                      <Button
                        type="button"
                        size="xs"
                        onClick={handleRunButtonClick}
                        disabled={!canRun}
                        className="ml-auto"
                      >
                        {loading ? 'Running…' : 'Run'}
                      </Button>
                    </div>
                    <div className="p-4 flex-1 min-h-0 overflow-auto">
                      <ScrollArea className="flex-1 min-h-0">
                        <ServiceForm onRun={handleRun} loading={loading} canRunRef={setCanRun} ref={formRef} />
                      </ScrollArea>
                    </div>
                  </div>
                  {/* Right: Agent output panel (2/3) */}
                  <div className="md:w-2/3 w-full bg-card border rounded-lg shadow-sm flex flex-col h-full min-h-0">
                    <div className="flex items-center justify-between border-b p-2">
                      <div className="font-medium text-base pl-2">Result</div>
                      <Button
                        onClick={handleDownload}
                        variant="outline"
                        size="xs"
                        disabled={!result}
                        className="ml-auto"
                        aria-label="Download result"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex-1 min-h-0 overflow-auto">
                      <AgentOutputPanel loading={loading} result={result} agentStatus={agentStatus} statusMessage={statusMessage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
} 