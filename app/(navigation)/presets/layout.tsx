import { ToastProvider, ToastViewport } from "./components/Toast";
import { TooltipProvider } from "./components/Tooltip";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <ToastProvider>
        {children} <ToastViewport />
      </ToastProvider>
    </TooltipProvider>
  );
}