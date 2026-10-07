import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import "@/i18n/i18n.ts";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toast";
import { NuqsAdapter } from "nuqs/adapters/react";
import { ThemeProvider } from "next-themes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <NuqsAdapter>
      <QueryProvider>
        <TooltipProvider>
          <Toaster />
          <App />
        </TooltipProvider>
      </QueryProvider>
    </NuqsAdapter>
  </ThemeProvider>
);
