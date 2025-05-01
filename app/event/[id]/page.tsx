"use client";

import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import EventDetails from "@/components/EventDetails";
import { WarEvent, warEvents } from "@/data/warEvents";
import Footer from "@/components/Footer";

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();

  const event = warEvents.find((e: WarEvent) => e.id === id);

  useEffect(() => {
    if (!event) {
      navigate.push("/");
    }
  }, [event, navigate]);

  if (!event) return null;

  const currentIndex = warEvents.findIndex((e: WarEvent) => e.id === id);
  const prevEvent = currentIndex > 0 ? warEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < warEvents.length - 1 ? warEvents[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto mt-6 px-5">
          <Link
            href="/"
            className="inline-flex items-center text-timeline-navy hover:text-timeline-burgundy transition-colors mb-6"
          >
            ← Voltar para a Linha do Tempo
          </Link>

          <EventDetails event={event} />

          <div className="flex flex-wrap justify-center md:justify-between max-w-4xl gap-2 mx-auto px-4 my-8 w-full items-center">
            {prevEvent ? (
              <Button
                className="border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white"
                asChild
              >
                <Link
                  className="flex items-center"
                  href={`/event/${prevEvent.id}`}
                >
                  ← {prevEvent.title} ({prevEvent.year})
                </Link>
              </Button>
            ) : (
              <div></div>
            )}

            {nextEvent && (
              <Button
                className="border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white"
                asChild
              >
                <Link
                  className="flex items-center"
                  href={`/event/${nextEvent.id}`}
                >
                  {nextEvent.title} ({nextEvent.year}) →
                </Link>
              </Button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
