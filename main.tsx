/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Brain, Users, Terminal, Code, ShieldCheck, ChevronDown, Cpu, Zap, Activity } from "lucide-react";

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  visualType: "router" | "swarm" | "terminal" | "code" | "metrics";
}

const FEATURES: FeatureItem[] = [
  {
    title: "Neural LLM Router",
    subtitle: "Adaptive multi-model latency optimization",
    description: "Intelligently routes each incoming payload to the optimal LLM (Gemini, Llama, GPT) based on real-time token cost, response latency, and task complexity.",
    icon: Brain,
    tag: "Orchestration",
    visualType: "router"
  },
  {
    title: "Autonomous Swarms",
    subtitle: "Self-coordinating agent meshes",
    description: "Deploy multiple specialist agents that communicate asynchronously over an encrypted mesh networks to solve complex, multi-layered enterprise objectives.",
    icon: Users,
    tag: "Execution",
    visualType: "swarm"
  },
  {
    title: "Live Execution Ledger",
    subtitle: "Real-time cryptographically secure tracing",
    description: "A continuous stream of multi-agent operations, showing raw terminal trace logs, cost tracking, and microsecond system latency measurements.",
    icon: Terminal,
    tag: "Telemetry",
    visualType: "terminal"
  },
  {
    title: "Instant Edge Integration",
    subtitle: "Ultra-low latency globally distributed API",
    description: "Query and execute multi-agent workflows worldwide through a single unified endpoint with built-in sub-10ms localized latency caching.",
    icon: Code,
    tag: "Integration",
    visualType: "code"
  },
  {
    title: "Isolated Guardrail Shield",
    subtitle: "Zero-trust model compliance",
    description: "Deep content interceptors filtering prompt injections, credential leaks, and toxic content in real-time before payloads hit outer networks.",
    icon: ShieldCheck,
    tag: "Security",
    visualType: "metrics"
  }
];

export default function BentoAccordion() {
  // Shared state: index of active bento node / accordion panel
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      // React state is preserved perfectly on window resize
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="bento-accordion-container" className="w-full">
      {/* Title & Section Header */}
      <div className="mb-12 text-center md:text-left">
        <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
          Autonomous Capability Core
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
          Engineered for Deep Autonomy
        </h2>
        <p className="text-mystic-mint/60 max-w-2xl text-base font-sans">
          Our distributed AI matrix replaces conventional pipelines with self-healing routing, secure meshes, and nanosecond ledger tracing.
        </p>
      </div>

      {/* DESKTOP BENTO GRID (hidden on mobile) */}
      <div className="hidden md:grid grid-cols-12 gap-6 min-h-[520px]">
        {/* Left Interactive Selection List: takes 5 cols */}
        <div className="col-span-5 flex flex-col justify-between gap-3">
          {FEATURES.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeIndex === idx;
            return (
              <button
                key={idx}
                id={`bento-btn-${idx}`}
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`relative flex items-start gap-4 p-5 rounded-xl text-left transition-[transform,background-color,border-color,box-shadow] duration-150 ease-out border focus:outline-none cursor-pointer gpu-accelerated ${
                  isActive
                    ? "bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/5 text-white"
                    : "bg-nocturnal-expedition/20 border-mystic-mint/5 text-mystic-mint/60 hover:border-mystic-mint/20 hover:bg-nocturnal-expedition/35"
                }`}
                style={{
                  transform: isActive ? "translateX(4px)" : "translateX(0px)"
                }}
              >
                {/* Active Indicator bar */}
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-xl transition-all duration-300 ${
                    isActive ? "bg-forsythia" : "bg-transparent"
                  }`}
                />
                
                <div className={`p-2 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-forsythia/15 text-forsythia" : "bg-oceanic-noir/55 text-mystic-mint/40"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-mystic-mint/40 uppercase tracking-wider font-bold">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className={`text-base font-sans font-bold transition-colors duration-200 ${
                    isActive ? "text-white" : "text-mystic-mint/80"
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-xs text-mystic-mint/50 font-sans mt-1 line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Active Preview Stage: takes 7 cols */}
        <div className="col-span-7 bg-nocturnal-expedition/30 border border-mystic-mint/10 rounded-2xl p-8 flex flex-col justify-between overflow-hidden relative group shadow-xl">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-forsythia/5 rounded-full filter blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            {/* Tag and Title */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-forsythia bg-forsythia/10 px-2.5 py-0.5 rounded border border-forsythia/25">
                {FEATURES[activeIndex].tag}
              </span>
            </div>
            
            <h3 className="text-2xl font-sans font-bold text-white tracking-tight mb-2">
              {FEATURES[activeIndex].title}
            </h3>
            <p className="text-sm text-mystic-mint/70 font-sans leading-relaxed max-w-xl">
              {FEATURES[activeIndex].description}
            </p>
          </div>

          {/* Dynamic Visual Stage Area based on activeIndex */}
          <div className="mt-8 flex-1 min-h-[220px] bg-oceanic-noir border border-mystic-mint/5 rounded-xl overflow-hidden relative flex items-center justify-center p-6">
            
            {/* Visual 1: Neural Router */}
            {activeIndex === 0 && (
              <div className="w-full h-full flex flex-col items-center justify-center relative">
                <div className="absolute inset-0 bg-[radial-gradient(#114C5A_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
                <div className="flex items-center gap-8 relative z-10 w-full max-w-md justify-between">
                  {/* Source Payload */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-nocturnal-expedition border border-mystic-mint/15 flex items-center justify-center text-white font-mono text-sm shadow-sm">
                      <Cpu className="w-6 h-6 text-forsythia animate-pulse" />
                    </div>
                    <span className="text-[10px] font-mono text-mystic-mint/50 mt-2">PAYLOAD</span>
                  </div>

                  {/* Route Paths */}
                  <div className="flex-1 relative h-16 flex items-center justify-center">
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 0 32 L 180 32" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />
                      <path d="M 0 32 Q 90 0 180 32" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />
                      <path d="M 0 32 Q 90 64 180 32" stroke="rgba(217,232,226,0.1)" strokeWidth="2" fill="none" />
                      
                      {/* Laser beam */}
                      <path d="M 0 32 Q 90 0 180 32" stroke="#FFC801" strokeWidth="2" fill="none" strokeDasharray="30, 150" strokeDashoffset="0">
                        <animate attributeName="strokeDashoffset" values="180;0" dur="2s" repeatCount="indefinite" />
                      </path>
                    </svg>
                    <span className="text-[9px] font-mono bg-forsythia/10 text-forsythia px-2 py-0.5 rounded border border-forsythia/25 z-10 shadow-sm font-bold">
                      Cost: -42%
                    </span>
                  </div>

                  {/* Target Models */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 bg-nocturnal-expedition border border-forsythia/40 px-3 py-1 rounded-lg shadow-sm">
                      <div className="w-1.5 h-1.5 bg-forsythia rounded-full animate-ping" />
                      <span className="text-xs font-mono text-white font-bold">Gemini Core</span>
                    </div>
                    <div className="flex items-center gap-2 bg-nocturnal-expedition/40 border border-mystic-mint/10 px-3 py-1 rounded-lg opacity-50 shadow-sm">
                      <div className="w-1.5 h-1.5 bg-mystic-mint/30 rounded-full" />
                      <span className="text-xs font-mono text-mystic-mint/50">Llama Node</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 2: Swarms */}
            {activeIndex === 1 && (
              <div className="w-full h-full flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                  <line x1="50%" y1="70%" x2="80%" y2="40%" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                  <line x1="80%" y1="40%" x2="20%" y2="30%" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                  <line x1="50%" y1="15%" x2="20%" y2="30%" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                  <line x1="50%" y1="15%" x2="80%" y2="40%" stroke="rgba(255,200,1,0.15)" strokeWidth="1.5" />
                </svg>

                {/* Nodes */}
                <div className="absolute top-[15%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-nocturnal-expedition border border-forsythia flex items-center justify-center text-forsythia text-xs font-mono font-bold shadow-md animate-pulse">
                    S1
                  </div>
                  <span className="text-[9px] font-mono text-white mt-1 font-bold">Supervisor</span>
                </div>

                <div className="absolute top-[30%] left-[20%] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-mystic-mint/15 flex items-center justify-center text-white text-xs font-mono shadow-sm">
                    A1
                  </div>
                  <span className="text-[9px] font-mono text-mystic-mint/60 mt-1">Research Swarm</span>
                </div>

                <div className="absolute top-[40%] left-[80%] flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-mystic-mint/15 flex items-center justify-center text-white text-xs font-mono shadow-sm">
                    A2
                  </div>
                  <span className="text-[9px] font-mono text-mystic-mint/60 mt-1">Coder Swarm</span>
                </div>

                <div className="absolute top-[70%] left-[50%] -translate-x-1/2 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-mystic-mint/15 flex items-center justify-center text-white text-xs font-mono shadow-sm">
                    A3
                  </div>
                  <span className="text-[9px] font-mono text-mystic-mint/60 mt-1">Validating Node</span>
                </div>
              </div>
            )}

            {/* Visual 3: Live Execution Ledger */}
            {activeIndex === 2 && (
              <div className="w-full h-full flex flex-col justify-between font-mono text-xs text-mystic-mint/70 p-2">
                <div className="flex items-center justify-between border-b border-mystic-mint/10 pb-2 mb-2 text-[10px] text-mystic-mint/40 font-bold">
                  <span>SWARM_LEDGER_INTEGRITY</span>
                  <span className="text-forsythia animate-pulse">● LIVE STREAM</span>
                </div>
                <div className="flex-1 flex flex-col gap-1.5 justify-end">
                  <div className="text-[10px] flex items-center gap-2 opacity-60">
                    <span className="text-mystic-mint/30">[03:40:17]</span>
                    <span className="text-forsythia font-bold">INFO</span>
                    <span>Routing trigger: latency_sla &lt; 250ms</span>
                  </div>
                  <div className="text-[10px] flex items-center gap-2 opacity-80">
                    <span className="text-mystic-mint/30">[03:40:18]</span>
                    <span className="text-emerald-400 font-bold">OK</span>
                    <span>Mesh connected S1 &lt;-&gt; A1, A2 via WebSocket-gRPC</span>
                  </div>
                  <div className="text-[10px] flex items-center gap-2">
                    <span className="text-forsythia font-bold">&gt;</span>
                    <span className="text-white font-medium">A2 initialized code analysis of repository block #A48B</span>
                  </div>
                  <div className="text-[10px] flex items-center gap-2 text-forsythia">
                    <span className="text-mystic-mint/30">[03:40:20]</span>
                    <span className="font-bold">TX_SUCCESS</span>
                    <span>Total cost: $0.000124 (2,450 tokens parsed)</span>
                  </div>
                </div>
              </div>
            )}

            {/* Visual 4: Instant Edge Integration */}
            {activeIndex === 3 && (
              <div className="w-full flex flex-col justify-center gap-3 font-mono">
                <div className="bg-nocturnal-expedition/80 border border-mystic-mint/10 rounded-lg p-4 flex flex-col gap-2 relative">
                  <div className="flex items-center justify-between text-[10px] text-mystic-mint/40">
                    <span>bash / global curl terminal</span>
                    <span className="text-xs text-forsythia font-semibold cursor-pointer font-bold">Copy snippet</span>
                  </div>
                  <pre className="text-white text-xs overflow-x-auto whitespace-pre-wrap select-all">
                    <span className="text-forsythia">curl</span> -X POST https://api.neuralos.io/v3/swarm/route \
                    <br />  -H <span className="text-deep-saffron">"Authorization: Bearer nos_live_7x92"</span> \
                    <br />  -d <span className="text-mystic-mint">'&#123;"prompt": "coordinate swarm codebase"&#125;'</span>
                  </pre>
                </div>
                <div className="flex items-center justify-between text-[10px] text-mystic-mint/40 px-1">
                  <span>Response time: <span className="text-forsythia font-bold">8.42ms</span></span>
                  <span>Cache: <span className="text-emerald-400 font-bold">HIT (Vercel Edge Node)</span></span>
                </div>
              </div>
            )}

            {/* Visual 5: Guardrail Isolation */}
            {activeIndex === 4 && (
              <div className="w-full flex flex-col gap-4">
                {/* Metric 1 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-mystic-mint/60 font-medium">Prompt Injection Mitigation</span>
                    <span className="text-forsythia font-bold">99.99% Secure</span>
                  </div>
                  <div className="w-full h-1.5 bg-nocturnal-expedition rounded-full overflow-hidden">
                    <div className="h-full bg-forsythia rounded-full" style={{ width: "99.99%" }} />
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-mystic-mint/60 font-medium">Cost Threshold Limiter</span>
                    <span className="text-forsythia font-bold">Active Shield</span>
                  </div>
                  <div className="w-full h-1.5 bg-nocturnal-expedition rounded-full overflow-hidden">
                    <div className="h-full bg-forsythia" style={{ width: "85%" }} />
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-mystic-mint/60 font-medium">PII Redaction Engine</span>
                    <span className="text-forsythia font-bold">12ms Overhead</span>
                  </div>
                  <div className="w-full h-1.5 bg-nocturnal-expedition rounded-full overflow-hidden">
                    <div className="h-full bg-forsythia/60" style={{ width: "40%" }} />
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION (hidden on desktop) */}
      <div className="block md:hidden flex flex-col gap-4">
        {FEATURES.map((item, idx) => {
          const Icon = item.icon;
          const isActive = activeIndex === idx;
          return (
            <div
              key={idx}
              id={`accordion-item-${idx}`}
              className={`border rounded-xl overflow-hidden transition-[background-color,border-color,box-shadow] duration-150 ease-out gpu-accelerated ${
                isActive
                  ? "bg-nocturnal-expedition/40 border-forsythia shadow-md"
                  : "bg-nocturnal-expedition/10 border-mystic-mint/5"
              }`}
            >
              {/* Accordion Header Button */}
              <button
                id={`accordion-header-${idx}`}
                onClick={() => setActiveIndex(isActive ? -1 : idx)}
                className="w-full flex items-center justify-between p-4 focus:outline-none text-left cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg transition-colors ${
                    isActive ? "bg-forsythia/20 text-forsythia" : "bg-oceanic-noir text-mystic-mint/40"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-mystic-mint/40 uppercase tracking-widest block mb-0.5">
                      {item.tag}
                    </span>
                    <h3 className="text-sm font-sans font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
                <ChevronDown className={`w-4 h-4 text-mystic-mint/40 transition-transform duration-150 ease-out ${
                  isActive ? "transform rotate-180 text-forsythia" : ""
                }`} />
              </button>

              {/* Accordion Collapsible Panel */}
              <div
                className="transition-[max-height,opacity] duration-150 ease-out overflow-hidden gpu-accelerated"
                style={{
                  maxHeight: isActive ? "340px" : "0px",
                  opacity: isActive ? 1 : 0
                }}
              >
                <div className="px-4 pb-5 border-t border-mystic-mint/10 pt-4">
                  <p className="text-xs text-mystic-mint/70 font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Nested Miniature Visual Area for Mobile Accordion */}
                  <div className="bg-oceanic-noir border border-mystic-mint/5 rounded-lg p-4 flex items-center justify-center min-h-[140px]">
                    {/* Visual 1 */}
                    {idx === 0 && (
                      <div className="w-full flex items-center justify-between max-w-[240px]">
                        <span className="text-[10px] font-mono text-mystic-mint/40">INPUT</span>
                        <div className="flex-1 mx-3 h-[2px] bg-nocturnal-expedition relative">
                          <div className="absolute w-2 h-2 rounded-full bg-forsythia -top-[3px] left-0 animate-ping" />
                        </div>
                        <span className="text-[10px] font-mono text-forsythia bg-forsythia/10 px-1.5 py-0.5 rounded border border-forsythia/25">GEMINI</span>
                      </div>
                    )}
                    {/* Visual 2 */}
                    {idx === 1 && (
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-forsythia flex items-center justify-center text-[10px] text-forsythia font-mono font-bold animate-pulse">S1</div>
                        <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 flex items-center justify-center text-[10px] text-mystic-mint/60 font-mono">A1</div>
                        <div className="w-8 h-8 rounded-full bg-nocturnal-expedition border border-mystic-mint/10 flex items-center justify-center text-[10px] text-mystic-mint/60 font-mono font-bold">A2</div>
                      </div>
                    )}
                    {/* Visual 3 */}
                    {idx === 2 && (
                      <div className="w-full font-mono text-[9px] text-left text-mystic-mint/60">
                        <div className="text-mystic-mint/40">[03:40:17] Routing trigger...</div>
                        <div className="text-forsythia font-bold">[03:40:18] Mesh connected OK...</div>
                        <div className="text-white">&gt; Coder Agent execution started</div>
                      </div>
                    )}
                    {/* Visual 4 */}
                    {idx === 3 && (
                      <div className="w-full text-center">
                        <code className="text-[10px] font-mono text-white bg-nocturnal-expedition/60 px-2 py-1.5 rounded border border-mystic-mint/5 block break-all">
                          curl https://api.neuralos.io/v3/execute
                        </code>
                      </div>
                    )}
                    {/* Visual 5 */}
                    {idx === 4 && (
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex justify-between text-[10px] font-mono">
                          <span className="text-mystic-mint/60">Security Guardrail</span>
                          <span className="text-forsythia font-bold">99.99%</span>
                        </div>
                        <div className="w-full h-1 bg-nocturnal-expedition rounded-full overflow-hidden">
                          <div className="h-full bg-forsythia w-[99%]" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
