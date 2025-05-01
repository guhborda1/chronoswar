import React, { useEffect } from "react";

import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import Header from "@/components/Header";
import Link from "next/link";
import EventDetails from "@/components/EventDetails";
import { warEvents } from "@/data/warEvents";
import Footer from "@/components/Footer";

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useRouter();

  const event = warEvents.find((e: any) => e.id === id);

  useEffect(() => {
    if (!event) {
      navigate.push("/");
    }
  }, [event, navigate]);

  if (!event) return null;

  const currentIndex = warEvents.findIndex((e: any) => e.id === id);
  const prevEvent = currentIndex > 0 ? warEvents[currentIndex - 1] : null;
  const nextEvent =
    currentIndex < warEvents.length - 1 ? warEvents[currentIndex + 1] : null;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto mt-6">
          <Link
            href="/"
            className="inline-flex items-center text-timeline-navy hover:text-timeline-burgundy transition-colors mb-6"
          >
            ← Voltar para a Linha do Tempo
          </Link>

          <EventDetails event={event} />

          <div className="flex justify-between max-w-4xl mx-auto px-4 my-8">
            {prevEvent ? (
              <Link href={`/event/${prevEvent.id}`}>
                <Button className="border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white">
                  ← {prevEvent.title} ({prevEvent.year})
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextEvent && (
              <Link href={`/event/${nextEvent.id}`}>
                <Button className="border-timeline-navy text-timeline-navy hover:bg-timeline-navy hover:text-white">
                  {nextEvent.title} ({nextEvent.year}) →
                </Button>
              </Link>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EventPage;
