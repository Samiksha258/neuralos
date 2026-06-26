/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Cpu, 
  ShieldCheck, 
  Activity, 
  ChevronRight, 
  Play, 
  Sparkles, 
  Globe, 
  ArrowRight, 
  Terminal, 
  Layers, 
  CheckCircle2, 
  Settings, 
  Database,
  CloudLightning,
  Monitor,
  Check
} from "lucide-react";
import BentoAccordion from "./BentoAccordion";
import PricingSection from "./PricingSection";

interface LandingPageProps {
  onNavigate: (page: "landing" | "features" | "pricing" | "dashboard" | "docs" | "about") => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [email, setEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "success" | "loading">("idle");
  const [activeTab, setActiveTab] = useState<"routing" | "swarms" | "ledger">("routing");

  // Workflow Demo State
  const [activeNode, setActiveNode] = useState<number>(0);
  const [nodeProgress, setNodeProgress] = useState(0);

  // Auto-animate live workflow demo
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNode((prev) => {
        const next = (prev + 1) % 4;
        return next;
      });
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setNewsletterStatus("loading");
    setTimeout(() => {
      setNewsletterStatus("success");
      setEmail("");
    }, 1000);
  };

  return (
    <div className="bg-oceanic-noir text-arctic-powder">
      {/* HERO SECTION */}
      <section id="landing-hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden px-6">
        {/* Futuristic Background Lines and Ambient Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#114C5A_0%,transparent_50%)] opacity-40 pointer-events-none" />
        
        {/* Animated Connecting SVG Lines in Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grid-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFC801" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FF9932" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#114C5A" stopOpacity="0.4" />
              </linearGradient>
            </defs>
            <path d="M 0 150 Q 300 350 600 150 T 1200 450" fill="none" stroke="url(#grid-grad)" strokeWidth="1.5" />
            <path d="M 100 600 Q 500 200 900 600" fill="none" stroke="url(#grid-grad)" strokeWidth="1" strokeDasharray="5,5" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-nocturnal-expedition/60 border border-mystic-mint/10 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-forsythia" />
              <span className="font-mono text-[10px] tracking-wider text-mystic-mint font-bold uppercase">
                NeuralOS v3.0 Core Released
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              The AI Operating System <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia via-deep-saffron to-mystic-mint">
                Built for Autonomous Swarms.
              </span>
            </h1>

            <p className="text-mystic-mint/80 font-sans text-base sm:text-lg leading-relaxed max-w-xl mb-8">
              A handcrafted software layer coordinating secure AI agent swarms. Intelligently route complex prompts based on live latency, execution safety, and dynamic API ledger caching.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate("dashboard")}
                className="w-full sm:w-auto py-3.5 px-7 bg-forsythia text-oceanic-noir font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-all shadow-lg hover:shadow-forsythia/10 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" /> Initialize OS Terminal
              </button>
              
              <button
                onClick={() => onNavigate("pricing")}
                className="w-full sm:w-auto py-3.5 px-7 bg-nocturnal-expedition/80 text-white border border-mystic-mint/20 font-mono text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-nocturnal-expedition transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Configure Compute Matrix <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-mystic-mint/10 w-full max-w-lg">
              <div>
                <span className="font-mono text-[9px] text-mystic-mint/60 uppercase tracking-widest block mb-1">LATENCY</span>
                <span className="font-mono text-lg font-bold text-white">8.42ms <span className="text-[10px] text-forsythia">-18%</span></span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-mystic-mint/60 uppercase tracking-widest block mb-1">SWARMS</span>
                <span className="font-mono text-lg font-bold text-white">42,910 <span className="text-[10px] text-forsythia">Active</span></span>
              </div>
              <div>
                <span className="font-mono text-[9px] text-mystic-mint/60 uppercase tracking-widest block mb-1">EFFICIENCY</span>
                <span className="font-mono text-lg font-bold text-forsythia">99.98%</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visuals: Interactive Pulsing Core & Connected Nodes */}
          <div className="lg:col-span-5 flex items-center justify-center relative min-h-[380px]">
            {/* Animated SVG NeuralOS Core */}
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full border border-mystic-mint/10 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-forsythia/20 animate-[spin_10s_linear_infinite_reverse]" />
              
              {/* Core Body */}
              <div className="absolute w-44 h-44 bg-nocturnal-expedition/80 rounded-3xl border border-mystic-mint/30 shadow-2xl flex items-center justify-center backdrop-blur-xl group">
                {/* Embedded dynamic core visual */}
                <svg className="w-24 h-24 text-forsythia" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="12" className="fill-forsythia animate-pulse" />
                  <path d="M 50 12 L 50 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 50 72 L 50 88" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 12 50 L 28 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 72 50 L 88 50" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  
                  {/* Diagonals */}
                  <path d="M 23 23 L 34 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 66 66 L 77 77" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 77 23 L 66 34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 34 66 L 23 77" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>

                {/* Micro Chip status badge */}
                <div className="absolute -bottom-2 bg-forsythia text-oceanic-noir font-mono text-[8px] font-bold px-2 py-0.5 rounded tracking-widest">
                  SYS_CORE_OK
                </div>
              </div>

              {/* Floating Orbiting Node 1 */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 p-2.5 bg-oceanic-noir/90 border border-mystic-mint/20 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_4s_infinite_ease-in-out]">
                <Cpu className="w-4 h-4 text-deep-saffron" />
                <span className="font-mono text-[9px] text-white">Gemini Router</span>
              </div>

              {/* Floating Orbiting Node 2 */}
              <div className="absolute -bottom-4 left-1/4 p-2.5 bg-oceanic-noir/90 border border-mystic-mint/20 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_5s_infinite_ease-in-out]">
                <ShieldCheck className="w-4 h-4 text-forsythia" />
                <span className="font-mono text-[9px] text-white">Shield Active</span>
              </div>

              {/* Floating Orbiting Node 3 */}
              <div className="absolute top-1/3 -right-6 p-2.5 bg-oceanic-noir/90 border border-mystic-mint/20 rounded-xl shadow-lg flex items-center gap-2 animate-[bounce_6s_infinite_ease-in-out]">
                <Activity className="w-4 h-4 text-mystic-mint" />
                <span className="font-mono text-[9px] text-white">gRPC 2ms</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED SOCIAL PROOF */}
      <section id="logos-section" className="w-full py-8 border-y border-mystic-mint/10 bg-nocturnal-expedition/20 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8 opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 px-6">
          <span className="text-xs font-mono tracking-widest text-mystic-mint/60 uppercase font-bold">TRUSTED INFRASTRUCTURE MESH:</span>
          
          <div className="flex items-center gap-2 text-white font-sans font-extrabold text-sm tracking-tight">
            <Globe className="w-4 h-4 text-forsythia" />
            <span>Stripe Matrix</span>
          </div>
          
          <div className="flex items-center gap-2 text-white font-sans font-extrabold text-sm tracking-tight">
            <Layers className="w-4 h-4 text-deep-saffron" />
            <span>Vercel Edge</span>
          </div>

          <div className="flex items-center gap-2 text-white font-sans font-extrabold text-sm tracking-tight">
            <Cpu className="w-4 h-4 text-forsythia" />
            <span>NVIDIA Tensor</span>
          </div>

          <div className="flex items-center gap-2 text-white font-sans font-extrabold text-sm tracking-tight">
            <Play className="w-4 h-4 text-mystic-mint" />
            <span>Scale AI Node</span>
          </div>
        </div>
      </section>

      {/* LIVE WORKFLOW DEMO */}
      <section id="workflow-demo" className="py-24 max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
            Live Stream Execution
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-white tracking-tight mb-4">
            Witness Multi-Agent Orchestration
          </h2>
          <p className="text-mystic-mint/60 max-w-2xl mx-auto text-sm font-sans">
            Our self-healing routing mesh automatically intercepts requests, validates security bounds, routes to model cores, and returns highly accurate structured outputs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-nocturnal-expedition/30 border border-mystic-mint/10 p-8 rounded-3xl backdrop-blur-xl">
          {/* Workflow Steps Details */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {[
              { title: "1. Payload Interception", desc: "Incoming request is captured and sanitized for prompt injection vulnerability.", icon: ShieldCheck, color: "text-deep-saffron" },
              { title: "2. Autonomous Model Routing", desc: "Intelligent selection of the ideal LLM model (Gemini, Llama) based on speed and accuracy demands.", icon: Cpu, color: "text-forsythia" },
              { title: "3. Multi-Agent Synthesis", desc: "Specialist agent swarms execute tasks over gRPC tunnels asynchronously.", icon: Layers, color: "text-mystic-mint" },
              { title: "4. Output Secure Crypt-Ledger", desc: "Response is parsed, cached globally, and written onto the tamper-proof system ledger.", icon: Terminal, color: "text-white" }
            ].map((node, idx) => (
              <div 
                key={idx}
                className={`p-4 rounded-xl border transition-all duration-300 flex gap-4 ${
                  activeNode === idx 
                    ? "bg-nocturnal-expedition border-forsythia shadow-lg shadow-forsythia/5" 
                    : "bg-oceanic-noir/50 border-mystic-mint/5 opacity-60"
                }`}
              >
                <div className={`p-2 rounded-lg bg-oceanic-noir/80 ${node.color}`}>
                  <node.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold text-white mb-1">{node.title}</h3>
                  <p className="text-xs text-mystic-mint/70 font-sans leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Animated Visual Canvas Box */}
          <div className="lg:col-span-7 bg-oceanic-noir border border-mystic-mint/10 rounded-2xl p-6 min-h-[340px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(#114C5A_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-20" />
            
            <div className="flex items-center justify-between border-b border-mystic-mint/10 pb-3 z-10">
              <span className="text-[10px] font-mono text-mystic-mint/60 uppercase font-bold tracking-widest">NEURAL_OS_ORCHESTRATOR_STREAM</span>
              <span className="flex items-center gap-1 text-[9px] font-mono text-forsythia bg-forsythia/10 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 bg-forsythia rounded-full animate-ping" />
                MESH ACTIVE
              </span>
            </div>

            {/* Simulated Live Action Window */}
            <div className="my-6 flex-1 flex flex-col justify-center items-center z-10 relative">
              {activeNode === 0 && (
                <div className="text-center animate-fade-in flex flex-col items-center">
                  <ShieldCheck className="w-12 h-12 text-deep-saffron mb-3 animate-pulse" />
                  <span className="font-mono text-xs text-white uppercase font-bold">Scanning payload integrity...</span>
                  <div className="font-mono text-[10px] text-mystic-mint/50 mt-2 bg-nocturnal-expedition/50 px-3 py-1 rounded">
                    SYS_GUARDRAIL_INTERCEPT: OK (NO_INJECTION_DETECTED)
                  </div>
                </div>
              )}
              {activeNode === 1 && (
                <div className="text-center animate-fade-in flex flex-col items-center">
                  <Cpu className="w-12 h-12 text-forsythia mb-3 animate-spin" style={{ animationDuration: '4s' }} />
                  <span className="font-mono text-xs text-white uppercase font-bold">Resolving dynamic router matrix...</span>
                  <div className="font-mono text-[10px] text-forsythia mt-2 bg-nocturnal-expedition/50 px-3 py-1 rounded">
                    ROUTE SELECTED: GEMINI-2.5-PRO (SLA: 9.2ms)
                  </div>
                </div>
              )}
              {activeNode === 2 && (
                <div className="text-center animate-fade-in flex flex-col items-center">
                  <Layers className="w-12 h-12 text-mystic-mint mb-3 animate-bounce" />
                  <span className="font-mono text-xs text-white uppercase font-bold">Asynchronous swarm coordination...</span>
                  <div className="font-mono text-[10px] text-mystic-mint mt-2 bg-nocturnal-expedition/50 px-3 py-1 rounded">
                    MEMBER_A1 (Research) & Member_A2 (Coder) Synthesis...
                  </div>
                </div>
              )}
              {activeNode === 3 && (
                <div className="text-center animate-fade-in flex flex-col items-center">
                  <Terminal className="w-12 h-12 text-white mb-3 animate-pulse" />
                  <span className="font-mono text-xs text-white uppercase font-bold">Writing transaction ledger...</span>
                  <div className="font-mono text-[10px] text-emerald-400 mt-2 bg-nocturnal-expedition/50 px-3 py-1 rounded">
                    BLOCK_WRITE: #5289C-OS SUCCESSFUL (LATENCY: 12ms)
                  </div>
                </div>
              )}
            </div>

            {/* Stats display */}
            <div className="border-t border-mystic-mint/10 pt-4 grid grid-cols-3 gap-2 text-center z-10 font-mono text-[10px]">
              <div className="bg-nocturnal-expedition/40 p-2 rounded-lg border border-mystic-mint/5">
                <span className="text-mystic-mint/40 uppercase block mb-1">CPU LOAD</span>
                <span className="text-white font-bold">14.2%</span>
              </div>
              <div className="bg-nocturnal-expedition/40 p-2 rounded-lg border border-mystic-mint/5">
                <span className="text-mystic-mint/40 uppercase block mb-1">MEMORY BANDWIDTH</span>
                <span className="text-forsythia font-bold">982 GB/s</span>
              </div>
              <div className="bg-nocturnal-expedition/40 p-2 rounded-lg border border-mystic-mint/5">
                <span className="text-mystic-mint/40 uppercase block mb-1">COST EFFICIENCY</span>
                <span className="text-emerald-400 font-bold">-44.2%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENTO ACCORDION SECTION */}
      <section id="bento-accordion-anchor" className="py-24 bg-nocturnal-expedition/10 border-y border-mystic-mint/5">
        <div className="max-w-6xl mx-auto px-6">
          <BentoAccordion />
        </div>
      </section>

      {/* PRICING INTRO */}
      <section id="pricing-matrix-anchor" className="py-24 max-w-6xl mx-auto px-6">
        <PricingSection />
      </section>

      {/* RECENT CASE STUDY / SOCIAL PROOF */}
      <section className="py-24 bg-nocturnal-expedition/20 border-t border-mystic-mint/10 relative">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
              Case Study Matrix
            </span>
            <h2 className="text-3xl font-sans font-bold text-white tracking-tight mb-4">
              How Vercel Edge Scale AI Swarms by 340% with NeuralOS
            </h2>
            <p className="text-mystic-mint/70 text-sm font-sans mb-6 leading-relaxed">
              We partnered with leading server infrastructure providers to run fully autonomous engineering agent groups. By running their pipelines inside NeuralOS isolated zones, latency dropped below 10ms, while server costs decreased by half.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-forsythia shrink-0" />
                <span className="text-xs text-white font-mono">Zero code structural modifications to existing apps.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-forsythia shrink-0" />
                <span className="text-xs text-white font-mono">Real-time localized compliance checks.</span>
              </div>
              <div className="flex gap-3">
                <Check className="w-5 h-5 text-forsythia shrink-0" />
                <span className="text-xs text-white font-mono">Scale compute bandwidth dynamically across 42 zones.</span>
              </div>
            </div>
          </div>
          
          {/* Visual card for testimonial */}
          <div className="p-8 bg-oceanic-noir border border-mystic-mint/10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            <div className="absolute top-0 right-0 w-44 h-44 bg-forsythia/5 rounded-full filter blur-3xl" />
            <p className="text-base text-white font-sans italic leading-relaxed relative z-10">
              "Deploying NeuralOS changed our entire perspective on AI operations. Instead of babysitting pipeline runs, we now deploy coordinate meshes that resolve issues autonomously. The cost optimization logic is pure wizardry."
            </p>
            <div className="flex items-center gap-4 mt-6 border-t border-mystic-mint/10 pt-6 relative z-10">
              <div className="w-10 h-10 rounded-full bg-nocturnal-expedition border border-mystic-mint/20 flex items-center justify-center font-bold text-forsythia">
                VS
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-white">Viktor Sterling</h4>
                <p className="text-[10px] font-sans text-mystic-mint/60 uppercase tracking-wider">VP of Cloud Core, Vercel Grid</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER FORM */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-nocturnal-expedition/10 to-transparent rounded-3xl" />
        <div className="relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-forsythia bg-forsythia/10 border border-forsythia/20 rounded-full mb-3 uppercase font-bold">
            OS Broadcasts
          </span>
          <h2 className="text-3xl font-sans font-bold text-white tracking-tight mb-4">
            Receive Localized Updates
          </h2>
          <p className="text-mystic-mint/60 max-w-xl mx-auto text-sm font-sans mb-8">
            Stay updated with custom-designed whitepapers, system releases, and technical reports on swarm architecture and latency routing.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-3 p-1.5 bg-nocturnal-expedition/50 border border-mystic-mint/15 rounded-xl">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your security-cleared email..."
              className="flex-1 bg-transparent border-none text-xs font-mono text-white px-3 py-2.5 focus:outline-none placeholder:text-mystic-mint/40"
              required
            />
            <button
              type="submit"
              disabled={newsletterStatus === "loading" || newsletterStatus === "success"}
              className="px-5 py-2.5 bg-forsythia text-oceanic-noir font-mono text-[10px] font-bold uppercase rounded-lg hover:bg-white transition-all cursor-pointer"
            >
              {newsletterStatus === "loading" ? "SYNCING..." : newsletterStatus === "success" ? "SUBSCRIBED" : "SIGN UP"}
            </button>
          </form>
          {newsletterStatus === "success" && (
            <p className="text-[11px] font-mono text-forsythia mt-3">✓ Success. Your security tunnel has been established.</p>
          )}
        </div>
      </section>
    </div>
  );
}
