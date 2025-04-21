import { Schedule, speakers } from "@/data";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FC, useState } from "react";
import SpeakerItem from "./speaker_item";

const ScheduleContentItem: FC<{
  item: Schedule;
}> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="flex gap-4 lg:gap-6 items-start last:border-b-0 relative">
        <div className="p-4 md:p-8">
          <div className="block antialiased font-sans text-foreground font-normal text-xs sm:text-base lg:text-lg opacity-90">
            {item.start}
          </div>
          <div className="block antialiased font-sans text-foreground font-normal text-xs sm:text-base lg:text-lg opacity-90">
            {item.end}
          </div>
        </div>
        <div className="p-4 md:p-8 flex items-center gap-3 flex-1">
          <div className="flex flex-col w-full">
            <div className="flex items-start flex-col justify-between">
              <div className="block antialiased font-sans text-foreground font-bold text-sm sm:text-base lg:text-lg lg:pb-1">
                {item.detail && (
                  <>
                    <div className="relative items-center font-bold uppercase whitespace-nowrap select-none bg-primary text-white py-1 px-2 text-xs rounded-md text-center inline mr-1">
                      {item.detail.lang.toUpperCase()}
                    </div>{" "}
                  </>
                )}
                {item.title}
              </div>
              <div className="block antialiased font-sans text-muted-foreground text-sm md:text-base lg:text-lg lg:pb-1">
                {item.location}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex gap-2 flex-col flex-1 p-4 md:p-8">
          {item.detail?.speaker_names.map((speaker) => {
            const speakerData = speakers.find((s) => s.name === speaker);
            if (!speakerData) {
              return null;
            }
            return (
              <SpeakerItem key={speakerData?.name} speaker={speakerData} />
            );
          })}
        </div>
        {!!item.detail?.about && (
          <div className="hidden md:flex absolute right-4 top-4">
            <CollapsibleTrigger className="stroke-slate-900 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 size-9">
              <ChevronDown
                className={cn(
                  "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all",
                  { "-rotate-90 scale-0": isOpen }
                )}
              />
              <ChevronUp
                className={cn(
                  "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all",
                  { "rotate-0 scale-100": isOpen }
                )}
              />
              <span className="sr-only">Toggle collapse</span>
            </CollapsibleTrigger>
          </div>
        )}
      </div>
      <div className="">
        <CollapsibleContent className="hidden md:block px-4 md:px-8 md:pb-8 text-muted-foreground">
          Topic about: {item.detail?.about || ""}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

export default ScheduleContentItem;
