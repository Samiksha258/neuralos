/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = "landing" | "features" | "pricing" | "dashboard" | "docs" | "about";

export interface LogEntry {
  timestamp: string;
  level: "INFO" | "SUCCESS" | "WARNING" | "CRITICAL" | "SYSTEM";
  message: string;
  node: string;
}

export interface MetricCard {
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  status: "nominal" | "degraded" | "optimal";
  chartData: number[];
}

export interface AIEmployee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  status: "idle" | "thinking" | "executing" | "resting";
  activeTask: string;
  efficiency: number;
  tokensProcessed: number;
}

export interface WorkflowNode {
  id: string;
  label: string;
  type: "trigger" | "action" | "condition";
  status: "idle" | "active" | "success" | "error";
  description: string;
}

export interface DocArticle {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  codeSnippet: string;
  language: string;
}
