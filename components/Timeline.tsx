"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import TimelineEvent from "./TimelineEvent"
import TimelinePeriod from "./TimelinePeriod"
import { warEvents, timePeriods } from "../data/warEvents"
import { Button } from "@/components/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"
import { ChevronLeft, ChevronRight } from "lucide-react"

const Timeline: React.FC = () => {
  const [activePeriodId, setActivePeriodId] = useState(timePeriods[0].id)
  const [activeEventId, setActiveEventId] = useState<string | null>(warEvents[0].id)
  const [centerPosition, setCenterPosition] = useState(0)
  const timelineRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  // Sort events chronologically
  const sortedEvents = [...warEvents].sort((a, b) => a.year - b.year)

  const startYear = 1700
  const endYear = 2025
  const totalYears = endYear - startYear

  // Calculate positions and widths
  const getEventPosition = (year: number) => {
    return `${((year - startYear) / totalYears) * 100}%`
  }

  const getPeriodWidth = (startYear: number, endYear: number) => {
    return `${((endYear - startYear) / totalYears) * 100}%`
  }

  const getPeriodPosition = (startYear: number) => {
    return `${((startYear - 1700) / totalYears) * 100}%`
  }

  // Handle event navigation
  const handleScrollToEvent = (eventId: string) => {
    const event = sortedEvents.find((e) => e.id === eventId)
    if (event) {
      const position = (event.year - startYear) / totalYears
      setCenterPosition(position)
      setActiveEventId(eventId)

      // Update active period based on event year
      for (const period of timePeriods) {
        if (event.year >= period.startYear && event.year <= period.endYear) {
          setActivePeriodId(period.id)
          break
        }
      }
    }
  }

  // Handle period selection
  const handlePeriodClick = (periodId: string) => {
    setActivePeriodId(periodId)
    const period = timePeriods.find((p) => p.id === periodId)
    if (period) {
      const middleYear = (period.startYear + period.endYear) / 2
      const position = (middleYear - startYear) / totalYears
      setCenterPosition(position)

      // Find an event close to the middle of the period
      const eventsInPeriod = sortedEvents.filter((e) => e.year >= period.startYear && e.year <= period.endYear)

      if (eventsInPeriod.length > 0) {
        const middleEvent = eventsInPeriod.reduce((prev, curr) => {
          return Math.abs(curr.year - middleYear) < Math.abs(prev.year - middleYear) ? curr : prev
        })
        setActiveEventId(middleEvent.id)
      }
    }
  }

  // Handle timeline click
  const handleTimelineClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!timelineRef.current) return

    const rect = timelineRef.current.getBoundingClientRect()
    const clickPosition = (e.clientX - rect.left) / rect.width

    const clickedYear = Math.round(clickPosition * totalYears + startYear)

    // Find the closest event to the clicked year
    const closestEvent = sortedEvents.reduce((prev, curr) => {
      return Math.abs(curr.year - clickedYear) < Math.abs(prev.year - clickedYear) ? curr : prev
    })

    setCenterPosition(clickPosition)
    setActiveEventId(closestEvent.id)
    updateActivePeriod(clickedYear)
  }

  // Update active period based on year
  const updateActivePeriod = (year: number) => {
    for (const period of timePeriods) {
      if (year >= period.startYear && year <= period.endYear) {
        setActivePeriodId(period.id)
        break
      }
    }
  }

  // Navigation handlers
  const handleNext = () => {
    const currentIndex = sortedEvents.findIndex((e) => e.id === activeEventId)
    if (currentIndex < sortedEvents.length - 1) {
      handleScrollToEvent(sortedEvents[currentIndex + 1].id)
    }
  }

  const handlePrevious = () => {
    const currentIndex = sortedEvents.findIndex((e) => e.id === activeEventId)
    if (currentIndex > 0) {
      handleScrollToEvent(sortedEvents[currentIndex - 1].id)
    }
  }

  // Update timeline position when centerPosition changes
  useEffect(() => {
    if (timelineRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth
      const timelineWidth = containerWidth * 5 // Make timeline 5x container width for smooth scrolling
      const targetPosition = centerPosition * timelineWidth - containerWidth / 2

      timelineRef.current.style.transition = "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)"
      timelineRef.current.style.transform = `translateX(-${targetPosition}px)`
    }
  }, [centerPosition])

  // Get active event
  const activeEvent = sortedEvents.find((e) => e.id === activeEventId)

  return (
    <div className="w-full my-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-timeline-navy">Linha do Tempo Histórica</h2>

      {/* Navigation buttons */}
      <div className="mb-6 flex justify-center space-x-4">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={sortedEvents.findIndex((e) => e.id === activeEventId) === 0}
          className="border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white"
        >
          <ChevronLeft className="mr-1 h-4 w-4" />
          Anterior
        </Button>
        <Button
          variant="outline"
          onClick={handleNext}
          disabled={sortedEvents.findIndex((e) => e.id === activeEventId) === sortedEvents.length - 1}
          className="border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white"
        >
          Próximo
          <ChevronRight className="ml-1 h-4 w-4" />
        </Button>
      </div>

      {/* Active event info */}
      {activeEvent && (
        <div className="text-center mb-4">
          <span className="inline-block bg-timeline-navy text-white px-3 py-1 rounded-full text-sm font-medium">
            {activeEvent.year}
          </span>
          <h3 className="text-lg font-semibold mt-1">{activeEvent.title}</h3>
        </div>
      )}

      {/* Timeline container */}
      <div
        ref={containerRef}
        className="relative overflow-hidden w-full h-[400px] md:h-[450px] border border-gray-200 rounded-lg shadow-sm bg-white"
      >
        <div
          ref={timelineRef}
          className="absolute h-full transition-transform duration-500 ease-out"
          style={{ width: "500%", transformOrigin: "left center" }}
          onClick={handleTimelineClick}
        >
          {/* Main timeline line - positioned in the middle */}
          <div className="absolute w-full h-2 bg-gray-200 top-1/2 transform -translate-y-1/2 z-0"></div>

          {/* Time periods - positioned below the line */}
          <div className="absolute w-full top-1/2 transform translate-y-4 z-10">
            {timePeriods.map((period) => (
              <TimelinePeriod
                key={period.id}
                period={period}
                width={getPeriodWidth(period.startYear, period.endYear)}
                position={getPeriodPosition(period.startYear)}
                isActive={period.id === activePeriodId}
                onClick={() => handlePeriodClick(period.id)}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Timeline events - positioned above the line */}
          <div className="absolute w-full top-0 pt-4 z-30">
            {sortedEvents.map((event) => (
              <TimelineEvent
                key={event.id}
                event={event}
                position={getEventPosition(event.year)}
                isActive={event.id === activeEventId}
                onClick={() => handleScrollToEvent(event.id)}
                isMobile={isMobile}
              />
            ))}
          </div>

          {/* Current year marker */}
          <div
            className="absolute w-1 h-full bg-timeline-burgundy top-0 z-20"
            style={{
              left: activeEvent ? getEventPosition(activeEvent.year) : "0%",
            }}
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-timeline-burgundy text-white px-2 py-1 rounded-full text-sm font-bold">
              {activeEvent?.year || startYear}
            </div>
          </div>
        </div>
      </div>

      {/* Year range indicators */}
      <div className="flex justify-between text-sm text-gray-500 px-2 mt-2">
        <span>{startYear}</span>
        <span>{endYear}</span>
      </div>
    </div>
  )
}

export default Timeline
