/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Zap, 
  Menu, 
  X, 
  Globe, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Terminal, 
  Activity, 
  Info,
  ExternalLink
} from "lucide-react";
import LandingPage from "./components/LandingPage";
import FeaturesPage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";
import DashboardPage from "./components/DashboardPage";
import DocsPage from "./components/DocsPage";
import AboutPage from "./components/AboutPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"landing" | "features" | "pricing" | "dashboard" | "docs" | "about">("landing");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Transition / Entrance fade sequence (under 500ms)
  useEffect(() => {
    setIsLoaded(false);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [currentPage]);

  const handleNavigate = (page: typeof currentPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-oceanic-noir text-arctic-powder min-h-screen flex flex-col selection:bg-forsythia/20 selection:text-forsythia">
      
      {/* GLOBAL HEADER */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-oceanic-noir/80 border-b border-mystic-mint/10 h-16">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavigate("landing")}
            className="flex items-center gap-2.5 cursor-pointer text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-lg bg-forsythia flex items-center justify-center relative">
              <Zap className="w-4 h-4 text-oceanic-noir fill-current" />
              <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-pulse border border-oceanic-noir" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-white text-sm tracking-tight leading-none">
                NeuralOS
              </span>
              <span className="font-mono text-[8px] text-mystic-mint/40 tracking-wider mt-0.5 font-bold">
                AUTONOMOUS SYSTEM
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono font-bold text-mystic-mint/60">
            {[
              { id: "landing", label: "Overview" },
              { id: "features", label: "AI Swarms" },
              { id: "pricing", label: "Compute Matrix" },
              { id: "dashboard", label: "Operations Dashboard" },
              { id: "docs", label: "Developer Specs" },
              { id: "about", label: "Our Story" }
            ].map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id as any)}
                  className={`hover:text-white transition-colors relative py-1 cursor-pointer focus:outline-none ${
                    isActive ? "text-forsythia font-extrabold" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-forsythia rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-forsythia bg-forsythia/10 border border-forsythia/20 px-2.5 py-1 rounded">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              SWARM CORE ONLINE
            </span>
            <button
              onClick={() => handleNavigate("dashboard")}
              className="py-1.5 px-3.5 bg-forsythia text-oceanic-noir text-xs font-mono font-bold rounded-lg hover:bg-white transition-all cursor-pointer shadow-lg shadow-forsythia/5 hover-btn-primary gpu-accelerated"
            >
              Access Core
            </button>
          </div>

          {/* Mobile Navigation Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-mystic-mint/80 hover:text-white focus:outline-none cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE NAVIGATION DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 bg-oceanic-noir z-40 lg:hidden flex flex-col p-6 gap-6 overflow-y-auto animate-fade-in border-t border-mystic-mint/10">
          <nav className="flex flex-col gap-4">
            {[
              { id: "landing", label: "System Overview" },
              { id: "features", label: "AI Swarms & Architecture" },
              { id: "pricing", label: "Compute Pricing Matrix" },
              { id: "dashboard", label: "Operations Dashboard" },
              { id: "docs", label: "Developer API Specs" },
              { id: "about", label: "Mission & Release Story" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavigate(link.id as any)}
                className={`text-left font-mono text-sm py-2 border-b border-mystic-mint/5 focus:outline-none cursor-pointer ${
                  currentPage === link.id ? "text-forsythia font-bold" : "text-mystic-mint/60"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-6 border-t border-mystic-mint/10">
            <div className="flex items-center gap-2 text-xs font-mono text-forsythia">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              <span>SYS_INGRESS_SECURE</span>
            </div>
            <button
              onClick={() => handleNavigate("dashboard")}
              className="w-full py-3 bg-forsythia text-oceanic-noir text-xs font-mono font-bold rounded-xl text-center cursor-pointer"
            >
              Launch Operations
            </button>
          </div>
        </div>
      )}

      {/* DYNAMIC VIEW CONTAINER */}
      <main className={`flex-grow transition-opacity duration-300 ease-out ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        {currentPage === "landing" && <LandingPage onNavigate={handleNavigate} />}
        {currentPage === "features" && <FeaturesPage />}
        {currentPage === "pricing" && <PricingPage />}
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "docs" && <DocsPage />}
        {currentPage === "about" && <AboutPage />}
      </main>

      {/* GLOBAL FOOTER */}
      <footer className="bg-nocturnal-expedition border-t border-mystic-mint/10 py-16 text-mystic-mint/60 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-forsythia flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-oceanic-noir fill-current" />
              </div>
              <span className="font-sans font-extrabold text-white text-base">NeuralOS</span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              The premier autonomous model routing and multi-agent coordination system. Built with Stripe-inspired precision and sub-10ms localized latency guarantees.
            </p>
          </div>

          {/* Links: Platform */}
          <div>
            <h4 className="text-xs font-mono text-white mb-4 uppercase tracking-widest font-bold">Platform Suite</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><button onClick={() => handleNavigate("landing")} className="hover:text-forsythia cursor-pointer">System Overview</button></li>
              <li><button onClick={() => handleNavigate("features")} className="hover:text-forsythia cursor-pointer">AI Swarms & Models</button></li>
              <li><button onClick={() => handleNavigate("pricing")} className="hover:text-forsythia cursor-pointer">Compute Matrix</button></li>
              <li><button onClick={() => handleNavigate("dashboard")} className="hover:text-forsythia cursor-pointer">Operations Console</button></li>
            </ul>
          </div>

          {/* Links: Dev Specs */}
          <div>
            <h4 className="text-xs font-mono text-white mb-4 uppercase tracking-widest font-bold">Developer Specs</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><button onClick={() => handleNavigate("docs")} className="hover:text-forsythia cursor-pointer">API References</button></li>
              <li><button onClick={() => handleNavigate("docs")} className="hover:text-forsythia cursor-pointer">SDK Documentation</button></li>
              <li><button onClick={() => handleNavigate("about")} className="hover:text-forsythia cursor-pointer">Release Log</button></li>
            </ul>
          </div>

          {/* Links: Corporate */}
          <div>
            <h4 className="text-xs font-mono text-white mb-4 uppercase tracking-widest font-bold">Organization</h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li><button onClick={() => handleNavigate("about")} className="hover:text-forsythia cursor-pointer">About Mission</button></li>
              <li><button onClick={() => handleNavigate("about")} className="hover:text-forsythia cursor-pointer">Careers Core</button></li>
              <li><button onClick={() => handleNavigate("pricing")} className="hover:text-forsythia cursor-pointer">Contact Support</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright and SLA status */}
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-mystic-mint/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-mystic-mint/30">
          <span>© 2026 NeuralOS Corporation. All rights reserved.</span>
          <div className="flex gap-6">
            <span>SECURE SHA_256 CONTEXT</span>
            <span>MILITARY_GRADE_ISOLATION</span>
            <span>ISO_27001_COMPLIANT</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
