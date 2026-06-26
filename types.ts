/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from "react";
import { Check, Info, Sparkles } from "lucide-react";
import { PRICING_TIERS, CURRENCIES, calculatePrice, PriceTier } from "../pricingConfig";

export default function PricingSection() {
  // Selectors DOM refs
  const billingToggleRef = useRef<HTMLInputElement>(null);
  const currencySelectRef = useRef<HTMLSelectElement>(null);

  // Price node refs for Starter, Pro, Enterprise
  const starterPriceRef = useRef<HTMLSpanElement>(null);
  const starterSubtextRef = useRef<HTMLSpanElement>(null);
  const starterCurrencySymbolRef = useRef<HTMLSpanElement>(null);

  const proPriceRef = useRef<HTMLSpanElement>(null);
  const proSubtextRef = useRef<HTMLSpanElement>(null);
  const proCurrencySymbolRef = useRef<HTMLSpanElement>(null);

  const enterprisePriceRef = useRef<HTMLSpanElement>(null);
  const enterpriseSubtextRef = useRef<HTMLSpanElement>(null);
  const enterpriseCurrencySymbolRef = useRef<HTMLSpanElement>(null);

  // Helper to trigger direct, performance-isolated DOM updates
  const updatePricesDirectly = () => {
    const isAnnual = billingToggleRef.current ? billingToggleRef.current.checked : false;
    const billingCycle = isAnnual ? "annual" : "monthly";
    const selectedCurrency = (currencySelectRef.current?.value || "USD") as keyof typeof CURRENCIES;

    const currencyConfig = CURRENCIES[selectedCurrency];

    // Map tier ids to their respective refs
    const refsMap = {
      starter: {
        price: starterPriceRef,
        subtext: starterSubtextRef,
        symbol: starterCurrencySymbolRef,
        baseUSD: PRICING_TIERS.find(t => t.id === "starter")?.baseMonthlyUSD || 29
      },
      pro: {
        price: proPriceRef,
        subtext: proSubtextRef,
        symbol: proCurrencySymbolRef,
        baseUSD: PRICING_TIERS.find(t => t.id === "pro")?.baseMonthlyUSD || 79
      },
      enterprise: {
        price: enterprisePriceRef,
        subtext: enterpriseSubtextRef,
        symbol: enterpriseCurrencySymbolRef,
        baseUSD: PRICING_TIERS.find(t => t.id === "enterprise")?.baseMonthlyUSD || 199
      }
    };

    // Calculate and update text contents directly
    Object.entries(refsMap).forEach(([tierId, refs]) => {
      const calculation = calculatePrice(refs.baseUSD, selectedCurrency, billingCycle);
      
      if (refs.symbol.current && refs.symbol.current.textContent !== currencyConfig.symbol) {
        refs.symbol.current.textContent = currencyConfig.symbol;
      }
      
      const newPriceStr = calculation.monthlyRate.toLocaleString();
      if (refs.price.current && refs.price.current.textContent !== newPriceStr) {
        refs.price.current.textContent = newPriceStr;
      }

      const newSubtext = billingCycle === "annual"
        ? `Billed annually (Total ${calculation.formattedTotal}/yr)`
        : "Billed month-to-month";
      if (refs.subtext.current && refs.subtext.current.textContent !== newSubtext) {
        refs.subtext.current.textContent = newSubtext;
      }
    });
  };

  // Run initial calculations on mount
  useEffect(() => {
    updatePricesDirectly();

    // Bind event listeners to DOM selectors directly
    const toggleElement = billingToggleRef.current;
    const selectElement = currencySelectRef.current;

    if (toggleElement) {
      toggleElement.addEventListener("change", updatePricesDirectly);
    }
    if (selectElement) {
      selectElement.addEventListener("change", updatePricesDirectly);
    }

    // Cleanup listeners
    return () => {
      if (toggleElement) {
        toggleElement.removeEventListener("change", updatePricesDirectly);
      }
      if (selectElement) {
        selectElement.removeEventListener("change", updatePricesDirectly);
      }
    };
  }, []);

  return (
    <div id="pricing-matrix-section" className="w-full">
      {/* Header section with inline switches */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 border-b border-slate-100 pb-8">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-mono tracking-widest text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full mb-3 uppercase">
            Predictable Bandwidth
          </span>
          <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
            Isolated Grid Compute Matrix
          </h2>
        </div>

        {/* Dynamic Controls: Isolate state updates through direct DOM actions */}
        <div className="flex flex-wrap items-center gap-4 bg-slate-50 border border-slate-200 p-2 rounded-xl shadow-sm">
          {/* Currency Dropdown Select */}
          <div className="flex items-center gap-2 px-2">
            <label htmlFor="currency-select" className="text-xs font-mono text-slate-500 uppercase tracking-wider">
              CURR
            </label>
            <select
              id="currency-select"
              ref={currencySelectRef}
              className="bg-white text-slate-800 text-xs font-mono rounded border border-slate-200 px-2 py-1.5 focus:outline-none focus:border-indigo-600 transition-all"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
          </div>

          {/* Divider */}
          <div className="hidden sm:block h-6 w-[1px] bg-slate-200" />

          {/* Billing Toggle Switch */}
          <div className="flex items-center gap-3 px-2">
            <span className="text-xs font-mono text-slate-500">Monthly</span>
            
            <label htmlFor="billing-toggle" className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="billing-toggle"
                ref={billingToggleRef}
                className="sr-only peer"
                defaultChecked={false}
              />
              <div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-indigo-600 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600/20" />
            </label>

            <span className="text-xs font-mono text-slate-700 flex items-center gap-1">
              Annual <span className="text-[10px] bg-indigo-50 text-indigo-600 border border-indigo-100 font-mono px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">-20%</span>
            </span>
          </div>
        </div>
      </div>

      {/* Pricing Matrix Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {PRICING_TIERS.map((tier) => {
          const isPro = tier.popular;
          
          // Get correct DOM element references based on tier
          let priceRef, subtextRef, symbolRef;
          if (tier.id === "starter") {
            priceRef = starterPriceRef;
            subtextRef = starterSubtextRef;
            symbolRef = starterCurrencySymbolRef;
          } else if (tier.id === "pro") {
            priceRef = proPriceRef;
            subtextRef = proSubtextRef;
            symbolRef = proCurrencySymbolRef;
          } else {
            priceRef = enterprisePriceRef;
            subtextRef = enterpriseSubtextRef;
            symbolRef = enterpriseCurrencySymbolRef;
          }

          return (
            <div
              key={tier.id}
              id={`pricing-card-${tier.id}`}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border hover-card-interactive gpu-accelerated ${
                isPro
                  ? "bg-white border-2 border-indigo-600 shadow-xl shadow-indigo-100"
                  : "bg-slate-50/50 border border-slate-200/60 hover:bg-slate-50"
              }`}
            >
              {isPro && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white font-mono text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full flex items-center gap-1 shadow-lg shadow-indigo-200">
                  <Sparkles className="w-3 h-3" /> Recommended Node
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-sans font-bold text-slate-900 tracking-tight mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline text-slate-900">
                    {/* Isolated DOM Target: Currency Symbol */}
                    <span
                      ref={symbolRef}
                      className="text-2xl font-sans font-bold text-slate-400 mr-1"
                    >
                      $
                    </span>
                    {/* Isolated DOM Target: Price Value */}
                    <span
                      ref={priceRef}
                      className="text-5xl font-mono font-bold tracking-tight text-slate-900"
                    >
                      -
                    </span>
                    <span className="text-xs font-mono text-slate-400 ml-2">/ month</span>
                  </div>
                  
                  {/* Isolated DOM Target: Billing Subtext */}
                  <span
                    ref={subtextRef}
                    className="text-[10px] font-mono text-indigo-600 mt-2 block font-medium"
                  >
                    Billed month-to-month
                  </span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8">
                  {tier.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                id={`pricing-cta-${tier.id}`}
                className={`w-full py-3 px-4 rounded-xl text-center font-mono text-xs font-semibold uppercase tracking-wider cursor-pointer gpu-accelerated ${
                  isPro
                    ? "bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-100 hover-btn-primary"
                    : "bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover-btn-secondary"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          );
        })}
      </div>

      {/* Notice / Footer */}
      <div className="mt-8 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
        <Info className="w-3.5 h-3.5 text-indigo-600" />
        <span>Prices undergo isolated tariff routing dynamically based on selected server zone currency and discount factors.</span>
      </div>
    </div>
  );
}
