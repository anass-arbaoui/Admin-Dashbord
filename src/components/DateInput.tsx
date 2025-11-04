"use client";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Calendar1 } from "lucide-react";
import { Calendar } from "../components/ui/calendar";
import { Button } from "./ui/button";
import { format } from "date-fns";

function DateInput() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full">
          <Calendar1 /> {date ? format(date, "PPP") : "Select Date"}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side="bottom"
        align="center"
        className="w-[--radix-popover-trigger-width]"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-lg border"
        />
      </PopoverContent>
    </Popover>
  );
}

export default DateInput;
