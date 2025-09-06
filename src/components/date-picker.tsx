"use client";

import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface DatePickerProps {
  className?: string;
  onChange?: (date: Date) => void;
  value?: Date;
  [key: string]: any;
}

export default function DatePicker({
  className,
  onChange,
  value,
  ...props
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          aria-invalid={props["aria-invalid"]}
          className={cn(
            "justify-start text-left font-normal",
            !value && "text-muted-foreground",
            "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
            className
          )}
        >
          <CalendarIcon />
          {value ? format(value, "dd/MM/yyyy") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Calendar
          mode="single"
          selected={value}
          captionLayout="dropdown"
          onSelect={(day: Date | undefined) => {
            if (day) onChange?.(day);
          }}
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
}
