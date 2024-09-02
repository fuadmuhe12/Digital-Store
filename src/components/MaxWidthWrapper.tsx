import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

//TODO: check the px-20 effect with width of xl-screen
export default function MaxWidthWrapper({ children, className }: Props) {
  return (
    <div className={cn("max-w-screen-xl px-2.5 md:px-20 mx-auto", className)}>
      {children}
    </div>
  );
}
