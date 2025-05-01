"use client";

import { useEffect, useRef, useState } from "react";
import { warEvents, timePeriods } from "../data/warEvents";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TimelineEvent from "./TimelineEvent";

const Timeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [selectedPeriodId, setSelectedPeriodId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredEvents = selectedPeriodId
    ? warEvents.filter((e) => {
        const period = timePeriods.find((p) => p.id === selectedPeriodId);
        return period && e.year >= period.startYear && e.year <= period.endYear;
      })
    : warEvents;

  const scrollToEvent = (index: number) => {
    if (!timelineRef.current) return;
    const timeline = timelineRef.current;
    const eventNode = timeline.children[index] as HTMLElement;
    if (eventNode) {
      // Calculate the scroll position relative to the container
      const container = timeline.parentElement;
      const eventRect = eventNode.getBoundingClientRect();
      const containerRect = container!.getBoundingClientRect();

      // Calculate the scroll offset needed to center the event
      const scrollOffset =
        eventRect.left -
        containerRect.left -
        containerRect.width / 2 +
        eventRect.width / 2;

      // Smooth scroll to the calculated position
      timeline.scrollTo({
        left: timeline.scrollLeft + scrollOffset,
        behavior: "smooth",
      });

      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredEvents.length - 1) {
      scrollToEvent(activeIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (activeIndex > 0) {
      scrollToEvent(activeIndex - 1);
    }
  };

  useEffect(() => {
    scrollToEvent(0);
  }, [selectedPeriodId]);

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold text-center mb-4 text-timeline-navy">
        Linha do Tempo Histórica
      </h2>

      {/* Filtro por período */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        <Button
          variant={selectedPeriodId === null ? "default" : "outline"}
          onClick={() => setSelectedPeriodId(null)}
        >
          Todos os Períodos
        </Button>
        {timePeriods.map((period) => (
          <Button
            key={period.id}
            variant={selectedPeriodId === period.id ? "default" : "outline"}
            onClick={() => setSelectedPeriodId(period.id)}
          >
            {period.name}
          </Button>
        ))}
      </div>

      {/* Navegação */}
      <div className="flex justify-center gap-4 mb-4">
        <Button onClick={handlePrevious} disabled={activeIndex === 0}>
          <ChevronLeft className="w-4 h-4 mr-1" />
          Anterior
        </Button>
        <Button
          onClick={handleNext}
          disabled={activeIndex === filteredEvents.length - 1}
        >
          Próximo
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>

      {/* Linha do tempo */}
      <div
        className="relative w-full overflow-x-auto"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          ref={timelineRef}
          className="flex gap-6 px-6 py-4 snap-x snap-mandatory overflow-x-auto"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filteredEvents.map((event, index) => (
            <div key={event.id} className="snap-center shrink-0">
              <TimelineEvent
                event={event}
                isActive={index === activeIndex}
                onClick={() => scrollToEvent(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
