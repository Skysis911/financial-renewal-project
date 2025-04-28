
import { cn } from "@/lib/utils";
import React from "react";

export const AnimatePulse = ({ 
  children,
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("animate-pulse-subtle", className)}>
      {children}
    </div>
  );
};
