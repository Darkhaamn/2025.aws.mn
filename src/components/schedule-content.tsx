import { Schedule } from "@/data";
import { FC } from "react";
import ScheduleContentItem from "./schedule-content-item";

const ScheduleContent: FC<{
  eventSchedule: Schedule[];
}> = ({ eventSchedule }) => {
  return (
    <div className="mt-6 bg-card rounded-md blur-xs">
      {eventSchedule.map((item, index) => {
        return (
          <div
            className="border-b border-b-muted-foreground/20 last:border-b-0"
            key={index}
          >
            <ScheduleContentItem item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ScheduleContent;
