/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Terminal, 
  Layers, 
  Globe, 
  Check, 
  ArrowRight,
  Database,
  CloudLightning,
  GitBranch,
  Slack,
  MessageSquare,
  Network
} from "lucide-react";

export default function FeaturesPage() {
  const [selectedSpec, setSelectedSpec] = useState<"routing" | "compliance" | "swarm">("routing");

  // Integration lists
  const INTEGRATIONS = [
    { name: "GitHub Core Link", type: "vcs", desc: "Automate code reviews & PR reviews.", icon: GitBranch, active: true },
    { name: "Slack Swarm Alerts", type: "chat", desc: "Push notification feeds on high latency.", icon: Slack, active: true },
    { name: "PostgreSQL Ledger Proxy", type: "db", desc: "Secure direct tunnel querying.", icon: Database, active: true },
    { name: "Global Edge Clusters", type: "cdn", desc: "Deploy endpoints closer to model cores.", icon: Globe, active: true },
    { name: "gRPC High Bandwidth", type: "network", desc: "Sub-2ms internal telemetry transit.", icon: Network, active: true },
  ];

  return (
    <div className="bg-oceanic-noir text-arctic-powder min-h-screen py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,#114C5A_0%,transparent_60%)] opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center md:text-left mb-16 border-b border-mystic-mint/10 pb-12">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
            ARCHITECTURAL SPECIFICATIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-white tracking-tight mb-4">
            Under the Hood of NeuralOS
          </h1>
          <p className="text-mystic-mint/60 max-w-2xl text-base font-sans">
            Explore our decentralized network topology, cryptographic transaction logs, and low-latency proxy mechanisms optimized for agent orchestration.
          </p>
        </div>

        {/* 1. INTERACTIVE ARCHITECTURE BENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
          {/* Spec selection list */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {[
              { id: "routing", label: "Neural Model Router", desc: "Dynamic latency-based LLM proxying", icon: Cpu },
              { id: "compliance", label: "Isolated Guardrail Shield", desc: "Real-time sanitization and audit trails", icon: ShieldCheck },
              { id: "swarm", label: "Multi-Agent Coordinator", desc: "Decentralized task delegation grids", icon: Layers }
            ].map((spec) => {
              const Icon = spec.icon;
              return (
                <button
                  key={spec.id}
                  onClick={() => setSelectedSpec(spec.id as any)}
                  className={`p-5 rounded-2xl text-left border cursor-pointer transition-all ${
                    selectedSpec === spec.id
                      ? "bg-nocturnal-expedition border-forsythia text-white"
                      : "bg-nocturnal-expedition/20 border-mystic-mint/10 text-mystic-mint/70 hover:border-mystic-mint/20"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className={`w-5 h-5 ${selectedSpec === spec.id ? "text-forsythia" : "text-mystic-mint/60"}`} />
                    <span className="font-mono text-xs font-bold uppercase tracking-wider">{spec.label}</span>
                  </div>
                  <p className="text-xs text-mystic-mint/50 font-sans">{spec.desc}</p>
                </button>
              );
            })}
          </div>

          {/* Visualizer output */}
          <div className="lg:col-span-8 bg-nocturnal-expedition/30 border border-mystic-mint/10 p-8 rounded-3xl flex flex-col justify-between min-h-[380px]">
            <div>
              <span className="font-mono text-[9px] text-forsythia uppercase tracking-widest block mb-1">
                SYSTEM_VISUAL_LAB
              </span>
              <h3 className="text-xl font-sans font-bold text-white mb-4">
                {selectedSpec === "routing" && "Sub-10ms Route Dispatch Path"}
                {selectedSpec === "compliance" && "Zero-Trust Packet Filtering Topology"}
                {selectedSpec === "swarm" && "Sub-Task Delegation Mesh Hierarchy"}
              </h3>
            </div>

            {/* Simulated Live Architectural Diagram */}
            <div className="my-8 flex-1 bg-oceanic-noir border border-mystic-mint/10 rounded-2xl p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#114C5A_1px,transparent_1px),linear-gradient(to_bottom,#114C5A_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />
              
              {selectedSpec === "routing" && (
                <div className="w-full max-w-md flex items-center justify-between relative z-10">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center font-mono text-xs text-forsythia">API</div>
                    <span className="text-[9px] font-mono mt-1 text-mystic-mint/50">ENTRY</span>
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-forsythia to-deep-saffron relative mx-2">
                    <div className="absolute -top-1 w-2.5 h-2.5 bg-forsythia rounded-full animate-ping left-1/2" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-nocturnal-expedition border-2 border-forsythia flex items-center justify-center font-mono text-xs text-white">PROXY</div>
                    <span className="text-[9px] font-mono mt-1 text-forsythia">NEURAL_OS</span>
                  </div>
                  <div className="flex-1 h-[2px] bg-gradient-to-r from-deep-saffron to-mystic-mint relative mx-2">
                    <div className="absolute -top-1 w-2.5 h-2.5 bg-deep-saffron rounded-full animate-ping left-1/3" />
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-lg bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center font-mono text-xs text-mystic-mint">LLM</div>
                    <span className="text-[9px] font-mono mt-1 text-mystic-mint/50">CORE</span>
                  </div>
                </div>
              )}

              {selectedSpec === "compliance" && (
                <div className="w-full max-w-sm flex flex-col gap-4 relative z-10">
                  <div className="p-3 bg-nocturnal-expedition/40 border border-deep-saffron/30 rounded-xl flex items-center justify-between text-xs font-mono text-deep-saffron">
                    <span>1. PROMPT_SCAN: INJECTION CHECK</span>
                    <span className="bg-deep-saffron/10 px-1.5 py-0.5 rounded text-[10px]">SAFE</span>
                  </div>
                  <div className="p-3 bg-nocturnal-expedition/40 border border-forsythia/30 rounded-xl flex items-center justify-between text-xs font-mono text-forsythia">
                    <span>2. CREDENTIALS_GUARD: API EXCLUSIONS</span>
                    <span className="bg-forsythia/10 px-1.5 py-0.5 rounded text-[10px]">CLEAR</span>
                  </div>
                  <div className="p-3 bg-nocturnal-expedition/40 border border-mystic-mint/30 rounded-xl flex items-center justify-between text-xs font-mono text-mystic-mint">
                    <span>3. AUDIT_LEDGER_WRITE: SHA-256 LOG</span>
                    <span className="bg-mystic-mint/10 px-1.5 py-0.5 rounded text-[10px]">SUCCESS</span>
                  </div>
                </div>
              )}

              {selectedSpec === "swarm" && (
                <div className="w-full flex flex-col items-center gap-6 relative z-10">
                  <div className="w-24 p-2 bg-nocturnal-expedition border border-forsythia rounded-lg text-center font-mono text-[10px] text-white">
                    LEADER_SWARM
                  </div>
                  <div className="flex justify-between w-full max-w-xs border-t border-mystic-mint/20 pt-4 relative">
                    <div className="p-2 bg-nocturnal-expedition/50 border border-mystic-mint/10 rounded-lg text-center font-mono text-[9px] text-mystic-mint">
                      AGENT_CODER
                    </div>
                    <div className="p-2 bg-nocturnal-expedition/50 border border-mystic-mint/10 rounded-lg text-center font-mono text-[9px] text-mystic-mint">
                      AGENT_RESEARCH
                    </div>
                    <div className="p-2 bg-nocturnal-expedition/50 border border-mystic-mint/10 rounded-lg text-center font-mono text-[9px] text-mystic-mint">
                      AGENT_AUDITOR
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="text-xs text-mystic-mint/60 leading-relaxed font-sans border-t border-mystic-mint/10 pt-4">
              {selectedSpec === "routing" && "Through micro-second ping checking, the dynamic scheduler directs the packet only to the highest-performing available instance."}
              {selectedSpec === "compliance" && "Zero-trust shield verifies payload properties in-flight before hitting downstream model hosts to prevent private key extraction."}
              {selectedSpec === "swarm" && "Coordinates specialized agents seamlessly over reliable sub-millisecond gRPC communication tunnels."}
            </div>
          </div>
        </div>

        {/* 2. DYNAMIC WORKFLOW NODES & LIVE PERFORMANCE METRICS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <div className="bg-nocturnal-expedition/20 border border-mystic-mint/10 p-8 rounded-3xl">
            <span className="font-mono text-xs text-forsythia font-bold block mb-2">TELEMETRY STATS</span>
            <h3 className="text-2xl font-sans font-bold text-white mb-6">Real-Time Transit Performance</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-oceanic-noir border border-mystic-mint/10 rounded-xl">
                <span className="text-[10px] font-mono text-mystic-mint/50 block mb-1">AVERAGE DTT</span>
                <span className="text-2xl font-mono text-white font-bold">1.4ms</span>
                <span className="text-[10px] font-mono text-emerald-400 block mt-1">▲ Nominal</span>
              </div>
              <div className="p-4 bg-oceanic-noir border border-mystic-mint/10 rounded-xl">
                <span className="text-[10px] font-mono text-mystic-mint/50 block mb-1">PACKET LOSS RATE</span>
                <span className="text-2xl font-mono text-forsythia font-bold">0.00%</span>
                <span className="text-[10px] font-mono text-emerald-400 block mt-1">✓ Stable</span>
              </div>
              <div className="p-4 bg-oceanic-noir border border-mystic-mint/10 rounded-xl col-span-2">
                <span className="text-[10px] font-mono text-mystic-mint/50 block mb-1">API INGESTION SPEED</span>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex-1 bg-nocturnal-expedition h-1.5 rounded-full overflow-hidden">
                    <div className="bg-forsythia h-full rounded-full w-[94%]" />
                  </div>
                  <span className="text-xs font-mono text-white">4.8k req/sec</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-nocturnal-expedition/20 border border-mystic-mint/10 p-8 rounded-3xl flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs text-forsythia font-bold block mb-2">GLOBAL DISTRIBUTED SITES</span>
              <h3 className="text-2xl font-sans font-bold text-white mb-4">Multi-Region Redundancy</h3>
              <p className="text-xs text-mystic-mint/60 leading-relaxed font-sans mb-6">
                Direct gRPC communication over 42 distributed edge data clusters eliminates single point of failure and bypasses global DNS downtime perfectly.
              </p>
            </div>
            <div className="p-4 bg-oceanic-noir border border-mystic-mint/15 rounded-xl">
              <span className="text-[10px] font-mono text-mystic-mint/50 block mb-2">NEURAL_OS ROOT NODE HEALTH</span>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs font-mono text-white">
                  <span>EU-West (Frankfurt)</span>
                  <span className="text-emerald-400">99.99%</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-white">
                  <span>US-East (Virginia)</span>
                  <span className="text-emerald-400">100.00%</span>
                </div>
                <div className="flex justify-between items-center text-xs font-mono text-white">
                  <span>AP-South (Mumbai)</span>
                  <span className="text-emerald-400">99.97%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3. INTEGRATIONS */}
        <div className="bg-nocturnal-expedition/40 border border-mystic-mint/10 rounded-3xl p-8 text-center">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
            COMPATIBILITY MESH
          </span>
          <h2 className="text-2xl md:text-3xl font-sans font-bold text-white mb-4">
            Connect NeuralOS with Your Native Stack
          </h2>
          <p className="text-xs text-mystic-mint/60 max-w-xl mx-auto font-sans mb-12">
            No proprietary libraries needed. NeuralOS supports native TCP sockets, gRPC stream piping, and HTTPS webhooks to bind your tools flawlessly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {INTEGRATIONS.map((integ, idx) => (
              <div key={idx} className="bg-oceanic-noir border border-mystic-mint/5 p-4 rounded-2xl flex flex-col items-center text-center">
                <div className="p-3 bg-nocturnal-expedition/50 rounded-xl text-forsythia mb-3">
                  <integ.icon className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-mono font-bold text-white mb-1">{integ.name}</h4>
                <p className="text-[10px] text-mystic-mint/50 font-sans">{integ.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
