@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  --color-oceanic-noir: #172B36;
  --color-nocturnal-expedition: #114C5A;
  --color-mystic-mint: #D9E8E2;
  --color-arctic-powder: #F1F6F4;
  --color-forsythia: #FFC801;
  --color-deep-saffron: #FF9932;
}

/* Custom performance-optimized micro-scrollbars and utility styles */
@layer base {
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #172B36;
  }
  ::-webkit-scrollbar-thumb {
    background: #114C5A;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #FFC801;
  }
}

/* Hardware accelerated transition layer */
.gpu-accelerated {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

/* Micro-interaction hover transitions (150ms-200ms, ease-out) */
.hover-btn-primary {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 180ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, background-color, box-shadow, border-color;
  transform: translate3d(0, 0, 0);
}

.hover-btn-primary:hover {
  transform: translate3d(0, -1.5px, 0);
}

.hover-btn-primary:active {
  transform: translate3d(0, 0.5px, 0);
}

.hover-btn-secondary {
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 180ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, background-color, border-color, box-shadow;
  transform: translate3d(0, 0, 0);
}

.hover-btn-secondary:hover {
  transform: translate3d(0, -1px, 0);
}

.hover-btn-secondary:active {
  transform: translate3d(0, 0, 0);
}

.hover-nav-link {
  position: relative;
  transition: color 150ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: color;
}

.hover-nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: var(--color-indigo-600, #4f46e5);
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform;
}

.hover-nav-link:hover {
  color: var(--color-indigo-600, #4f46e5);
}

.hover-nav-link:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}

.hover-card-interactive {
  transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 200ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 200ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 200ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, box-shadow, border-color, background-color;
  transform: translate3d(0, 0, 0);
}

.hover-card-interactive:hover {
  transform: translate3d(0, -4px, 0);
}

.hover-tabs-interactive {
  transition: transform 150ms cubic-bezier(0.16, 1, 0.3, 1),
              background-color 150ms cubic-bezier(0.16, 1, 0.3, 1),
              border-color 150ms cubic-bezier(0.16, 1, 0.3, 1),
              color 150ms cubic-bezier(0.16, 1, 0.3, 1),
              box-shadow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, background-color, border-color, color, box-shadow;
}

.hover-tabs-interactive:hover {
  transform: translate3d(2px, 0, 0);
}

