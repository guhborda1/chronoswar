"use client";

import type React from "react";
import type { TimePeriod } from "../data/warEvents";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelinePeriodProps {
  period: TimePeriod;
  width: string;
  position: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

const TimelinePeriod: React.FC<TimelinePeriodProps> = ({
  period,
  width,
  position,
  isActive,
  onClick,
  isMobile,
}) => {
  const periodContent = (
    <div className="text-xs text-center">
      <div className="font-medium">{period.name}</div>
      <div className="text-[10px] opacity-80">
        {period.startYear} - {period.endYear}
      </div>
    </div>
  );

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 ${
        isActive
          ? "h-10 -top-1 z-20"
          : "h-8 top-0 z-10 hover:h-9 hover:-top-0.5"
      }`}
      style={{
        width,
        left: position,
        backgroundColor: period.color,
        opacity: isActive ? 1 : 0.8,
        borderRadius: "4px",
      }}
      onClick={onClick}
    >
      {isMobile ? (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="w-full h-full" />
            </TooltipTrigger>
            <TooltipContent>{periodContent}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ) : (
        <div
          className={`absolute w-full text-white font-medium text-center ${
            isActive ? "-top-8" : "-top-7"
          }`}
        >
          {periodContent}
        </div>
      )}
    </div>
  );
};

export default TimelinePeriod;
