import { WarEvent } from "../data/warEvents";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
  event: WarEvent;
  isActive: boolean;
  onClick?: () => void;
};

const TimelineEvent = ({ event, isActive, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "w-[300px] cursor-pointer transition-transform duration-300 hover:scale-105",
        isActive ? "border-blue-500 ring-2 ring-blue-300" : "opacity-80"
      )}
    >
      <CardContent className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-timeline-navy">
          {event.title}
        </h3>
        <p className="text-sm text-muted-foreground">{event.year}</p>
        <p className="text-sm line-clamp-3">{event.description}</p>
        <Button asChild>
          <Link href={`/event/${event.id}`}>Ver mais</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default TimelineEvent;
