"use client";

import type React from "react";
import type { WarEvent } from "../data/warEvents";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";

interface TimelineEventProps {
  event: WarEvent;
  position: string;
  isActive: boolean;
  onClick: () => void;
  isMobile: boolean;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({
  event,
  position,
  isActive,
  onClick,
  isMobile,
}) => {
  // Determine if we should render the event dot only or the full card
  const renderDotOnly = !isActive && isMobile;

  return (
    <div
      className={`absolute transition-all duration-300 cursor-pointer ${
        isActive ? "z-50" : "z-10"
      }`}
      style={{
        left: position,
        transform: "translateX(-50%)",
        top: isActive ? "50%" : "60%", // Position active events higher up
      }}
      onClick={onClick}
    >
      {/* Event card - only show if active or on desktop */}
      {!renderDotOnly && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isActive ? 1 : 0.7,
            y: 0,
            scale: isActive ? 1 : 0.95,
          }}
          transition={{ duration: 0.3 }}
          className="w-64 max-w-[calc(100vw-40px)] mb-4"
        >
          <Card
            className={`shadow-lg transition-all duration-300 ${
              isActive
                ? "border-timeline-burgundy border-2 z-50"
                : "border-gray-200"
            }`}
          >
            <CardHeader className="p-3 bg-timeline-navy text-white rounded-t-lg">
              <CardTitle className="text-base">{event.title}</CardTitle>
              <CardDescription className="text-gray-300 text-xs">
                {event.year}
              </CardDescription>
            </CardHeader>
            <CardContent className="p-3 pt-2">
              <p className="text-sm line-clamp-2">{event.description}</p>
            </CardContent>
            <CardFooter className="p-3 pt-0 flex justify-end">
              <Link
                href={`/evento/${event.id}`}
                className="text-xs text-timeline-navy font-medium hover:text-timeline-burgundy transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Ver detalhes →
              </Link>
            </CardFooter>
          </Card>
        </motion.div>
      )}

      {/* Connecting line */}
      <div
        className={`h-12 w-0.5 mx-auto mb-1 transition-all duration-300 ${
          isActive ? "bg-timeline-burgundy " : "bg-timeline-navy"
        }`}
      />

      {/* Event dot */}
      <div
        className={`h-4 w-4 rounded-full mx-auto transition-all duration-300 ${
          isActive
            ? "bg-timeline-burgundy scale-125"
            : "bg-timeline-navy scale-100 hover:scale-110"
        }`}
      />
    </div>
  );
};

export default TimelineEvent;
